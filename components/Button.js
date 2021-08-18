export default function Button({ buttonstyle, onclick, text }) {
  return (
    <div className="button__container">
      <button type="button" className={buttonstyle} onClick={onclick}>
        {text}
      </button>
    </div>
  );
}
