import Link, { LinkProps } from 'next/link';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import logo from '../../public/logo.svg';

function Header({ children }: PropsWithChildren) {
  return <header>{children}</header>;
}

const Frame = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex my-0 mx-14 h-[100px] justify-between items-center">
      {children}
    </div>
  );
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

export default Object.assign(Header, { Logo, ButtonLink, Frame });
