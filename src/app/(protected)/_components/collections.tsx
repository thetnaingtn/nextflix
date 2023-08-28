import Image from 'next/image';

import Card from '@/app/components/card';
import { Show } from '../../../types';

interface Collection {
  title: string;
  shows: Show[];
}

interface CollectionsProps {
  collections: Collection[];
}

export default function Collections({ collections }: CollectionsProps) {
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
