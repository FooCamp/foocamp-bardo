import getPageData from '../utils/api';
import Artwork from '../components/Artwork';

export const getServerSideProps = async () => {
  const pageData = await getPageData('home');

  return {
    props: {
      data: pageData,
      components: []/* pageData.fields.components */,
    },
  };
};

export default function Recipes({ data }) {
  return (
    <div className="home">
      <h1>
        Index page
      </h1>
      <Artwork data={data} />
    </div>
  );
}
