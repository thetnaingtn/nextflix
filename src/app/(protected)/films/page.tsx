import Hero from '@/app/components/hero';
import { getShow } from '@/lib/fetcher';
import Collections from '../_components/collections';

export default async function Page({
  searchParams,
}: {
  searchParams: Record<PropertyKey, string>;
}) {
  const allShows = await getShow('movie');

  const collections = [
    { title: 'Trending', shows: allShows.trending },
    { title: 'Top Rated', shows: allShows.topRated },
    { title: 'Action', shows: allShows.action },
    { title: 'Comedy', shows: allShows.comedy },
    { title: 'Horror', shows: allShows.horror },
    { title: 'Romance', shows: allShows.romance },
    { title: 'Documentary', shows: allShows.docs },
  ];

  return (
    <section>
      <div className="pt-10">
        {!searchParams.search && <Hero type="show" shows={allShows.netflix} />}
        <Collections
          collections={collections}
          searchTerm={searchParams?.search ?? ''}
        />
      </div>
    </section>
  );
}
