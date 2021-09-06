import ProfileDetail from '../components/ProfileDetail';
import getPageData from '../utils/api';

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
    </div>
  );
}
