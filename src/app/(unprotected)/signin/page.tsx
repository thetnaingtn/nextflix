import Hero from '@/app/components/hero';
import SignIn from '@/app/components/sigin';

export default function Page() {
  return (
    <div>
      <Hero type="static" src="/home-bg.jpg">
        <SignIn />
      </Hero>
    </div>
  );
}
