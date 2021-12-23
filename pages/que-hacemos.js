import getPageData from '../utils/api';
import { getContentfulComponentList } from '../utils/contentful';
import pageComponentPool from '../utils/pageComponentPool';
import ComponentList from '../components/ComponentList';

export const getServerSideProps = async () => {
  const pageData = await getPageData('que-hacemos');
  const componentNameList = getContentfulComponentList(pageData);

  return {
    props: {
      data: { ...pageData },
      componentNameList,
    },
  };
};

export default function QueHacemos({ data, componentNameList }) {
  console.log(data);
  return (
    <div>
      <ComponentList
        data={data}
        componentList={pageComponentPool}
        componentNameList={componentNameList}
      />
    </div>
  );
}
