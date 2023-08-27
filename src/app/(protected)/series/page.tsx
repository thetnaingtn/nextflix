import Hero from '@/app/components/hero';
import { getShow } from '@/lib/fetcher';
import Collections from '../_components/collections';

export default async function Page() {
  const allShows = await getShow('movie');

  const collections = [
    { title: 'Trending', shows: allShows.trending },
    { title: 'Top Rated', shows: allShows.topRated },
    { title: 'Comedy', shows: allShows.comedy },
    { title: 'Romance', shows: allShows.romance },
    { title: 'Documentary', shows: allShows.docs },
  ];

  return (
    <section>
      <div className="pb-16 pt-10">
        {/* @ts-expect-error server component */}
        {/* <Hero type="show" shows={allShows.netflix} /> */}
        <Collections collections={collections} />
      </div>
    </section>
  );
}
