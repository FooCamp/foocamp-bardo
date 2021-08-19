import Error from 'next/error';

function Page({ statusCode }) {
  return <Error statusCode={statusCode} />;
}

Page.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err;
  const response = statusCode ? err.statusCode : 404;
  return { response };
};

export default Page;
