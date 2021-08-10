const dataContentful = {};
export default function headerContentful(data) {
  dataContentful.logo = data.data.items[0].fields.components[0].fields.headerLogoLink;
  dataContentful.navLinks = data.data.items[0].fields.components[0].fields.headerNavLinks;
  return dataContentful;
}
