import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="🌱 Naturaleza y tradiciones"
    description="Compartimos los paisajes, cultivos, animales y costumbres que nos conectan con los mas profundo de nuestra identidad"
  >
    <VerticalFeatureRow
      title="🍽️ Sabores que cuentan historias"
      description="Aprende a preparar platillos tipicos. Comida con historia, amor y sazon local"
      image="/assets/images/feature.svg"
      imageAlt="comidas tipicas"
    />
    <VerticalFeatureRow
      title="🎉 Eventos y comunidad"
      description="Siempre unidos. Desde fiestas hasta convivencias, aqui encontraras las actividades que nos mantienen unidos como pueblo"
      image="/assets/images/feature2.svg"
      imageAlt="eventos"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
