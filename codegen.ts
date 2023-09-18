import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'schema.graphql',
  documents: './src/**/*.{tsx,ts}',
  generates: {
    './src/generated/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
  ignoreNoDocuments: false,
};

export default config;
