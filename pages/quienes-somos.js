import getPageData from '../utils/api';
import Objetivos from '../components/Objetivos/Objetivos';

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
      <Objetivos data={data} />
    </div>
  );
}
