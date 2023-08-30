import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import Hero from '@/app/components/hero';
import SignIn from '@/app/components/sigin';
import { firebase } from '@/lib/firebase';

export default async function Page() {
  async function signIn(email: string, password: string) {
    'use server';
    let credential;
    try {
      credential = (await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)) as any;
    } catch (err) {
      console.error(err);
    }
    cookies().set('uid', credential?.user.uid ?? '');
    redirect('/series');
  }
  return (
    <div>
      <Hero type="static" src="/home-bg.jpg">
        <SignIn signIn={signIn} />
      </Hero>
    </div>
  );
}
