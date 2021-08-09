// import Link from "next/link";
export default function ImageLink({
  url,
  linkUrl,
  alternativeText,
  className,
}) {
  return (
    <a href={linkUrl} className={className}>
      <img src={url} alt={alternativeText} />
    </a>
  );
}
