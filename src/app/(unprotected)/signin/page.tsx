import Hero from '@/app/ui/hero';
import SignIn from '@/app/ui/sigin';

export default function Page() {
  return (
    <div>
      <Hero type="static" src="/home-bg.jpg" className="h-[116vh]">
        <SignIn />
      </Hero>
    </div>
  );
}
