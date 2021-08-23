export default function ArtworkDetails({ data }) {
  const { dimensions, technique, price } = data;
  return (
    <section className="artwork-details__details-container">
      <p>Técnica:</p>
      <p>{dimensions}</p>
      <p>Dimensiones:</p>
      <p>{technique}</p>
      <p>Precio:</p>
      <p>{price}</p>
    </section>
  );
}
