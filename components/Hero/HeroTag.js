export default function HeroTag({ children, className, classNameWrapper }) {
  return (
    <div className={`hero__tag-wrapper ${classNameWrapper || ''}`}>
      <h2 className={`hero__tag ${className || ''}`}>{children}</h2>
    </div>
  );
}
