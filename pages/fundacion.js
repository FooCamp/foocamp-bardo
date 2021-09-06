import ProfileDetail from '../components/ProfileDetail';
import getPageData from '../utils/api';

export const getServerSideProps = async () => {
  const pageData = await getPageData('fundacion');

  return {
    props: {
      data: { ...pageData },
      components: [] /* pageData.fields.components */,
    },
  };
};

export default function fundacion({ data }) {
  return (
    <div>
      <ProfileDetail data={data} />
    </div>
  );
}
