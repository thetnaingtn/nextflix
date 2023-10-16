/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Hero = {
  __typename?: 'Hero';
  genres: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  matchPercentage: Scalars['String']['output'];
  overview: Scalars['String']['output'];
  poster?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  trailer?: Maybe<Scalars['String']['output']>;
};


export type HeroGenresArgs = {
  media: Media;
};


export type HeroTrailerArgs = {
  media: Media;
};

export enum Media {
  Movie = 'movie',
  Tv = 'tv'
}

export type Query = {
  __typename?: 'Query';
  getHero: Hero;
};


export type QueryGetHeroArgs = {
  media: Media;
};
