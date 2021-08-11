import ImageLink from './ImageLink';

export default function SocialMedia({ socialNetworksList }) {
  return (
    <ul className="social-media">
      {socialNetworksList.map((social) => {
        const {
          identifier, linkUrl, image, altText,
        } = social.fields;
        const { url } = image.fields.file;
        return (
          <li className="social-media__element" key={identifier}>
            <ImageLink
              url={url}
              linkUrl={linkUrl}
              alternativeText={altText}
              className="social-media__link"
              target="_blank"
              rel="noreferrer"
            />
          </li>
        );
      })}
    </ul>
  );
}
