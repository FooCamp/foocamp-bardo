export default function Button({ children, buttonstyle, onclick }) {
  return (
    <div className="button__container">
      <button type="button" className={buttonstyle} onClick={onclick}>
        {children}
      </button>
    </div>
  );
}
