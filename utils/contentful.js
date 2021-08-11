const dataContentful = {};

export function getContentfulHeaderData(data) {
  dataContentful.logo = data.data.items[0].fields.components[0].fields.headerLogoLink;
  dataContentful.navLinks = data.data.items[0].fields.components[0].fields.headerNavLinks;
  return dataContentful;
}

export function getContentfulHeroData(data) {
  dataContentful.logo = data.data.items[0].fields.components[1].fields;
  return dataContentful;
}

export function getContentfulArtworkData(data) {
  const artworkData = data.items[0].fields.components[3].fields;
  return artworkData;
}

export function getContentfulFooterData(data) {
  const footerData = data.items[0].fields.components[5].fields;
  return footerData;
}
