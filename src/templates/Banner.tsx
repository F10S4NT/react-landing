import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Frase emotiva"
      subtitle={<q>Tepaxapa no se olvida, se lleva en el corazón.</q>}
      button={
        <Link href="/">
          <Button>Publicar historia</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
