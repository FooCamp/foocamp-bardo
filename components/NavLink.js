import Link from 'next/link';

export default function NavLink({ linkLabel, linkUrl }) {
  return (
    <Link href={linkUrl}>
      <li className="navigation__item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>{linkLabel}</a>
      </li>
    </Link>
  );
}
