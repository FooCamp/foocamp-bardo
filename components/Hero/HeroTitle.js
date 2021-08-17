export default function HeroTitle({ children, className }) {
  return (
    <div className="hero__title-wrapper">
      <h1 className={`hero__title ${className || ''}`}>{children}</h1>
    </div>
  );
}
