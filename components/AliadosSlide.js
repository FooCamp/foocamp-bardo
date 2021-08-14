export default function AliadosSlide({ brandLogos, slideInfo }) {
  const image = slideInfo.testimonyImage.fields.file.url;
  const alternativeText = slideInfo.testimonyImage.fields.file.title;
  const shortText = slideInfo.testimonyText.split(/; ./, 1);
  return (
    <>
      <section className="aliadosSlide">
        <section className="aliadosSlide__text">
          <p className="aliadosSlide__text--long">{`"${slideInfo.testimonyText}"`}</p>
          <p className="aliadosSlide__text--short">{`"${shortText[0]}"`}</p>
          <h6>{slideInfo.testimonyAuthor}</h6>
          <span>{slideInfo.testimonyAuthorRole}</span>
        </section>

        <img
          className="aliadosSlide__image"
          alt={alternativeText}
          src={image}
        />
      </section>
      <section className="aliadosSlide__brands">
        {brandLogos.map((logo, index) => (
          <img
            className={`brand--${index}`}
            alt={logo.fields.file.title}
            src={logo.fields.file.url}
          />
        ))}
      </section>
    </>
  );
}
