import { PropsWithChildren } from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import Nav from '@/app/components/nav';
import Footer from '@/app/components/footer';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function UnprotectedLayout({
  children,
}: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/browse');
  }

  return (
    <>
      <Nav>
        <Nav.Frame>
          <Nav.Logo />
          <Nav.ButtonLink href="/signin">Sign In</Nav.ButtonLink>
        </Nav.Frame>
      </Nav>
      {children}
      <Footer />
    </>
  );
}
