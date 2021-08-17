import Caption from './Caption';
import Button from './Button';

export default function CardArtwork({ artwork, style, aditionalProps }) {
  const {
    author, cardDescription, cardTitle, edition, cardImage, cardComponents,
  } = artwork.fields;
  const { title, file: { url } } = cardImage.fields;
  const { buttonText } = cardComponents.fields;
  const description = cardDescription.length > 180 ? `${cardDescription.substring(0, 180)}...` : cardDescription;
  return (
    <div className="card-artwork" style={style} {...aditionalProps}>
      <div className="card-artwork__header">
        <picture className="card-artwork__picture">
          <img src={url} alt={title} className="card-artwork__image" draggable="false" />
        </picture>
        <div className="card-artwork__details">
          <div className="card-artwork__title">{cardTitle}</div>
          <Caption>{ author }</Caption>
          <Caption>{ description }</Caption>
        </div>
      </div>
      <div className="card-artwork__footer">
        <div className="card-artwork__date">
          <Caption>{ edition }</Caption>
        </div>
        <div className="card-artwork__more">
          <Button
            buttonstyle="button button--secondary card-artwork__btn"
          >
            { buttonText }
          </Button>
        </div>
      </div>
    </div>
  );
}
