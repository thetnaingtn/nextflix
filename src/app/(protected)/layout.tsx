import Nav from '@/app/components/nav';
import { PropsWithChildren } from 'react';

export default function ProtectedLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
