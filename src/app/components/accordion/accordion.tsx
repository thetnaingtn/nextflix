'use client';

import { twMerge as tm } from 'tailwind-merge';
import {
  SetStateAction,
  createContext,
  useState,
  Dispatch,
  useContext,
} from 'react';
import Image from 'next/image';

import { DivProps, HeadingProps } from '@/types';

const ToggleContext = createContext<null | {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}>(null);

export default function Accordion({
  children,
  className,
  ...restProps
}: DivProps) {
  return (
    <div
      className={tm('flex border-b-8 border-solid border-[#222]', className)}
      {...restProps}
    >
      <div
        className={tm(
          'flex py-[70px] px-[45px] flex-col max-w-[815px] m-auto',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function Frame({ children, className, ...restProps }: DivProps) {
  return (
    <div className={tm('mb-10', className)} {...restProps}>
      {children}
    </div>
  );
}

export function Title({ children, className, ...restProps }: HeadingProps) {
  return (
    <h1
      className="text-[50px] leading-[1.1] mt-0 mb-2 text-white text-center"
      {...restProps}
    >
      {children}
    </h1>
  );
}

export function Item({ children, className, ...restProps }: DivProps) {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <div
        className={tm(
          'text-white m-auto mb-[10px] max-w-[728px] w-full first-of-type:mt-[3em] last-of-type:mb-0',
          className
        )}
        {...restProps}
      >
        {children}
      </div>
    </ToggleContext.Provider>
  );
}

`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    user-select: none;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export function Header({ children, className, ...restProps }: DivProps) {
  const { toggle, setToggle } = useContext(ToggleContext)!;

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={tm(
        'flex justify-between cursor-pointer mb-1 text-[26px] font-normal bg-[#303030] py-[0.8em] px-[1.2em] select-none items-center',
        className
      )}
      {...restProps}
    >
      {children}
      {toggle ? (
        <Image
          className="icon"
          width={24}
          height={24}
          src="/close-slim.png"
          alt="close"
        />
      ) : (
        <Image
          className="icon"
          width={24}
          height={24}
          src="/add.png"
          alt="open"
        />
      )}
    </div>
  );
}

`font-size: 26px;
font-weight: normal;
line-height: normal;
background: #303030;
white-space: pre-wrap;
user-select: none;
overflow: hidden;

&.closed {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
}
&.open {
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
}

span {
  display: block;
  padding: 0.8em 2.2em 0.8em 1.2em;
}

@media (max-width: 600px) {
  font-size: 16px;
  line-height: 22px;
}`;

export function Body({ children, className, ...restProps }: DivProps) {
  const { toggle } = useContext(ToggleContext)!;
  return (
    <div
      className={tm(
        'text-[26px] font-normal leading-normal bg-[#303030] whitespace-pre-wrap select-none overflow-hidden',
        toggle ? 'open' : 'close',
        className
      )}
      {...restProps}
    >
      <span className="block py-[0.8em] pr-[2.2em] pl-[1.2em]">{children}</span>
    </div>
  );
}
