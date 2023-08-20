import Hero from '@/app/components/hero';
import { getShow } from '@/lib/fetcher';

export default async function Page() {
  const allShows = await getShow('tv');
  return (
    <section>
      <div className="pb-16 pt-10">
        {/* @ts-expect-error server component */}
        <Hero type="show" shows={allShows.netflix} />
      </div>
    </section>
  );
}
