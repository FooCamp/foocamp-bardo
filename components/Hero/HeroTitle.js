export default function HeroTitle({ children, className, classNameWrapper }) {
  return (
    <div className={`hero__title-wrapper ${classNameWrapper || ''}`}>
      <h1 className={`hero__title ${className || ''}`}>{children}</h1>
    </div>
  );
}
