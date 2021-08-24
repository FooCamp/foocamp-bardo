import { getContentfulStatements } from '../../utils/contentful';
import Statement from './Statement';

export default function Statements(props) {
  const statements = getContentfulStatements(props);
  const [mision, vision] = statements;

  const {
    eyebrowText: misionEyebrow,
    title: misionTitle,
    description: misionDescription,
  } = mision.fields;

  const {
    eyebrowText: visionEyebrow,
    title: visionTitle,
    description: visionDescription,
  } = vision.fields;

  return (
    <section className="statements">
      <div className="line" />
      <div className="statements__wrapper">
        <Statement
          eyebrow={misionEyebrow}
          title={misionTitle}
          description={misionDescription}
        />
        <Statement
          eyebrow={visionEyebrow}
          title={visionTitle}
          description={visionDescription}
        />
      </div>
    </section>
  );
}