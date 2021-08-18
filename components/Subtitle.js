export default function Subtitle({ data, className }) {
  const subtitleClass = className ? `subtitle ${className}` : 'subtitle';
  return (
    <h4 className={subtitleClass}>
      {/* eslint-disable-next-line react/no-danger  */}
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </h4>
  );
}
