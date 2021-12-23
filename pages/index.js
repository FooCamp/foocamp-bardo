import getPageData from '../utils/api';
import { getContentfulComponentList } from '../utils/contentful';
import ComponentList from '../components/ComponentList';
import pageComponentPool from '../utils/pageComponentPool';

export const getServerSideProps = async () => {
  const pageData = await getPageData('home');
  const componentNameList = getContentfulComponentList(pageData);

  return {
    props: {
      data: pageData,
      componentNameList,
    },
  };
};

export default function Home({ data, componentNameList }) {
  return (
    <div className="home">
      <ComponentList
        data={data}
        componentList={pageComponentPool}
        componentNameList={componentNameList}
      />
    </div>
  );
}
