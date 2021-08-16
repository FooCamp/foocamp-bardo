import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ data, children }) {
  return (
    <div className="layout">
      <Navigation {...children} />

      <div className="page-content">
        {children}
      </div>
      <Footer data={data} />
    </div>
  );
}
