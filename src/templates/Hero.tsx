import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Bienvenidos a\n'}
            <span className="text-primary-500">TEPAXAPA</span>
          </>
        }
        description="Somos una comunidad orgullosa de sus raices, sus tradiciones y su gente. En este blog
        compartiremos historias, fotos y momentos que nos unen como pueblo."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Explora el blog</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
