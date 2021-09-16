import getPageData from '../utils/api';
import Artwork from '../components/Artwork';
import HeroHome from '../components/Hero/HeroHome';
import Profiles from '../components/Profiles';
import Allies from '../components/Allies/AlliesSection';

export const getServerSideProps = async () => {
  const pageData = await getPageData('home');

  return {
    props: {
      data: pageData,
      components: [] /* pageData.fields.components */,
    },
  };
};

export default function Home({ data }) {
  return (
    <div className="home">
      <HeroHome data={data} />
      <Profiles data={data} />
      <Artwork data={data} />
      <Allies data={data} />
    </div>
  );
}
