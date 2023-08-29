import Image from 'next/image';
import _truncate from 'lodash.truncate';
import _shuffle from 'lodash.shuffle';

import Card from '@/app/components/card';
import { Show } from '../../../types';
import { getSearchedResult } from '@/lib/fetcher';
import { getSafeImageUrl } from '@/lib/util';

interface Collection {
  title: string;
  shows: Show[];
}

interface CollectionsProps {
  collections: Collection[];
  searchTerm?: string;
}

const TRUNCATE_OPTIONS = { length: 149 };

export default async function Collections({
  collections,
  searchTerm = '',
}: CollectionsProps) {
  const searchedResult = await getSearchedResult(searchTerm);

  if (searchedResult.results.length > 0) {
    return (
      <Card.Group>
        <Card>
          <Card.Entities className="flex-wrap justify-center gap-y-12">
            {searchedResult.results.map((show) => {
              const src = getSafeImageUrl(show.backdrop_path);
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
                  <Card.Meta>
                    <Card.SubTitle>{show.title ?? show.name}</Card.SubTitle>
                    <Card.Text>
                      {_truncate(show.overview ?? '', TRUNCATE_OPTIONS)}
                    </Card.Text>
                  </Card.Meta>
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
    <Card.Group className="pt-24">
      {collections.map((collection) => (
        <Card key={collection.title}>
          <Card.Title>{collection.title}</Card.Title>
          <Card.Entities>
            {/* temporarily cut off shows */}
            {_shuffle(collection.shows)
              .slice(0, 5)
              .map((show) => {
                const src = getSafeImageUrl(show.backdrop_path);
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
                    <Card.Meta>
                      <Card.SubTitle>{show.title ?? show.name}</Card.SubTitle>
                      <Card.Text>
                        {_truncate(show.overview ?? '', TRUNCATE_OPTIONS)}
                      </Card.Text>
                    </Card.Meta>
                  </Card.Item>
                );
              })}
          </Card.Entities>
        </Card>
      ))}
    </Card.Group>
  );
}
