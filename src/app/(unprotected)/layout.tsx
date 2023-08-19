import Nav from '@/app/components/nav';
import { PropsWithChildren } from 'react';

export default function ProtectedLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Nav>
        <Nav.Frame>
          <Nav.Logo />
          <Nav.ButtonLink href="/signin">Sign In</Nav.ButtonLink>
        </Nav.Frame>
      </Nav>
      {children}
    </>
  );
}
