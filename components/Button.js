export default function Button({
  text, buttonstyle, containerStyle, onclick, ariaLabel,
}) {
  return (
    <div className={`button__container ${containerStyle}`}>
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
