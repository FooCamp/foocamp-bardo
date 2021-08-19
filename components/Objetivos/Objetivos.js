import Title from '../Title';
import Container from '../Container';
import ObjetivosCard from './ObjetivosCard';
import { getContentfulObjetivos } from '../../utils/contentful';

export default function Objetivos(data) {
  const objetivosData = getContentfulObjetivos(data);
  const { sectionComponents, sectionTitle } = objetivosData;
  return (
    <>
      <section className="objetivos">
        <Container>
          <Title className="objetivos__title" data={sectionTitle} />
          <section className="objetivos__container">
            {sectionComponents.map((component) => (
              <ObjetivosCard
                key={component.fields.identifier}
                text={component.fields.description}
                image={component.fields.images[0].fields}
              />
            ))}
          </section>
        </Container>
      </section>
    </>
  );
}
