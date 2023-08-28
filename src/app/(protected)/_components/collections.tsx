import Image from 'next/image';

import Card from '@/app/components/card';
import { Show } from '../../../types';
import { getSearchedResult } from '@/lib/fetcher';

interface Collection {
  title: string;
  shows: Show[];
}

interface CollectionsProps {
  collections: Collection[];
  searchTerm?: string;
}

export default async function Collections({
  collections,
  searchTerm = '',
}: CollectionsProps) {
  const searchedResult = await getSearchedResult(searchTerm);

  if (searchedResult.results.length > 0) {
    console.log('here');
    return (
      <Card.Group>
        <Card>
          <Card.Entities className="flex-wrap justify-center gap-y-12">
            {searchedResult.results.map((show) => {
              const src = show.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${show.backdrop_path}`
                : 'https://via.placeholder.com/230x130.jpg/ffffff?text=No+Movie+Poster';
              return (
                <Card.Item
                  className="first-of-type:ml-0 last-of-type:mr-0"
                  key={show.id}
                >
                  <Card.Image>
                    <Image
                      width={305}
                      height={200}
                      src={src}
                      alt={show.title ?? 'show-image'}
                    />
                  </Card.Image>
                </Card.Item>
              );
            })}
          </Card.Entities>
        </Card>
        ;
      </Card.Group>
    );
  }

  return (
    <Card.Group>
      {collections.map((collection) => (
        <Card key={collection.title}>
          <Card.Title>{collection.title}</Card.Title>
          <Card.Entities>
            {/* temporarily cut off shows */}
            {collection.shows.slice(0, 5).map((show) => {
              const src = show.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${show.backdrop_path}`
                : 'https://via.placeholder.com/230x130.jpg/ffffff?text=No+Movie+Poster';
              return (
                <Card.Item data-testid="item" key={show.id}>
                  <Card.Image>
                    <Image
                      width={305}
                      height={200}
                      src={src}
                      alt={show.title ?? 'show-image'}
                    />
                  </Card.Image>
                </Card.Item>
              );
            })}
          </Card.Entities>
        </Card>
      ))}
    </Card.Group>
  );
}
