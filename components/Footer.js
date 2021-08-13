import { getContentfulFooterData } from '../utils/contentful';
import Container from './Container';
import Stamp from './Stamp';
import SocialMedia from './SocialMedia';
import SiteMap from './SiteMap';

export default function Footer({ data }) {
  const footerData = getContentfulFooterData(data);
  const {
    siteMapLinksList, socialNetworksTitle, socialNetworksList, siteMapTitle, copyrightStatement,
  } = footerData;
  const siteMapLinksLists = [
    { list: siteMapLinksList.slice(0, 2), id: 'sitemap-list-left' },
    { list: siteMapLinksList.slice(2), id: 'sitemap-list-right' },
  ];
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__social">
            <h6 className="footer__title">{socialNetworksTitle}</h6>
            <SocialMedia socialNetworksList={socialNetworksList} />
          </div>
          <div className="footer__sitemap">
            <h6 className="footer__title">{siteMapTitle}</h6>
            <div className="footer__sitemap-content">
              <SiteMap siteMapLinksLists={siteMapLinksLists} />
            </div>
          </div>
          <div className="footer__stamp">
            <Stamp position="right" size="small" />
          </div>
          <p className="footer__copy">
            {copyrightStatement}
          </p>
        </div>
      </Container>
    </footer>
  );
}
