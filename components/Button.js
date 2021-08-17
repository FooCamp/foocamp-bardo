export default function Button({
  children, buttonstyle, onclick, ariaLabel,
}) {
  return (
    <div className="button__container">
      <button
        type="button"
        className={buttonstyle}
        onClick={onclick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </div>
  );
}
