import React, { useState, useEffect } from 'react';
import debounce from '../utils/function';
import CardArtwork from './CardArtwork';
import Pagination from './Pagination';
import Container from './Container';

export default function ArtworkCarrousel({ artPiecesList }) {
  const [left, setLeft] = useState('');
  const [cursor, setCursor] = useState('grab');
  const [perPage, setPerPage] = useState(4);
  const [counter, setCounter] = useState(1);
  const [viewport, setViewport] = useState('mobile');
  const [artPieces, setArtPieces] = useState({ top: [], bottom: [] });

  // Carrousel drag
  const [carousel, setCarousel] = useState({});
  const [isDown, setIsDown] = useState(false);
  const [prevLeft, setPrevLeft] = useState('');
  const [startX, setStartX] = useState(0);
  const [transLeftOffset, setTransLeftOffset] = useState(0);

  const listRef = React.createRef();
  const reducer = (prev, current, index) => prev.concat({ ...current, index });

  const changePage = (newCount) => {
    setCounter(newCount);
    let newLeft = '';
    if (viewport === 'mobile') {
      newLeft = `calc(-${(newCount - 1) * 100}% - ${(newCount - 1) * 16}px)`;
    } else {
      newLeft = `calc(-${(newCount - 1) * 100}% - ${(newCount - 1) * 24}px)`;
    }
    setLeft(newLeft);
    setPrevLeft(newLeft);
  };

  const onPrevPage = () => {
    const newCount = counter > 1 ? counter - 1 : counter;
    changePage(newCount);
  };

  const onNextPage = () => {
    const countPages = Math.ceil(artPiecesList.length / perPage);
    const newCount = counter < countPages ? counter + 1 : counter;
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

  const onMouseDown = (e) => {
    setIsDown(true);
    const elementX = carousel.children[0].offsetLeft - carousel.offsetLeft;
    setStartX(e.pageX - elementX);
    setTransLeftOffset(elementX);
    setCursor('grabbing');
  };

  const onTouchStart = (e) => {
    setIsDown(true);
    const firstTouchEvent = e.touches[0];
    const elementX = firstTouchEvent.clientX - carousel.offsetLeft;
    setStartX(elementX);
    setTransLeftOffset(elementX);
  };

  const onMouseTouchEnd = () => {
    if (isDown) {
      setIsDown(false);
      setLeft(prevLeft);
    }
    setCursor('grab');
  };

  const debouncedMovement = (walk) => {
    if ((carousel.clientWidth / 4) < Math.abs(walk)) {
      if (walk < 0) {
        onNextPage();
      } else {
        onPrevPage();
      }
    }
  };

  const onMouseMove = (e) => {
    e.stopPropagation();
    if (!isDown) return e.preventDefault();

    const elementX = carousel.children[0].offsetLeft - carousel.offsetLeft;
    const x = e.pageX - elementX;
    const walk = (x - startX);
    setLeft(transLeftOffset + walk);
    (debounce(() => debouncedMovement(walk), 250))();

    return false;
  };

  const onTouchMove = (e) => {
    e.stopPropagation();
    if (!isDown) return e.preventDefault();

    const firstTouchEvent = e.touches[0];
    const elementX = firstTouchEvent.clientX - carousel.offsetLeft;
    const walk = (elementX - startX);
    setLeft(transLeftOffset + walk);
    (debounce(() => debouncedMovement(walk), 250))();

    return false;
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      const newViewport = window.innerWidth <= 768 ? 'mobile' : 'desktop';
      setViewport(newViewport);
    }, 250);

    window.addEventListener('resize', debouncedHandleResize);
    debouncedHandleResize();

    setCarousel(listRef.current);
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
    <>
      <div
        className="artwork__list"
      >
        <Container>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            className="artwork__list-content"
            ref={listRef}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            onMouseLeave={onMouseTouchEnd}
            onMouseUp={onMouseTouchEnd}
            onDragEnd={onMouseTouchEnd}
            onTouchEnd={onMouseTouchEnd}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
          >
            {artPieces.top.map((artwork) => (
              <CardArtwork
                artwork={artwork}
                key={artwork.index}
                style={{ left, cursor }}
              />
            ))}
          </div>
          <div className="artwork__list-content">
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
      <Pagination
        total={artPiecesList.length}
        perPage={perPage}
        className="artwork__pagination"
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        onPage={onPage}
      />
    </>
  );
}
