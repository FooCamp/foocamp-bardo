export default function ObjetivosCard({ image, text }) {
  return (
    <>
      <section className="objetivosCard">
        <img
          name="decorative"
          className="objetivosCard__image"
          src={image.file.url}
          alt={image.file.title}
        />
        <h6 className="objetivosCard__text">
          {/* eslint-disable-next-line react/no-danger  */}
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </h6>
      </section>
    </>
  );
}
