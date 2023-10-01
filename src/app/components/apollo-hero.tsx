'use client';

import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { twMerge as tm } from 'tailwind-merge';
import { useState, ReactNode } from 'react';

import { gql } from '@/generated';
import PlayIcon from '@/app/ui/icons/play';
import ExclamationCircleIcon from '@/app/ui/icons/exclamation-circle';
import type { Show } from '@/types';
import ShowModal from './show-modal';

// query name GetHero must provide otherwise graphql-codegen will ignore to generate types!!
const HERO = gql(`
  query GetHero  {
    getHero {
      language
      matchPercentage
      genres
      title
      releaseDate
      trailer
      overview
      poster
      id
    }
  }
`);

type HeroProps =
  | {
      type: 'show';
    }
  | {
      type: 'static';
      src: string;
      children: ReactNode;
    };

export default function HeroApollo(props: HeroProps & { className?: string }) {
  const { data, loading } = useQuery(HERO);
  const { getHero: hero } = data || {};
  const [toggle, setToggle] = useState(false);

  const handleToggleDialog = () => {
    setToggle(true);
  };

  let banner: JSX.Element | null;
  if (props.type === 'show') {
    banner = (
      <>
        <div className="container w-full max-w-screen-2xl px-14">
          <div className="absolute inset-0 -z-10 h-screen w-full">
            <div
              className={tm(
                'bg-black/60 bg-gradient-to-b from-neutral-900/10 to-neutral-900',
                'absolute inset-0 z-10 h-full w-full'
              )}
            />
            <Image
              src={`https://image.tmdb.org/t/p/original/${hero?.poster ?? ''}`}
              alt={hero?.title ?? 'poster'}
              className="h-auto w-full object-cover"
              fill
              priority
            />
          </div>
          <div className="grid max-w-lg space-y-2 pt-24">
            <h1 className="text-3xl font-bold md:text-4xl text-white">
              {hero?.title}
            </h1>
            <div className="flex space-x-2 text-xs font-semibold md:text-sm">
              <p className="text-green-600">{hero?.matchPercentage} Match</p>
              <p className="text-gray-300">{hero?.releaseDate}</p>
            </div>
            <p className="line-clamp-4 text-sm text-gray-300 md:text-base">
              {hero?.overview}
            </p>
            <div className="flex items-center space-x-2 pt-1.5">
              <button
                aria-label="Play video"
                className="h-auto gap-1.5 rounded bg-white px-4 py-2 flex items-center justify-center text-sm font-medium"
                onClick={handleToggleDialog}
              >
                <PlayIcon />
                Play
              </button>
              <button
                aria-label="Open show's details modal"
                className="h-auto gap-2 rounded border border-solid border-white px-4 py-2 text-white flex items-center justify-center"
                onClick={handleToggleDialog}
              >
                <ExclamationCircleIcon />
                More Info
              </button>
            </div>
          </div>
        </div>
        <ShowModal
          toggle={toggle}
          toggleHandler={setToggle}
          show={{} as Show}
        />
      </>
    );
  } else {
    banner = (
      <div className="w-full max-w-screen-2xl">
        <div
          className={tm(
            'absolute inset-0 -z-10 h-screen w-full',
            props.className ?? ''
          )}
        >
          <Image
            src={props.src}
            alt="test"
            className="h-auto w-full object-cover"
            fill
            priority
          />
        </div>
        {props.children}
      </div>
    );
  }

  return <section className="w-full">{banner}</section>;
}
