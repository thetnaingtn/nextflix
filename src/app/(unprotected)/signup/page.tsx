import Hero from '@/app/components/hero';
import SignUp from '@/app/components/signup';

export default function Page() {
  return (
    <div>
      <Hero type="static" src="/home-bg.jpg">
        <SignUp />
      </Hero>
    </div>
  );
}
