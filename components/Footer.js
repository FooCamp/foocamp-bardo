import Container from './Container';
import Stamp from './Stamp';
import SocialMedia from './SocialMedia';
import SiteMap from './SiteMap';

export default function Footer({ data }) {
  const footerData = data.items[0].fields.components[5].fields;
  const {
    siteMapLinksList, socialNetworksTitle, socialNetworksList, siteMapTitle, copyrightStatement,
  } = footerData;
  const siteMapLinksLists = [
    { list: siteMapLinksList.slice(0, 2), id: 'sitemap-list-left' },
    { list: siteMapLinksList.slice(2), id: 'sitemap-list-right' },
  ];
  return (
    <footer className="Footer">
      <Container>
        <div className="Footer__content">
          <div className="Footer__social">
            <h6 className="Footer__title">{socialNetworksTitle}</h6>
            <SocialMedia socialNetworksList={socialNetworksList} />
          </div>
          <div className="Footer__sitemap">
            <h6 className="Footer__title">{siteMapTitle}</h6>
            <div className="Footer__sitemap-content">
              <SiteMap siteMapLinksLists={siteMapLinksLists} />
            </div>
          </div>
          <div className="Footer__stamp">
            <Stamp position="right" className="Footer__tucutin" />
          </div>
          <p className="Footer__copy">
            {copyrightStatement}
          </p>
        </div>
      </Container>
    </footer>
  );
}
