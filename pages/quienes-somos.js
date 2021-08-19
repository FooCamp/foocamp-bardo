import getPageData from '../utils/api';
import Objectives from '../components/Objectives/Objectives';
import ChildHero from '../components/Hero/ChildHero';

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
      <ChildHero data={data} />
    </div>
  );
}
