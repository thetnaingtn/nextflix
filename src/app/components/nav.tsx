import Link, { LinkProps } from 'next/link';
import { twMerge as tm } from 'tailwind-merge';
import Image from 'next/image';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import logo from '../../../public/logo.svg';

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

export default Object.assign(Nav, { Logo, ButtonLink, Frame, TextLink, Group });
