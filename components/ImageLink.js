import Link from 'next/link';

export default function ImageLink({
  url,
  linkUrl,
  alternativeText,
  className,
  ...attribProps
}) {
  return (
    <Link href={linkUrl}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={className} {...attribProps}>
        <img src={url} alt={alternativeText} />
      </a>
    </Link>
  );
}
