import _truncate from 'lodash.truncate';
import { Resolvers } from '@/generated/resolver-types';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { readFileSync } from 'fs';
import { join } from 'path';
import { getRandomShow } from '@/lib/util';

async function getShowDetail(id: string, media: string) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/${media}/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&append_to_response=videos`
  );
  const data = await resp.json();
  return data;
}

const resolvers: Resolvers = {
  Query: {
    async getHero(_, { media }) {
      const resp = await fetch(
        `https://api.themoviedb.org/3/discover/${media}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_networks=213`
      );
      const shows = await resp.json();
      const randomShow = getRandomShow(shows.results);

      return randomShow;
    },
  },
  Hero: {
    id(show) {
      return String(show.id);
    },
    title(show) {
      return show.title ?? show.original_title ?? show.name ?? '';
    },
    async trailer(show, { media }) {
      const showDetail = await getShowDetail(String(show.id), media);
      const { key = '' } =
        showDetail?.videos.results.find(
          (video: any) => video.type === 'Trailer'
        ) || {};
      return `https://www.youtube.com/watch?v=${key}`;
    },
    matchPercentage(show) {
      const match = Math.round((Number(show?.vote_average) / 10) * 100);
      return `${match ?? '-'} %`;
    },
    async genres(show, { media }) {
      const showDetail = await getShowDetail(String(show.id), media);
      return showDetail.genres?.map((genre: any) => genre.name);
    },
    releaseDate(show) {
      return show.release_date ?? show.first_air_date ?? '-';
    },
    overview(show) {
      return show.overview ?? '-';
    },
    language(show) {
      return show.original_language ?? '';
    },
    poster(show) {
      return show.poster_path ?? show.backdrop_path ?? '';
    },
  },
};

const typeDefs = readFileSync(join(process.cwd(), 'schema.graphql'), {
  encoding: 'utf-8',
});

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
