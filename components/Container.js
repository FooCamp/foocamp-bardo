export default function Container({ children, className }) {
  const containerClass = className ? `container ${className}` : 'container';
  return (
    <div className={containerClass}>
      {children}
    </div>
  );
}
