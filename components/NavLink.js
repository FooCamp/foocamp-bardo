import Link from 'next/link';

export default function NavLink({ linkLabel, linkUrl }) {
  return (
    <li className="navigation__item">
      <Link href={`/${linkUrl}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>{linkLabel}</a>
      </Link>
    </li>
  );
}
