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

export function getContentfulFooterData(data) {
  const footerData = data.items[0].fields.components[5].fields;
  return footerData;
}

export function getContentfulProfiles(data) {
  const profiles = data.data.items[0].fields.components[2].fields;
  return profiles;
}

export function getContentfulAliados(data) {
  const sectionAliados = data.data.items[0].fields.components[4].fields;
  dataContentful.aliadosDescription = sectionAliados.sectionDescription;
  dataContentful.aliadosTitle = sectionAliados.sectionTitle;
  dataContentful.aliadosComponents = sectionAliados.sectionComponents;
  return dataContentful;
}
