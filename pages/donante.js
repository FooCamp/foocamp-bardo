import ProfileDetail from '../components/ProfileDetail';
import getPageData from '../utils/api';
import HeroProfile from '../components/Hero/HeroProfile';

export const getServerSideProps = async () => {
  const pageData = await getPageData('donante');

  return {
    props: {
      data: { ...pageData },
      components: [] /* pageData.fields.components */,
    },
  };
};

export default function donante({ data }) {
  return (
    <div>
      <HeroProfile data={data} />
      <ProfileDetail data={data} />
    </div>
  );
}
