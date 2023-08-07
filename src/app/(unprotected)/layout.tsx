import Header from '@/components/header';
import { PropsWithChildren } from 'react';

export default function ProtectedLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo />
          <Header.ButtonLink href="/signin">Sign In</Header.ButtonLink>
        </Header.Frame>
      </Header>
      {children}
    </>
  );
}
