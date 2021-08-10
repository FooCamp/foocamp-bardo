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
