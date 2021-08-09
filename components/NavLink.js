// import Link from "next/link";
export default function NavLink({ linkLabel, linkUrl }) {
  return (
    <a href={linkUrl} className="navegation__item">
      <li>{linkLabel}</li>
    </a>
  );
}
