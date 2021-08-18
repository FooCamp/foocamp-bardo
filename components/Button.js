export default function Button({
  text, buttonstyle, onclick, ariaLabel,
}) {
  return (
    <div className="button__container">
      <button
        type="button"
        className={buttonstyle}
        onClick={onclick}
        aria-label={ariaLabel}
      >
        {text}
      </button>
    </div>
  );
}
