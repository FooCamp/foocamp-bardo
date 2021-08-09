import Link from 'next/link';

export default function SiteMap({ siteMapLinksLists }) {
  return (
    <div className="Sitemap">
      {siteMapLinksLists.map((siteMapLists) => (
        <ul className="Sitemap__list" key={siteMapLists.id}>
          {siteMapLists.list.map((sitemap) => {
            const { identifier, linkUrl, linkLabel } = sitemap.fields;
            return (
              <li className="Sitemap__element" key={identifier}>
                <Link href={linkUrl}>
                  <a className="Sitemap__link" href="/">{linkLabel}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}
