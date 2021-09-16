import { getContentfulImpactLevels } from '../../utils/contentful';
import Container from '../Container';
import Title from '../Title';
import ImpactLevel from './ImpactLevel';

export default function Impact({ data }) {
  const impactData = getContentfulImpactLevels(data);
  const { sectionTitle, sectionComponents } = impactData;
  return (
    <>
      {/* <div className="line" /> */}
      <section className="impact">
        <Container className="impact__header">
          <Title data={sectionTitle} className="impact__title" />
          {sectionComponents.map((level, index) => (
            <ImpactLevel
              level={level}
              index={index}
              key={level.fields.identifier}
            />
          ))}
        </Container>
      </section>
    </>
  );
}
