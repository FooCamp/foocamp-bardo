export default function Subtitle({ data, className }) {
  return (
    <h4 className={`subtitle ${className}`}>
      {/* eslint-disable-next-line react/no-danger  */}
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </h4>
  );
}
