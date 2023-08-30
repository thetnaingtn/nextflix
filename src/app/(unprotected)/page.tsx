import Feature from '../components/feature';
import OptForm from '@/app/components/opt-form';
import Hero from '../components/hero';
import Jumbotron from '../components/jumbotron';

import jumboData from '@/fixtures/jumbo.json';

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
      <Jumbotron.Container>
        {jumboData.map((jumbo) => {
          return (
            <Jumbotron
              key={jumbo.id}
              direction={
                `flex-${jumbo.direction}` as 'flex-row' | 'flex-row-reverse'
              }
            >
              <Jumbotron.Pane>
                <Jumbotron.Title>{jumbo.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{jumbo.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Image
                  src={jumbo.image}
                  alt={jumbo.alt}
                  width={450}
                  height={305}
                />
              </Jumbotron.Pane>
            </Jumbotron>
          );
        })}
      </Jumbotron.Container>
    </section>
  );
}
