// Home
import Artwork from '../components/Artwork';
import HeroHome from '../components/Hero/HeroHome';
import Profiles from '../components/Profiles';
import Allies from '../components/Allies/AlliesSection';

// Quienes somos
import Objectives from '../components/Objectives/Objectives';
import HeroChild from '../components/Hero/HeroChild';
import Statements from '../components/Statements/Statements';

// Que hacemos
import ImpactLevel from '../components/ImpactLevel/Impact';
import Methodology from '../components/Methodology/Methodology';

// Profile
import HeroProfile from '../components/Hero/HeroProfile';
import ProfileDetail from '../components/ProfileDetail';

/**
 *  Component pool.
 * @key - Identifier
 * @value - Component
 */
const pageComponentPool = {
  // Home
  homepageHero: HeroHome,
  perfilesSection: Profiles,
  artPiecesSection: Artwork,
  aliadosSection: Allies,
  // Quienes somos
  quienesSomosHero: HeroChild,
  misionVisionSection: Statements,
  objectivosSection: Objectives,
  // Que hacemos
  queHacemosHero: HeroChild,
  impactoSection: ImpactLevel,
  nuestraMetodologiaSection: Methodology,
  // Hero profile
  artistHero: HeroProfile,
  donanteHero: HeroProfile,
  fundacionHero: HeroProfile,
  patrocinadorHero: HeroProfile,
  // Details profile
  artistProfileDetailsSection: ProfileDetail,
  donanteProfileDetailsSection: ProfileDetail,
  fundacionProfileDetailsSection: ProfileDetail,
  patrocinadorProfileDetailsSection: ProfileDetail,
};

export default pageComponentPool;
