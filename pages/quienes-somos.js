import getPageData from '../utils/api';
import Objectives from '../components/Objectives/Objectives';
import HeroChild from '../components/Hero/HeroChild';
import Statements from '../components/Statements/Statements';

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
      <HeroChild data={data} />
      <Statements data={data} />
      <Objectives data={data} />
    </div>
  );
}
