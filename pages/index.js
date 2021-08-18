import getPageData from '../utils/api';
import HomeHero from '../components/Hero/HomeHero';
import Profiles from '../components/Profiles';

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
  console.log(data);

  return (
    <div className="home">
      <HomeHero data={data} />
      <Profiles data={data} />
    </div>
  );
}
