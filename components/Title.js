export default function Title({ data, className }) {
  const titleClass = className ? `title ${className}` : 'title';
  return <h3 className={titleClass}>{data}</h3>;
}
