import getPageData from '../utils/api';
import { getContentfulComponentList } from '../utils/contentful';
import ComponentList from '../components/ComponentList';
import pageComponentPool from '../utils/pageComponentPool';

export const getServerSideProps = async () => {
  const pageData = await getPageData('artista');
  const componentNameList = getContentfulComponentList(pageData);

  return {
    props: {
      data: { ...pageData },
      componentNameList,
    },
  };
};

export default function artista({ data, componentNameList }) {
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
