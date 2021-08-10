import Link from 'next/link';

export default function SiteMap({ siteMapLinksLists }) {
  return (
    <div className="sitemap">
      {siteMapLinksLists.map((siteMapLists) => (
        <ul className="sitemap__list" key={siteMapLists.id}>
          {siteMapLists.list.map((sitemap) => {
            const { identifier, linkUrl, linkLabel } = sitemap.fields;
            return (
              <li className="sitemap__element" key={identifier}>
                <Link href={linkUrl}>
                  <a className="sitemap__link" href="/">{linkLabel}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}
