import { getContentfulArtworkData } from '../utils/contentful';
import Container from './Container';
import Title from './Title';
import Subtitle from './Subtitle';
import ArtworkCarousel from './ArtworkCarousel';

export default function Artwork({ data }) {
  const artworkData = getContentfulArtworkData(data);
  const {
    sectionTitle, sectionDescription, sectionComponents,
  } = artworkData;
  const { artPiecesList } = sectionComponents[0].fields;

  return (
    <section className="artwork">
      <Container className="artwork__header">
        <div className="artwork__title">
          <Title data={sectionTitle} />
        </div>
        <div className="artwork__subtitle">
          <Subtitle data={sectionDescription} />
        </div>
      </Container>
      <ArtworkCarousel artPiecesList={artPiecesList} />
    </section>
  );
}
