import '../styles/globals.scss';
import Layout from '../components/Layout';
import PageError from '../components/PageError';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {pageProps?.data?.items.length > 0
        ? (
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        )
        : <PageError />}
    </>
  );
}

export default MyApp;
