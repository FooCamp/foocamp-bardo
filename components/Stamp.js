export default function Stamp({ position }) {
  const stampClass = position ? `stamp stamp--${position}` : 'stamp';
  return (
    <img src="/sello.svg" alt="Sello de Bardo" className={`${stampClass}`} />
  );
}
