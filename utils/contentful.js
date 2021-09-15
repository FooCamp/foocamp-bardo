import { camelize } from './function';

const dataContentful = {};

export function getContentfulHeaderData(data) {
  dataContentful.logo = data.data.items[0].fields.components[0].fields.headerLogoLink;
  dataContentful.navLinks = data.data.items[0].fields.components[0].fields.headerNavLinks;
  return dataContentful;
}

export function getContentfulHeroData(data) {
  dataContentful.hero = data.data.items[0].fields.components[1].fields;
  return dataContentful;
}

export function getContentfulHeroChildData(data) {
  const {
    heroImage, heroTag, heroTitle, heroDescription, identifier,
  } = data.items[0].fields.components[1].fields;

  dataContentful.heroChildImage = heroImage;
  dataContentful.heroChildTag = heroTag;
  dataContentful.heroChildTitle = heroTitle;
  dataContentful.heroChildDescription = heroDescription;
  dataContentful.identifier = identifier;

  return dataContentful;
}

export function getContentfulArtworkData(data) {
  const artworkData = data.items[0].fields.components[3].fields;
  return artworkData;
}

export function getContentfulSingleArtworkData(data, selectedArtworkName) {
  const allArtworkData = data
    .items[0].fields.components[3].fields.sectionComponents[0].fields.artPiecesList;

  const selectedArtworkData = allArtworkData.find((artwork) => {
    const { identifier } = artwork.fields;
    const artworkName = identifier.replace(/Card/g, '');
    return camelize(selectedArtworkName) === artworkName;
  });

  return selectedArtworkData;
}

export function getContentfulArtworkDetailsPageData(data) {
  return data.items[0].fields.components[1].fields;
}

export function getContentfulFooterData(data) {
  const positionFooter = data.items[0].fields.components.length - 1;
  const footerData = data.items[0].fields.components[positionFooter].fields;
  return footerData;
}

export function getContentfulProfiles(data) {
  const profiles = data.data.items[0].fields.components[2].fields;
  return profiles;
}

export function getContentfulAllies(data) {
  const sectionAllies = data.data.items[0].fields.components[4].fields;
  dataContentful.alliesDescription = sectionAllies.sectionDescription;
  dataContentful.alliesTitle = sectionAllies.sectionTitle;
  dataContentful.alliesComponents = sectionAllies.sectionComponents;
  return dataContentful;
}

export function getContentfulObjectives(data) {
  const sectionObjectives = data.data.items[0].fields.components[3].fields;
  dataContentful.sectionComponents = sectionObjectives.sectionComponents;
  dataContentful.sectionTitle = sectionObjectives.sectionTitle;
  return dataContentful;
}

export function getContentfulStatements(data) {
  const statements = data.data.items[0].fields.components[2].fields.sectionComponents;
  return statements;
}

export function getContentfulImpactLevels(data) {
  const impactData = data.items[0].fields.components[2].fields;
  return impactData;
}

export function getContentfulMethodologyData(data) {
  const methodology = data.items[0].fields.components[3].fields;
  return methodology;
}

export function getContentfulProfileDetail(data) {
  const profileDetailData = data.items[0].fields.components[2].fields;
  return profileDetailData;
}

export function getContentfulProfileHeroData(data) {
  return data.items[0].fields.components[1].fields;
}
