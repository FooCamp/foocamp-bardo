export default function Stamp({ position, size }) {
  const stampPosition = position ? `stamp--${position}` : '';
  const stampSize = size ? `stamp--${size}` : '';

  const stampClass = `stamp ${stampPosition} ${stampSize}`;

  return (
    <img src="/sello.svg" alt="Sello de Bardo" className={`${stampClass}`} />
  );
}
