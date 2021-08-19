import { getContentfulHeroChildData } from '../../utils/contentful';
import HeroTitle from './HeroTitle';
import HeroTag from './HeroTag';
import HeroBody from './HeroBody';
import Image from '../Image';

export default function ChildHero({ data }) {
  const heroChildData = getContentfulHeroChildData(data);
  const {
    heroChildImage, heroChildTag, heroChildTitle, heroChildDescription, identifier,
  } = heroChildData;

  return (
    <article id={identifier} className="hero hero--child">

      <section className="hero__section--child">
        <Image
          url={heroChildImage.fields.file.url}
          alternativeText="Alt text"
          className="hero__image hero__image--child"
          classNameWrapper="hero__image-wrapper hero__image-wrapper--child"
        />
      </section>

      <section className="hero__section--child">
        <HeroTag
          className="hero__tag--child"
          classNameWrapper="hero__tag-wrapper--child"
        >
          {heroChildTag}
        </HeroTag>
        <HeroTitle
          className="hero__title--child"
          classNameWrapper="hero__title-wrapper--child"
        >
          {heroChildTitle}
        </HeroTitle>
        <HeroBody
          className="hero__body--child"
          classNameWrapper="hero__body-wrapper--child"
        >
          {heroChildDescription}
        </HeroBody>
      </section>

    </article>
  );
}
