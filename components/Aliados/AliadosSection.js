import Title from '../Title';
import Subtitle from '../Subtitle';
import Container from '../Container';
import AliadosCarousel from './AliadosCarousel';
import { getContentfulAliados } from '../../utils/contentful';

export default function Aliados(data) {
  const dataContentful = getContentfulAliados(data);
  const { aliadosDescription, aliadosTitle, aliadosComponents } = dataContentful;
  return (
    <section className="aliadosSection">
      <Container>
        <section className="aliadosSection__header">
          <Title className="aliadosSection__title" data={aliadosTitle} />
          <Subtitle
            className="aliadosSection__subtitle"
            data={aliadosDescription}
          />
          <section className="aliadosSection__carousel">
            <AliadosCarousel data={aliadosComponents} />
          </section>
        </section>
      </Container>
    </section>
  );
}
