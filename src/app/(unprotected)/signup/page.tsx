import Hero from '@/app/ui/hero';
import SignUp from '@/app/ui/signup';

export default function Page() {
  return (
    <div>
      <Hero className="h-[116vh]" type="static" src="/home-bg.jpg">
        <SignUp />
      </Hero>
    </div>
  );
}
