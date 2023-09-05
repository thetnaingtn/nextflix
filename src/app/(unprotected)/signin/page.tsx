import Hero from '@/app/components/hero';
import SignInForm from '@/app/components/sigin-form';

export default function Page() {
  return (
    <div>
      <Hero type="static" src="/home-bg.jpg" className="h-[116vh]">
        <SignInForm />
      </Hero>
    </div>
  );
}
