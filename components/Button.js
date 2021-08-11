export default function Button({
  children, link, backgroundstyle, textstyle,
}) {
  return (
    <div className={backgroundstyle}>
      <a href={link}>
        <span className={textstyle}>{children}</span>
      </a>
    </div>
  );
}
