export default function HeroBody({ children, className }) {
  return (
    <div className="hero__body-wrapper">
      <div className={`hero__body ${className || ''}`}>
        {/* eslint-disable-next-line react/no-danger  */}
        <p dangerouslySetInnerHTML={{ __html: children }} />
      </div>
    </div>
  );
}
