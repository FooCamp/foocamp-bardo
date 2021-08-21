import Title from '../Title';

export default function Statement(props) {
  const { eyebrow, title, description } = props;

  return (
    <div className="statement">
      <div className="statement__title">
        <div className="statement__title--eyebrow">{eyebrow}</div>
        <Title data={title} className="statement__title--color" />
      </div>
      <div className="statement__description">{description}</div>
    </div>
  );
}
