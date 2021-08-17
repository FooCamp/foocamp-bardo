import React, { useState, useEffect } from 'react';
import useViewport from '../hooks/useViewport';
import { range } from '../utils/function';
import Button from './Button';

export default function Pagination({
  totalPages,
  currentPage,
  onPrevPage,
  onNextPage,
  onPage,
  className,
}) {
  const btnWidth = 48;
  const countToShow = 3;
  const paginationClass = className ? `pagination ${className}` : 'pagination';

  const { viewport } = useViewport();
  const [btnClass, setBtnClass] = useState('');
  const [pages, setPages] = useState([]);
  const [margin, setMargin] = useState(0);

  const getMargin = () => {
    let newMargin = 0;
    if (currentPage > 1 && totalPages - 1 >= currentPage) {
      newMargin = (currentPage - (countToShow - 1)) * btnWidth;
      setMargin(-newMargin);
    }
  };

  const getNumbers = () => {
    if (totalPages > countToShow) {
      return getMargin();
    }
    return true;
  };

  useEffect(() => {
    setPages(range(1, totalPages));
  }, [totalPages]);

  useEffect(() => {
    getNumbers();
  }, [currentPage]);

  useEffect(() => {
    const baseClass = 'button pagination__btn';
    const newBtnClass = viewport === 'mobile' ? `${baseClass} button--secondary` : `${baseClass} button--bordered`;
    setBtnClass(newBtnClass);
  }, [viewport]);

  return (
    <div className={paginationClass}>
      <div className="pagination__prev">
        { !(currentPage === 1)
          && (
            <Button buttonstyle={btnClass} onclick={onPrevPage} aria-label="Atrás">
              <span className="pagination--desktop">&lt;</span>
              <span className="pagination--mobile">Atrás</span>
            </Button>
          )}
      </div>
      { pages.length > 1 && (
        <>
          <ul className="pagination__list pagination__list--desktop">
            { pages.map((page, index) => (
              <li
                key={page.index}
                className="pagination__item"
                style={index === 0 ? { marginLeft: margin } : {}}
              >
                <Button
                  buttonstyle={`pagination__btn${currentPage === page.value ? ' pagination__btn-active' : ''}`}
                  onclick={() => onPage(page.value)}
                >
                  { page.value }
                </Button>
              </li>
            )) }
          </ul>
          <p className="pagination__list pagination__list--mobile">
            {currentPage}
            /
            {totalPages}
          </p>
        </>
      )}
      <div className="pagination__next">
        { !(currentPage === totalPages)
          && (
            <Button buttonstyle={btnClass} onclick={onNextPage} aria-label="Siguiente">
              <span className="pagination--desktop">&gt;</span>
              <span className="pagination--mobile">SIguiente</span>
            </Button>
          )}
      </div>
    </div>
  );
}
