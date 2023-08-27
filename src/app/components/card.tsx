import { twMerge as tm } from 'tailwind-merge';
import { HTMLAttributes, PropsWithChildren } from 'react';

function Card({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col mb-[50px] first-of-type:mt-[-100px] last-of-type:mb-0 lg:group-first-of-type/container:mt-[-100px]">
      {children}
    </div>
  );
}

function Group({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={tm('flex group/container', className)} {...restProps}>
      {children}
    </div>
  );
}

function Item({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      {...restProps}
      className={tm(
        className,
        'flex flex-col relative cursor-pointer mr-[5px] group first-of-type:ml-14 last-of-type:mr-14'
      )}
    >
      {children}
    </div>
  );
}

function Title({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p
      className={tm(className, 'text-2xl text-[#e5e5e5] font-bold mx-14 mt-0')}
      {...restProps}
    >
      {children}
    </p>
  );
}

function SubTitle({
  children,
  className,
  ...restPorps
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p
      {...restPorps}
      className={tm(
        className,
        'text-xs text-white font-bold my-0 select-none hidden lg:group-hover:block lg:group-hover:z-[100]'
      )}
    >
      {children}
    </p>
  );
}

function Text({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <p
      {...restProps}
      className={tm(
        className,
        'mt-[5px] text-[10px] text-white mb-0 select-none hidden leading-normal lg:group-hover:block lg:group-hover:z-[100]'
      )}
    >
      {children}
    </p>
  );
}

function FeatureText({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p
      className={tm('text-lg text-white font-bold mx-0 my-0', className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

function Feature({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={tm(
        'flex flex-row bg-contain relative h-[360px] bg-right bg-no-repeat bg-black',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function FeatureTitle({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p className={tm('ml-0', className)} {...restProps}>
      {children}
    </p>
  );
}

function FeatureClose({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={tm(
        'text-white absolute right-5 top-5 cursor-pointer bg-transparent border-0',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

function Content({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={tm('m-14 leading-normal max-w[500px]', className)}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Maturity({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={tm(
        'bg-[#f44336] rounded-2xl w-7 leading-7 text-center text-white font-bold mr-[10px] text-xs',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

export default Object.assign(Card, {
  Group,
  Item,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureText,
  FeatureTitle,
  FeatureClose,
  Content,
  Maturity,
});
