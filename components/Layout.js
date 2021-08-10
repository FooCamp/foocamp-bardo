import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation {...children} />

      <div className="page-content">{children}</div>

      <footer>
        <p>A footer</p>
      </footer>
    </div>
  );
}
