import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ data, children }) {
  return (
    <div className="layout">
      <Head>
        <link rel="shortcut icon" href="../favicon.png" />
      </Head>
      <Navigation {...children} />
      <div className="page-content">{children}</div>
      <Footer data={data} />
    </div>
  );
}
