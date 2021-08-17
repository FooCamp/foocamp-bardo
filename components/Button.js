export default function Button({
  children, buttonstyle, onclick, ...attribProps
}) {
  return (
    <div className="button__container">
      <button type="button" className={buttonstyle} onClick={onclick} {...attribProps}>
        {children}
      </button>
    </div>
  );
}
