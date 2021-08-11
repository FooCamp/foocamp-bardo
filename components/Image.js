export default function Image({
  url,
  alternativeText,
  classNameWrapper,
  className,
}) {
  return (
    <div className={classNameWrapper}>
      <img src={url} alt={alternativeText} className={className} />
    </div>
  );
}
