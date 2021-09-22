import ArtworkDetails from './ArtworkDetails';
import Button from '../Button';
import { openInCurrentTab, openInNewTab } from '../../utils/window';

export default function ArtworkDetailsBlock({ data, buttonData }) {
  const {
    author, dimensions, technique, price, edition, cardDescription, availability,
  } = data.fields;
  const details = { dimensions, technique, price };
  const { buttonLink, buttonText } = buttonData;
  const text = availability ? buttonText : 'OBRA NO DISPONIBLE';

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
          text={text}
          disabled={!availability}
          onclick={() => openInNewTab(buttonLink)}
        />
        <Button
          buttonstyle="button button--secondary button--artwork button--artwork-return"
          text="VER MÁS OBRAS"
          onclick={() => openInCurrentTab('/#obras')}
        />
      </div>
    </section>
  );
}
