<<<<<<< HEAD
<<<<<<< HEAD
export default function Stamp({ position, size }) {
  const stampPosition = position ? `stamp--${position}` : '';
  const stampSize = size ? `stamp--${size}` : '';

  const stampClass = `stamp ${stampPosition} ${stampSize}`;

=======
export default function Stamp({ position }) {
  const stampClass = position ? `stamp stapm--small stamp--${position}` : 'stamp';
>>>>>>> dc8c739 (Add: bardo stamp)
=======
export default function Stamp({ position, size }) {
  const stampPosition = position ? `stamp--${position}` : '';
  const stampSize = size ? `stamp--${size}` : '';

  const stampClass = `stamp ${stampPosition} ${stampSize}`;

>>>>>>> f490dab (Fix: Stamp size bug)
  return (
    <img src="/sello.svg" alt="Sello de Bardo" className={`${stampClass}`} />
  );
}
