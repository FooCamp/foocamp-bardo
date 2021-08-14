import React, { useState } from 'react';
import { getContentfulArtworkData } from '../utils/contentful';
import Container from './Container';
import Title from './Title';
import Subtitle from './Subtitle';
import CardArtwork from './CardArtwork';
import Pagination from './Pagination';

export default function Artwork({ data }) {
  const artworkData = getContentfulArtworkData(data);
  const {
    sectionTitle, sectionDescription, sectionComponents,
  } = artworkData;
  // const { artPiecesList } = sectionComponents[0].fields;
  const reducer = (prev, current, index) => prev.concat({ ...current, index });
  const artPiecesList = [
    ...sectionComponents[0].fields.artPiecesList,
    ...sectionComponents[0].fields.artPiecesList,
    ...sectionComponents[0].fields.artPiecesList,
  ].reduce(reducer, []);

  const [margin, setMargin] = useState('');
  const [perPage/* , setPerPage */] = useState(3);
  const [counter, setCounter] = useState(1);

  const changeCarrousel = (newCount) => {
    setCounter(newCount);
    setMargin(`calc(-${(newCount - 1) * 100}% - ${(newCount - 1) * 25}px)`);
  };

  const onPrevPage = () => {
    const newCount = counter - 1;
    changeCarrousel(newCount);
  };

  const onNextPage = () => {
    const newCount = counter + 1;
    changeCarrousel(newCount);
  };

  const onPage = (newCount) => {
    changeCarrousel(newCount);
  };

  return (
    <section className="artwork">
      <Container className="artwork__header">
        <div className="artwork__title">
          <Title>{ sectionTitle }</Title>
        </div>
        <div className="artwork__subtitle">
          <Subtitle>{ sectionDescription }</Subtitle>
        </div>
      </Container>
      <div className="artwork__list">
        <Container>
          <div className="artwork__list-content">
            {artPiecesList.map((artwork, index) => (
              <CardArtwork
                artwork={artwork}
                key={artwork.index}
                // key={artwork.fields.identifier}
                style={index === 0 ? { marginLeft: margin } : {}}
              />
            ))}
          </div>
        </Container>
      </div>
      <Pagination
        total={artPiecesList.length}
        perPage={perPage}
        className="artwork__pagination"
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        onPage={onPage}
      />
    </section>
  );
}
