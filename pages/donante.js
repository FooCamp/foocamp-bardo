import ProfileDetail from '../components/ProfileDetail';
import getPageData from '../utils/api';
import Methodology from '../components/Methodology/Methodology';

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
      <ProfileDetail data={data} />
      <Methodology data={data} />
    </div>
  );
}
