import ArtworkImageGallery from './ArtworkImageGallery';
import ArtworkDetailsBlock from './ArtworkDetailsBlock';
import Container from '../Container';

export default function ArtworkArticle({ data, pageData }) {
  const { heroDescription, heroTag, heroTitle } = pageData;

  return (
    <article className="artwork-article">
      <Container>
        <header className="artwork-article__header">
          <p className="artwork-article__eyebrow">{heroTag}</p>
          <h2 className="artwork-article__title">{heroTitle}</h2>
          <p className="artwork-article__description">{heroDescription}</p>
        </header>

        <div className="artwork-article__body-container">
          <ArtworkImageGallery data={data} />
          <ArtworkDetailsBlock data={data} />
        </div>
      </Container>
    </article>
  );
}
