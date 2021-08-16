import Navigation from './Navigation';
import Footer from './Footer';
import Cards from './Profiles';
import AliadosSection from './AliadosSection';

export default function Layout({ data, children }) {
  return (
    <div className="layout">
      <Navigation {...children} />

      <div className="page-content">
        <Cards {...children} />
        <AliadosSection {...children} />
      </div>

      <Footer data={data} />
    </div>
  );
}
