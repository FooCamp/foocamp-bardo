import React, { useState, useEffect } from 'react';
import useViewport from '../hooks/useViewport';
import useCarousel from '../hooks/useCarousel';
import CardArtwork from './CardArtwork';
import Pagination from './Pagination';
import Container from './Container';

export default function ArtworkCarousel({ artPiecesList }) {
  const refTop = React.createRef();
  const refBottom = React.createRef();

  const { viewport } = useViewport();
  const {
    left,
    cursor,
    totalPages,
    currentPage,
    onPage,
    onPrevPage,
    onNextPage,
    onMouseDown,
    onTouchStart,
    onMouseTouchEnd,
    onMouseMove,
    onTouchMove,
  } = useCarousel([refTop, refBottom], artPiecesList.length);

  const [artPieces, setArtPieces] = useState({ top: [], bottom: [] });
  const listParams = {
    onMouseDown,
    onTouchStart,
    onMouseMove,
    onTouchMove,
    onMouseLeave: onMouseTouchEnd,
    onMouseUp: onMouseTouchEnd,
    onTouchEnd: onMouseTouchEnd,
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
    newArtPieces.top = artPiecesList.reduce(
      (prev, current, index) => prev.concat({ ...current, index }),
      [],
    );
    setArtPieces(newArtPieces);
  };

  useEffect(() => {
    if (viewport === 'mobile') {
      setCarrouselMobile();
    } else {
      setCarrouselDesktop();
    }
  }, [viewport]);

  return (
    <>
      <div
        className="artwork__list"
      >
        <Container>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            className="artwork__list-content"
            ref={refTop}
            {...listParams}
          >
            {artPieces.top.map((artwork) => (
              <CardArtwork
                artwork={artwork}
                key={artwork.index}
                style={{ left, cursor }}
              />
            ))}
          </div>
          <div
            className="artwork__list-content"
            ref={refBottom}
            {...listParams}
          >
            {artPieces.bottom.map((artwork) => (
              <CardArtwork
                artwork={artwork}
                key={artwork.index}
                style={{ left }}
              />
            ))}
          </div>
        </Container>
      </div>
      <Container>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
          onPage={onPage}
          className="artwork__pagination"
        />
      </Container>
    </>
  );
}
