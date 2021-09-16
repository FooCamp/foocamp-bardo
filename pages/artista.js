import ProfileDetail from '../components/ProfileDetail';
import getPageData from '../utils/api';
import Methodology from '../components/Methodology/Methodology';
import HeroProfile from '../components/Hero/HeroProfile';

export const getServerSideProps = async () => {
  const pageData = await getPageData('artista');

  return {
    props: {
      data: { ...pageData },
      components: [] /* pageData.fields.components */,
    },
  };
};

export default function artista({ data }) {
  return (
    <div>
      <HeroProfile data={data} />
      <ProfileDetail data={data} />
      <Methodology data={data} />
    </div>
  );
}
