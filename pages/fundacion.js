import ProfileDetail from '../components/ProfileDetail';
import getPageData from '../utils/api';
import Methodology from '../components/Methodology/Methodology';

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
  console.log(data);
  return (
    <div>
      <ProfileDetail data={data} />
      <Methodology data={data} />
    </div>
  );
}
