import Hero from '@/app/ui/hero';
import SignUpForm from '@/app/components/signup-form';

export default function Page() {
  return (
    <div>
      <Hero className="h-[116vh]" type="static" src="/home-bg.jpg">
        <SignUpForm />
      </Hero>
    </div>
  );
}
