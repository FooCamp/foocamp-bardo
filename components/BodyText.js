export default function BodyText({ children, className }) {
  return (
    <p className={`body ${className}`}>
      {children}
    </p>
  );
}
