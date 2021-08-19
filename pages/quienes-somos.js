import getPageData from '../utils/api';
import Objectives from '../components/Objectives/Objectives';

export const getServerSideProps = async () => {
  const pageData = await getPageData('quienes-somos');

  return {
    props: {
      data: { ...pageData },
      components: [] /* pageData.fields.components */,
    },
  };
};

export default function Recipes({ data }) {
  return (
    <div>
      <Objectives data={data} />
    </div>
  );
}
