import { getContentfulHeroData } from '../../utils/contentful';
import HeroTitle from './HeroTitle';
import HeroTag from './HeroTag';
import HeroBody from './HeroBody';
import HeroMedia from './HeroMedia';

export default function HomeHero(props) {
  const HomeHeroData = getContentfulHeroData(props);
  const {
    heroImage, heroTag, heroTitle, heroDescription, identifier,
  } = HomeHeroData.hero;

  return (
    <article id={identifier} className="hero--home">
      <section className="hero__section--home">
        <HeroMedia heroImage={heroImage} />
      </section>
      <section className="hero__section--home hero__section--home-text">
        <HeroTag className="hero__tag--home" classNameWrapper="hero__tag-wrapper--home">{heroTag}</HeroTag>
        <HeroTitle className="hero__title--home" classNameWrapper="hero__title-wrapper--home">{heroTitle}</HeroTitle>
        <HeroBody className="hero__body--home" classNameWrapper="hero__body-wrapper--home">{heroDescription}</HeroBody>
      </section>
    </article>
  );
}
