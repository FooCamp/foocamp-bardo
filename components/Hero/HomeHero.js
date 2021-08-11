import { getContentfulHeroData } from '../../utils/contentful';
import HeroTitle from './HeroTitle';
import HeroTag from './HeroTag';
import HeroBody from './HeroBody';
import HeroImages from './HeroMedia';

export default function HomeHero(props) {
  const HomeHeroData = getContentfulHeroData(props);
  const {
    heroImage, heroTag, heroTitle, heroDescription,
  } = HomeHeroData.hero;

  return (
    <article className="hero">
      <section className="hero__section">
        <HeroImages heroImage={heroImage} />
      </section>
      <section className="hero__section hero__section--home-text">
        <HeroTag className="hero__tag--home">{heroTag}</HeroTag>
        <HeroTitle className="hero__title--home">{heroTitle}</HeroTitle>
        <HeroBody className="hero__body--home">{heroDescription}</HeroBody>
      </section>
    </article>
  );
}
