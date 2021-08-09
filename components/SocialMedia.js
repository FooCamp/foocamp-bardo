import Link from 'next/link';

export default function SocialMedia({ socialNetworksList }) {
  return (
    <ul className="SocialMedia">
      {socialNetworksList.map((social) => {
        const {
          identifier, linkUrl, image, altText,
        } = social.fields;
        const { url } = image.fields.file;
        return (
          <li className="SocialMedia__element" key={identifier}>
            <Link href={linkUrl}>
              <a className="SocialMedia__link" target="_blank" rel="noreferrer" href="/">
                <img
                  src={url}
                  alt={altText}
                  className="SocialMedia__img"
                />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
