import ProfileDetail from '../components/ProfileDetail';
import HeroProfile from '../components/Hero/HeroProfile';
import getPageData from '../utils/api';

export const getServerSideProps = async () => {
  const pageData = await getPageData('patrocinador');

  return {
    props: {
      data: { ...pageData },
      components: [] /* pageData.fields.components */,
    },
  };
};

export default function patrocinador({ data }) {
  return (
    <div>
      <HeroProfile data={data} />
      <ProfileDetail data={data} />
    </div>
  );
}
