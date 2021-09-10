import ArtworkDetails from './ArtworkDetails';
import Button from '../Button';
import { openInCurrentTab } from '../../utils/window';

export default function ArtworkDetailsBlock({ data }) {
  const {
    author, dimensions, technique, price, edition, cardDescription, availability,
  } = data.fields;
  const details = { dimensions, technique, price };
  const buttonText = availability ? 'MÁS INFORMACIÓN DE ESTA OBRA' : 'OBRA NO DISPONIBLE';

  return (
    <section className="artwork-details__container">
      <div className="artwork-details__information-container">
        <h4 className="artwork-details__title">{ author }</h4>
        <h6 className="artwork-details__title-year">{edition}</h6>
        <div className="artwork-details__separator" />
        <ArtworkDetails data={details} />
        <div className="artwork-details__separator" />
        <p className="artwork-details__description">{cardDescription}</p>
      </div>
      <div className="artwork-details__cta-container">
        <Button
          buttonstyle="button button--primary button--artwork"
          text={buttonText}
          disabled={!availability}
        />
        <Button
          buttonstyle="button button--secondary button--artwork button--artwork-return"
          text="VER MÁS OBRAS"
          onclick={() => openInCurrentTab('/')}
        />
      </div>
    </section>
  );
}
