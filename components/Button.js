export default function Button({ children, link, buttonstyle }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="button__container">
      <button
        type="button"
        className={buttonstyle}
        onClick={() => openInNewTab({ link })}
      >
        {children}
      </button>
    </div>
  );
}
