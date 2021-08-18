import { useState, useEffect } from 'react';
import useViewport from './useViewport';
import { debounce } from '../utils/function';

export default function useCarousel(ref, totalList) {
  const { viewport } = useViewport();

  const [perPage, setPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [left, setLeft] = useState('');
  // const [top, setLeft] = useState('');
  const [cursor, setCursor] = useState('grab');
  const [carousel, setCarousel] = useState({});

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [transLeftOffset, setTransLeftOffset] = useState(0);

  const onPrevPage = () => {
    const newCount = currentPage > 1 ? currentPage - 1 : currentPage;
    setCurrentPage(newCount);
  };

  const onNextPage = () => {
    const newCount = currentPage < totalPages ? currentPage + 1 : currentPage;
    setCurrentPage(newCount);
  };

  const onPage = (newCount) => {
    setCurrentPage(newCount);
  };

  const onMouseDown = (e) => {
    if (carousel.length > 0) {
      setIsDown(true);
      const elementX = carousel[0].children[0].offsetLeft - carousel[0].offsetLeft;
      setStartX(e.pageX - elementX);
      setTransLeftOffset(elementX);
      setCursor('grabbing');
    }
  };

  const onTouchStart = (e) => {
    if (carousel.length > 0) {
      setIsDown(true);
      const firstTouchEvent = e.touches[0];
      const elementX = firstTouchEvent.clientX - carousel[0].offsetLeft;
      setStartX(elementX);
      setTransLeftOffset(elementX);
    }
  };

  const onMouseTouchEnd = () => {
    setCursor('grab');
    setIsDown(false);
  };

  const debouncedMovement = (walk) => {
    const minWidth = viewport === 'mobile' ? carousel[0].clientWidth / 2 : carousel[0].clientWidth / 4;
    if (minWidth < Math.abs(walk)) {
      if (walk < 0) {
        (debounce(() => onNextPage(), 250))();
      } else {
        (debounce(() => onPrevPage(), 250))();
      }
    }
  };

  const onMouseMove = (e) => {
    e.stopPropagation();
    if (!isDown) return e.preventDefault();
    const elementX = carousel[0].children[0].offsetLeft - carousel[0].offsetLeft;
    const x = e.pageX - elementX;
    const walk = (x - startX);
    setLeft(transLeftOffset + walk);
    debouncedMovement(walk);

    return false;
  };

  const onTouchMove = (e) => {
    e.stopPropagation();
    if (!isDown) return e.preventDefault();

    const firstTouchEvent = e.touches[0];
    const elementX = firstTouchEvent.clientX - carousel[0].offsetLeft;
    const walk = (elementX - startX);

    if (Math.abs(walk) > carousel[0].clientWidth / 4) {
      setLeft(transLeftOffset + walk);
      debouncedMovement(walk);
    }

    return false;
  };

  useEffect(() => {
    const carouselList = [];
    ref.forEach((element) => {
      carouselList.push(element.current);
    });
    setCarousel(carouselList);
  }, []);

  useEffect(() => {
    if (viewport === 'mobile') {
      setPerPage(4);
    } else {
      setPerPage(3);
    }
  }, [viewport]);

  useEffect(() => {
    if (carousel.length > 0) {
      setTotalPages(Math.ceil(totalList / perPage));
    }
    setCurrentPage(1);
  }, [perPage]);

  useEffect(() => {
    let newLeft = '';
    const padding = viewport === 'mobile' ? 16 : 24;
    newLeft = `calc(-${(currentPage - 1) * 100}% - ${(currentPage - 1) * padding}px)`;

    setLeft(newLeft);
  }, [currentPage, isDown]);

  return {
    left,
    cursor,
    perPage,
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
  };
}
