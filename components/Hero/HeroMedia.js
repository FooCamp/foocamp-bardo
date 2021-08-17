import Image from '../Image';
import Stamp from '../Stamp';

export default function HeroImage({ heroImage }) {
  const { fields } = heroImage;
  return (
    <>
      <div className="hero__stamp-wrapper">
        <Stamp position="center" />
      </div>
      <Image
        url={fields.file.url}
        alternativeText="Alt text"
        className="hero__image-wrapper--image"
        classNameWrapper="hero__image-wrapper"
      />
    </>
  );
}
