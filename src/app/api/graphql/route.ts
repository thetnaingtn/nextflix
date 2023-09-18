import _truncate from 'lodash.truncate';
import { Resolvers } from '@/generated/graphql';
import { getShow } from '@/lib/fetcher';
import { Show } from '@/types';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { readFileSync } from 'fs';
import { join } from 'path';

const TRUNCATE_OPTIONS = { length: 149 };

function modifyShow(shows: Show[]) {
  return shows.map((show) => ({
    id: String(show.id),
    overview: show.overview,
    original_language: show.original_language,
    original_title: show.original_title,
  }));
}

const resolvers: Resolvers = {
  Query: {
    async getShowCollection() {
      const allShows = await getShow('tv');

      return {
        trending: modifyShow(allShows.trending),
        topRated: modifyShow(allShows.topRated),
        netflix: modifyShow(allShows.netflix),
        action: modifyShow(allShows.action),
        comedy: modifyShow(allShows.comedy),
        horror: modifyShow(allShows.horror),
        romance: modifyShow(allShows.romance),
        docs: modifyShow(allShows.docs),
      };
    },
  },
  Show: {
    // id(show) {
    //   return show.id;
    // },
    overview(show) {
      return _truncate(show.overview ?? '', TRUNCATE_OPTIONS);
    },
    // original_language(show) {
    //   return show.original_language;
    // },
    // original_title(show) {
    //   return show.original_title ?? '';
    // },
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
