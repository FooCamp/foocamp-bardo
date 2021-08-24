import Image from '../Image';

export default function ImpactLevel({ level, index }) {
  const { description, title, images } = level.fields;
  const { file: { url: imageUrl } } = images[0].fields;
  const { file: { url: numberUrl } } = images[1].fields;

  return (
    <div className="impact-level">
      <Image
        url={imageUrl}
        alternativeText=""
        className="impact-level__image-content"
        classNameWrapper="impact-level__image"
      />
      <Image
        url={numberUrl}
        alternativeText=""
        className="impact-level__number-img"
        classNameWrapper="impact-level__number"
      />
      <div className="impact-level__text">
        <b className="impact-level__title-number">{index + 1}</b>
        <b className="impact-level__title">{title}</b>
        <p className="impact-level__description">{description}</p>
      </div>
    </div>
  );
}
