import Title from '../Title';
import Subtitle from '../Subtitle';
import Container from '../Container';
import AlliesCarousel from './AlliesCarousel';
import { getContentfulAllies } from '../../utils/contentful';

export default function Allies(data) {
  const dataContentful = getContentfulAllies(data);
  const { alliesDescription, alliesTitle, alliesComponents } = dataContentful;
  return (
    <section className="alliesSection">
      <Container>
        <section className="alliesSection__header">
          <Title className="alliesSection__title" data={alliesTitle} />
          <Subtitle
            className="alliesSection__subtitle"
            data={alliesDescription}
          />
          <section className="alliesSection__carousel">
            <AlliesCarousel data={alliesComponents} />
          </section>
        </section>
      </Container>
    </section>
  );
}
