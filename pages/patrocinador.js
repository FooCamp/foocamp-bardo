import ProfileDetail from '../components/ProfileDetail';
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
      <ProfileDetail data={data} />
    </div>
  );
}
