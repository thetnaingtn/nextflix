import Link, { LinkProps } from 'next/link';
import { twMerge as tm } from 'tailwind-merge';
import Image from 'next/image';
import {
  HTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
  useState,
} from 'react';

import logo from '../../../public/logo.svg';
import searchIcon from '../../../public/search.png';

function Nav({ children }: PropsWithChildren) {
  return <header>{children}</header>;
}

const Frame = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex my-0 mx-14 h-[100px] justify-between items-center">
      {children}
    </div>
  );
};

const Group = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center">{children}</div>;
};

const Logo = () => {
  return (
    <Link href="/">
      <Image
        alt="Nextflix"
        src={logo}
        height={36}
        width={134}
        className="mr-10 xl:h-[45px] xl:w-[167px]"
      />
    </Link>
  );
};

const ButtonLink = (props: PropsWithChildren<LinkProps>) => {
  const { children, ...rest } = props;
  return (
    <Link
      {...rest}
      className="block w-[84px] bg-[#e50914] h-fit text-white border-0 text-[15px] rounded-[3px] px-[17px] py-[8px] cursor-pointer no-underline hover:bg-[#f40612]"
    >
      {children}
    </Link>
  );
};

const TextLink = (
  props: PropsWithChildren<LinkProps & { className?: string }>
) => {
  const { children, className, ...restProps } = props;

  return (
    <Link
      className={tm(
        'text-white no-underline mr-[30px] font-normal cursor-pointer hover:font-bold last-of-type:mr-0',
        className ?? ''
      )}
      {...restProps}
    >
      {children}
    </Link>
  );
};

// margin-left: ${({ active }) => (active === true ? '10px' : '0')};
//   padding: ${({ active }) => (active === true ? '0 10px' : '0')};
//   opacity: ${({ active }) => (active === true ? '1' : '0')};
//   width: ${({ active }) => (active === true ? '200px' : '0px')};

function Search({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className={tm('flex items-center', className)} {...restProps}>
      <SearchIcon
        className="text-white"
        onClick={() => setSearchActive(!searchActive)}
      >
        <Image
          src={searchIcon}
          alt="search-icon"
          className="w-4 invert brightness-0"
        />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        className={
          searchActive ? 'ml-[10px] p-[10px] opacity-100 w-[200px]' : ''
        }
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search films and series"
      />
    </div>
  );
}

function SearchInput({
  className,
  ...restProps
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className={tm(
        'text-white bg-[rgba(64,64,64,0.5)] border-solid border border-white h-[30px] text-sm rounded ml-0 p-0 opacity-0 w-0 transition-[width] duration-500 focus:bg-[rgba(0,0,0,0.8)] focus:outline-0',
        className
      )}
      {...restProps}
    />
  );
}

function SearchIcon({
  className,
  children,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={tm(
        'cursor-pointer bg-transparent border-0 outline-0 h-8 w-8 p-0 flex items-center justify-center',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Object.assign(Nav, {
  Logo,
  ButtonLink,
  Frame,
  TextLink,
  Group,
  Search,
});
