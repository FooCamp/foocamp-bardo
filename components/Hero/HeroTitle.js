export default function HeroTitle({ children, className, classNameWrapper }) {
  return (
    <div className={`hero__title-wrapper ${classNameWrapper || ''}`}>
      <div className={`hero__title ${className || ''}`}>
        {/* eslint-disable-next-line react/no-danger  */}
        <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: children }} />
      </div>
    </div>
  );
}
