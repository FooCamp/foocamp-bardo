export default function Stamp({ position }) {
  const positionClass = position ? `Sello--${position}` : '';
  return (
    <img src="/sello.svg" alt="Se" className={`Sello ${positionClass}`} />
  );
}
