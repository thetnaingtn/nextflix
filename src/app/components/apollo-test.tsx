'use client';

import { gql } from '@/generated';
import { useQuery } from '@apollo/client';

const COLLECTION = gql(`
query GetShowCollection  {
  getShowCollection {
    netflix {
      original_language
      original_title
      overview
    } 
  }
} 
`);

export default function ApolloTest() {
  const { data, loading } = useQuery(COLLECTION);

  return (
    <pre className="text-white">
      {data?.getShowCollection.netflix.map((show) => show.overview)}
    </pre>
  );
}
