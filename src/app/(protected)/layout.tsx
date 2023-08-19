'use client';

import Nav from '@/app/components/nav';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';
import Footer from '@/app/components/footer';

export default function ProtectedLayout({ children }: PropsWithChildren) {
  const router = useRouter();

  const handleChangeCategory = (category: 'series' | 'films') => {
    return function () {
      router.push(`/${category}`);
    };
  };

  return (
    <>
      <Nav>
        <Nav.Frame>
          <Nav.Group>
            <Nav.Logo />
            <Nav.TextLink onClick={handleChangeCategory('series')}>
              Series
            </Nav.TextLink>
            <Nav.TextLink onClick={handleChangeCategory('films')}>
              Films
            </Nav.TextLink>
          </Nav.Group>
        </Nav.Frame>
      </Nav>
      {children}
      <Footer />
    </>
  );
}
