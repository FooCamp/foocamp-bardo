export default function Image({
  url,
  alternativeText,
  classNameWrapper,
  className,
  roleName,
}) {
  return (
    <div className={classNameWrapper}>
      <img
        role={roleName}
        src={url}
        alt={alternativeText}
        className={className}
      />
    </div>
  );
}
