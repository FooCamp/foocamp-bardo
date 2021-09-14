export default function ButtonLink({
  text, buttonstyle, onclick, ariaLabel, url,
}) {
  return (
    <div className="button__container">
      <a
        href={url}
        type="button"
        className={buttonstyle}
        onClick={onclick}
        aria-label={ariaLabel}
      >
        {text}
      </a>
    </div>
  );
}
