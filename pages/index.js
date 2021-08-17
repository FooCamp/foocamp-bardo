import getPageData from '../utils/api';
import Artwork from '../components/Artwork';
import HomeHero from '../components/Hero/HomeHero';

export const getServerSideProps = async () => {
  const pageData = await getPageData('home');

  return {
    props: {
      data: pageData,
      components: [] /* pageData.fields.components */,
    },
  };
};

export default function Recipes({ data }) {
  return (
    <div className="home">
      <HomeHero data={data} />
      <Artwork data={data} />
    </div>
  );
}
