import Caption from './Caption';

export default function CardArtwork({ artwork }) {
  const {
    author, cardDescription, cardTitle, edition, cardImage, cardComponents,
  } = artwork.fields;
  const { title, file: { url } } = cardImage.fields;
  const { buttonText } = cardComponents.fields;
  return (
    <div className="card-artwork">
      <div className="card-artwork__header">
        <picture className="card-artwork__picture">
          <img src={url} alt={title} className="card-artwork__image" />
        </picture>
        <div className="card-artwork__details">
          <div className="card-artwork__title">{cardTitle}</div>
          <Caption>{ author }</Caption>
          <Caption>{ cardDescription }</Caption>
        </div>
      </div>
      <div className="card-artwork__footer">
        <div className="card-artwork__date">
          <Caption>{ edition }</Caption>
        </div>
        <div className="card-artwork__more">
          {/* Aqui va el boton  */}
          { buttonText }
        </div>
      </div>
    </div>
  );
}
