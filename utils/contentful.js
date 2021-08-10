const dataContentful = {};
function headerContentful(data) {
  dataContentful.logo = data.data.items[0].fields.components[0].fields.headerLogoLink;
  dataContentful.navLinks = data.data.items[0].fields.components[0].fields.headerNavLinks;
  return dataContentful;
}

function footerContentful(data) {
  const footerData = data.items[0].fields.components[5].fields;
  return footerData;
}

export { headerContentful, footerContentful };
