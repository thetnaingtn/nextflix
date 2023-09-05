import Hero from '@/app/components/hero';
import SignIn from '@/app/components/sigin';

export default function Page() {
  return (
    <div>
      <Hero type="static" src="/home-bg.jpg" className="h-[116vh]">
        <SignIn />
      </Hero>
    </div>
  );
}
