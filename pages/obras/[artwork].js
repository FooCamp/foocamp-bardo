import { useRouter } from 'next/router';
import { getContentfulArtworkDetailsPageData, getContentfulSingleArtworkData, getContentfulArtworkDetailsButtonData } from '../../utils/contentful';
import getPageData from '../../utils/api';
import ArtworkArticle from '../../components/ArtworkArticle/ArtworkArticle';

export const getServerSideProps = async () => {
  const artData = await getPageData('home');
  const pageData = await getPageData('detalles-de-obra');

  return {
    props: {
      data: artData,
      pageData,
    },
  };
};

export default function Artwork({ data, pageData }) {
  const router = useRouter();
  const { artwork: selectedArtworkName } = router.query;
  const artworkData = getContentfulSingleArtworkData(data, selectedArtworkName);
  const detailsPageData = getContentfulArtworkDetailsPageData(pageData);
  const buttonData = getContentfulArtworkDetailsButtonData(pageData);

  return (
    <div className="home">
      <ArtworkArticle data={artworkData} pageData={detailsPageData} buttonData={buttonData} />
    </div>
  );
}
