import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ data, pageData, children }) {
  const { title } = pageData ? pageData.items[0].fields : data.items[0].fields;

  return (
    <div className="layout">
      <Head>
        <link rel="shortcut icon" href="../favicon.png" />
        <title>{title}</title>
      </Head>
      <Navigation {...children} />
      <div className="page-content">{children}</div>
      <Footer data={data} />
    </div>
  );
}
