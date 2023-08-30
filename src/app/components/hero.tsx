import Image from 'next/image';
import { twMerge as tm } from 'tailwind-merge';

import PlayIcon from '@/app/components/icons/play';
import ExclamationCircleIcon from '@/app/components/icons/exclamation-circle';

import type { Show } from '@/types';

type HeroProps =
  | {
      type: 'show';
      shows: Show[];
    }
  | {
      type: 'static';
      src: string;
      children: React.ReactNode;
    };

export default async function Hero(props: HeroProps) {
  let banner!: JSX.Element;
  if (props.type === 'show') {
    const random = Math.floor(Math.random() * props.shows.length);
    let randomShow = props.shows[random];
    banner = randomShow && (
      <div className="container w-full max-w-screen-2xl px-14">
        <div className="absolute inset-0 -z-10 h-screen w-full">
          <div
            className={tm(
              'bg-black/60 bg-gradient-to-b from-neutral-900/10 to-neutral-900',
              'absolute inset-0 z-10 h-full w-full'
            )}
          />
          <Image
            src={`https://image.tmdb.org/t/p/original${
              randomShow?.backdrop_path ?? randomShow?.poster_path ?? ''
            }`}
            alt={randomShow?.title ?? 'poster'}
            className="h-auto w-full object-cover"
            fill
            priority
          />
        </div>
        <div className="grid max-w-lg space-y-2 pt-24">
          <h1 className="text-3xl font-bold md:text-4xl text-white">
            {randomShow?.title ?? randomShow?.name}
          </h1>
          <div className="flex space-x-2 text-xs font-semibold md:text-sm">
            <p className="text-green-600">
              {Number(randomShow?.vote_average * 10).toFixed(2) ?? '-'}% Match
            </p>
            <p className="text-gray-300">
              {randomShow?.first_air_date ?? randomShow?.release_date ?? '-'}
            </p>
          </div>
          <p className="line-clamp-4 text-sm text-gray-300 md:text-base">
            {randomShow?.overview ?? '-'}
          </p>
          <div className="flex items-center space-x-2 pt-1.5">
            <button
              aria-label="Play video"
              className="h-auto gap-1.5 rounded bg-white px-4 py-2 flex items-center justify-center text-sm font-medium"
            >
              <PlayIcon />
              Play
            </button>
            <button
              aria-label="Open show's details modal"
              className="h-auto gap-2 rounded border border-solid border-white px-4 py-2 text-white flex items-center justify-center"
            >
              <ExclamationCircleIcon />
              More Info
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    banner = (
      <div className="w-full max-w-screen-2xl">
        <div className="absolute inset-0 -z-10 h-screen w-full">
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
