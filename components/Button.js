export default function Button({
  text, buttonstyle, onclick, ariaLabel, role, disabled,
}) {
  const roleButton = role || 'button';
  const disabledButton = disabled || false;

  return (
    <div className="button__container">
      <button
        type="button"
        className={buttonstyle}
        onClick={onclick}
        aria-label={ariaLabel}
        role={roleButton}
        disabled={disabledButton}
      >
        {text}
      </button>
    </div>
  );
}
