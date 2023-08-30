import Feature from '../components/feature';
import OptForm from '@/app/components/opt-form';
import Hero from '../components/hero';

export default function Page() {
  return (
    <section>
      <Hero type="static" src="/home-bg.jpg">
        <Feature className="leading-[1.15]">
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </Hero>
    </section>
  );
}
