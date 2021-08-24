import getPageData from '../utils/api';
import ImpactLevel from '../components/ImpactLevel/Impact';

export const getServerSideProps = async () => {
  const pageData = await getPageData('que-hacemos');

  return {
    props: {
      data: { ...pageData },
      components: [] /* pageData.fields.components */,
    },
  };
};

export default function QueHacemos({ data }) {
  return (
    <div>
      <ImpactLevel data={data} />
    </div>
  );
}
