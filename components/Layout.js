import Navigation from './Navigation';
import Footer from './Footer';
import Profiles from './Profiles';

export default function Layout({ data, children }) {
  return (
    <div className="layout">
      <Navigation {...children} />

      <div className="page-content">
        <Profiles {...children} />
      </div>
      <Footer data={data} />
    </div>
  );
}
