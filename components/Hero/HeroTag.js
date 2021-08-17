export default function HeroTag({ children, className }) {
  return (
    <div className="hero__tag-wrapper">
      <h2 className={`hero__tag ${className || ''}`}>{children}</h2>
    </div>
  );
}
