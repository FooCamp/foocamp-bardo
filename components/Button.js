export default function Button({
  text, buttonstyle, onclick, ariaLabel, disabled,
}) {
  const disabledButton = disabled || false;
  return (
    <div className="button__container">
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
