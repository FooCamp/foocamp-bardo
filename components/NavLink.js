import Link from 'next/link';

export default function NavLink({ linkLabel, linkUrl }) {
  return (
    <Link href={linkUrl}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="navegation__item">
        <li>{linkLabel}</li>
      </a>
    </Link>
  );
}
