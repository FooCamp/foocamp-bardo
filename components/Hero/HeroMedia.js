import Image from '../Image';
import Stamp from '../Stamp';

export default function HeroMedia({ heroImage }) {
  const { fields } = heroImage;
  return (
    <>
      <div className="hero__stamp-wrapper hero__stamp-wrapper--home">
        <Stamp position="center" />
      </div>
      <Image
        url={fields.file.url}
        alternativeText="Alt text"
        className="hero__image hero__image--home"
        classNameWrapper="hero__image-wrapper hero__image-wrapper--home"
      />
    </>
  );
}
