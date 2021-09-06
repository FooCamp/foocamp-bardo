export default function ObjectivesCard({ image, text }) {
  return (
    <>
      <section className="objectivesCard">
        <img
          name="decorative"
          className="objectivesCard__image"
          src={image.file.url}
          alt={image.file.title}
        />
        <h6 className="objectivesCard__text">
          {/* eslint-disable-next-line react/no-danger  */}
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </h6>
      </section>
    </>
  );
}
