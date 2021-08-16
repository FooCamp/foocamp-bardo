import React, { useState, useEffect } from 'react';
import { getContentfulArtworkData } from '../utils/contentful';
import debounce from '../utils/function';
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
  const [perPage, setPerPage] = useState(4);
  const [counter, setCounter] = useState(1);
  const [viewport, setViewport] = useState('mobile');
  const [artPieces, setArtPieces] = useState({ top: [], bottom: [] });

  const changePage = (newCount) => {
    setCounter(newCount);
    if (viewport === 'mobile') {
      setMargin(`calc(-${(newCount - 1) * 100}% - ${(newCount - 1) * 16}px)`);
    } else {
      setMargin(`calc(-${(newCount - 1) * 100}% - ${(newCount - 1) * 24}px)`);
    }
  };

  const onPrevPage = () => {
    const newCount = counter - 1;
    changePage(newCount);
  };

  const onNextPage = () => {
    const newCount = counter + 1;
    changePage(newCount);
  };

  const onPage = (newCount) => {
    changePage(newCount);
  };

  const setCarrouselMobile = () => {
    const newArtPieces = { top: [], bottom: [] };
    for (let index = 1; index <= Math.ceil(artPiecesList.length / 2); index += 1) {
      const elements = [];
      elements.push(artPiecesList[index * 2 - 2]);
      if (artPiecesList.length > (index * 2 - 1)) {
        elements.push(artPiecesList[index * 2 - 1]);
      }

      if (index % 2 === 0) {
        newArtPieces.bottom.push(...elements);
      } else {
        newArtPieces.top.push(...elements);
      }
    }
    setArtPieces(newArtPieces);
  };

  const setCarrouselDesktop = () => {
    const newArtPieces = { top: [], bottom: [] };
    newArtPieces.top = artPiecesList.reduce(reducer, []);
    setArtPieces(newArtPieces);
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      const newViewport = window.innerWidth <= 768 ? 'mobile' : 'desktop';
      setViewport(newViewport);
    }, 250);

    window.addEventListener('resize', debouncedHandleResize);
    debouncedHandleResize();

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  useEffect(() => {
    if (viewport === 'mobile') {
      setPerPage(4);
      setCarrouselMobile();
    } else {
      setPerPage(3);
      setCarrouselDesktop();
    }
    changePage(1);
  }, [viewport]);

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
            {artPieces.top.map((artwork) => (
              <CardArtwork
                artwork={artwork}
                key={artwork.index}
                // key={artwork.fields.identifier}
                style={{ left: margin }}
              />
            ))}
          </div>
          <div className="artwork__list-content">
            {artPieces.bottom.map((artwork) => (
              <CardArtwork
                artwork={artwork}
                key={artwork.index}
                // key={artwork.fields.identifier}
                style={{ left: margin }}
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
