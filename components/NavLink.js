import Link from 'next/link';

export default function NavLink({ linkLabel, linkUrl }) {
  const target = (linkUrl.length > 0 && linkUrl.substr(0, 1) !== '/') ? '_blank' : '_self';
  return (
    <li className="navigation__item">
      <Link href={linkUrl}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a target={target}>{linkLabel}</a>
      </Link>
    </li>
  );
}
