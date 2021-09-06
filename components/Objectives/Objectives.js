import Title from '../Title';
import Container from '../Container';
import ObjectivesCard from './ObjectivesCard';
import { getContentfulObjectives } from '../../utils/contentful';

export default function Objectives(data) {
  const objectivesData = getContentfulObjectives(data);
  const { sectionComponents, sectionTitle } = objectivesData;
  return (
    <>
      <section className="objectives">
        <Container>
          <Title className="objectives__title" data={sectionTitle} />
          <section className="objectives__container">
            {sectionComponents.map((component) => (
              <ObjectivesCard
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
