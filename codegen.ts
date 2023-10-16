import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'schema.graphql',
  documents: './src/**/*.{tsx,ts}',
  generates: {
    './src/generated/resolver-types.ts': {
        config: {
        mappers: {
            Hero: '../types#Show',
        },
        },
      plugins: ['typescript', 'typescript-resolvers'],
    },
    './src/generated/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;