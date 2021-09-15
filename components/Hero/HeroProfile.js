import { getContentfulProfileHeroData } from '../../utils/contentful';
import { openInCurrentTab } from '../../utils/window';
import HeroTitle from './HeroTitle';
import HeroTag from './HeroTag';
import HeroBody from './HeroBody';
import Button from '../Button';
import Image from '../Image';

export default function HeroProfile({ data }) {
  const {
    heroCta, heroDescription, heroImage, heroTag, heroTitle, identifier,
  } = getContentfulProfileHeroData(data);
  const { buttonText, buttonLink } = heroCta.fields;
  const { url: imageUrl } = heroImage.fields.file;

  return (
    <article identifier={identifier} className="hero hero--profile">
      <section className="hero__section hero__section--profile">
        <Image
          url={imageUrl}
          alternativeText="Alt text"
          className="hero__image hero__image--profile"
          classNameWrapper="hero__image-wrapper hero__image-wrapper--profile"
        />
      </section>

      <section className="hero__section hero__section--profile hero__section--profile-text">
        <HeroTag
          className="hero__tag--profile"
          classNameWrapper="hero__tag-wrapper--profile"
        >
          {heroTag}
        </HeroTag>

        <HeroTitle
          className="hero__title--profile"
          classNameWrapper="hero__title-wrapper--profile"
        >
          {heroTitle}
        </HeroTitle>

        <HeroBody
          className="hero__body--profile"
          classNameWrapper="hero__body-wrapper--profile"
        >
          {heroDescription}
        </HeroBody>

        <div className="hero__button-wrapper">
          <Button
            containerStyle="button__container--align-left"
            buttonstyle="button button--primary button--profile"
            text={buttonText}
            url={buttonLink}
            onclick={() => openInCurrentTab(buttonLink)}
          />
        </div>
      </section>
    </article>
  );
}
