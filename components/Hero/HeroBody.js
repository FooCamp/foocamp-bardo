export default function HeroBody({ children, className, classNameWrapper }) {
  return (
    <div className={`hero__body-wrapper ${classNameWrapper || ''}`}>
      <div className={`hero__body ${className || ''}`}>
        {/* eslint-disable-next-line react/no-danger  */}
        <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: children }} />
      </div>
    </div>
  );
}
