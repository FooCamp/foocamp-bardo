export default function AlliesSlide({ slideInfo }) {
  const image = slideInfo.testimonyImage.fields.file.url;
  const alternativeText = slideInfo.testimonyImage.fields.file.title;
  const shortText = slideInfo.testimonyText.split(/; ./, 1);
  return (
    <>
      <section className="alliesSlide">
        <section className="alliesSlide__text">
          <p className="alliesSlide__text--long">{`"${slideInfo.testimonyText}"`}</p>
          <p className="alliesSlide__text--short">{`"${shortText[0]}"`}</p>
          <h6>{slideInfo.testimonyAuthor}</h6>
          <span>{slideInfo.testimonyAuthorRole}</span>
        </section>

        <img className="alliesSlide__image" alt={alternativeText} src={image} />
      </section>
    </>
  );
}
