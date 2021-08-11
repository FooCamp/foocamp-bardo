import { getContentfulArtworkData } from '../utils/contentful';
import Container from './Container';
import Title from './Title';
import Subtitle from './Subtitle';
import CardArtwork from './CardArtwork';

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
          <Title>{ sectionTitle }</Title>
        </div>
        <div className="artwork__subtitle">
          <Subtitle>{ sectionDescription }</Subtitle>
        </div>
      </Container>
      <div className="artwork__list">
        <Container className="artwork__list-content">
          {artPiecesList.map((artwork) => (
            <CardArtwork artwork={artwork} key={artwork.fields.identifier} />
          ))}
        </Container>
      </div>
      {/* pagination */}
    </section>
  );
}
