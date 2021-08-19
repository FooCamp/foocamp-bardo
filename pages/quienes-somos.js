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

export default function QuienesSomos({ data }) {
  return (
    <div>
      <Objectives data={data} />
    </div>
  );
}
