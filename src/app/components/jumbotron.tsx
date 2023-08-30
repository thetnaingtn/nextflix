import { twMerge as tm } from 'tailwind-merge';

import { DivProps, HeadingProps } from '@/types';
import NextImage, { ImageProps } from 'next/image';

function Jumbotron({
  children,
  className,
  direction,
  ...restProps
}: DivProps & { direction: 'flex-row' | 'flex-row-reverse' }) {
  return (
    <div
      className={tm(
        'flex border-b-8 border-solid border-[#222] py-[50px] px-[5%] text-white overflow-hidden',
        className
      )}
      {...restProps}
    >
      <div
        className={tm(
          'flex items-center justify-center max-w-[1100px] m-auto w-full',
          direction
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Container({ children, className, ...restProps }: DivProps) {
  return (
    <div className={tm('', className)} {...restProps}>
      {children}
    </div>
  );
}

function Title({ children, className, ...restProps }: HeadingProps) {
  return (
    <h1
      className={tm('text-[50px] leading-[1.1] mb-2', className)}
      {...restProps}
    >
      {children}
    </h1>
  );
}

function SubTitle({ children, className, ...restProps }: HeadingProps) {
  return (
    <h2
      className={tm('text-[26px] font-normal leading-normal', className)}
      {...restProps}
    >
      {children}
    </h2>
  );
}

function Pane({ children, className, ...restProps }: DivProps) {
  return (
    <div className={tm('w-1/2', className)} {...restProps}>
      {children}
    </div>
  );
}

function Image({ className, ...restProps }: ImageProps) {
  return (
    <NextImage className={tm('h-auto max-w-full', className)} {...restProps} />
  );
}

export default Object.assign(Jumbotron, {
  Container,
  Title,
  SubTitle,
  Pane,
  Image,
});
