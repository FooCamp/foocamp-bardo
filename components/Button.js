export default function Button({
  text, buttonstyle, containerStyle, onclick, ariaLabel, disabled
}) {
  const disabledButton = disabled || false;
  return (
    <div className={`button__container ${containerStyle}`}>
      <button
        type="button"
        className={buttonstyle}
        onClick={onclick}
        aria-label={ariaLabel}
        disabled={disabledButton}
      >
        {text}
      </button>
    </div>
  );
}
