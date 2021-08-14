import React, { useState, useEffect } from 'react';

export default function Pagination({
  total, perPage, onPrevPage, onNextPage, onPage, className,
}) {
  const btnWidth = 48;
  const countToShow = 3;
  const totalPages = Math.ceil(total / perPage);
  const paginationClass = className ? `pagination ${className}` : 'pagination';

  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [margin, setMargin] = useState(0);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (onPrevPage) {
        onPrevPage();
      }
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      if (onNextPage) {
        onNextPage();
      }
    }
  };

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    if (onPage) {
      onPage(page);
    }
  };

  const range = (from, to) => {
    let i = from;
    const listRange = [];

    while (i <= to) {
      listRange.push({
        value: i,
        index: `page_${i}`,
      });
      i += 1;
    }
    return listRange;
  };

  const getMargin = () => {
    let newMargin = 0;
    if (currentPage >= countToShow - 1 && totalPages - currentPage >= 1) {
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
    setCurrentPage(1);
  }, [total, perPage]);

  useEffect(() => {
    getNumbers();
  }, [currentPage]);

  return (
    <div className={paginationClass}>
      <div className="pagination__prev">
        { !(currentPage === 1)
          && <button className="pagination__btn" type="button" onClick={prevPage}> &lt; </button>}
      </div>
      <ul className="pagination__list">
        { pages.length > 1 && pages.map((page, index) => (
          <li
            key={page.index}
            className="pagination__item"
            style={index === 0 ? { marginLeft: margin } : {}}
          >
            <button
              type="button"
              className={`pagination__btn${currentPage === page.value ? ' pagination__btn-active' : ''}`}
              onClick={() => goToPage(page.value)}
            >
              { page.value }
            </button>
          </li>
        )) }
      </ul>
      <div className="pagination__next">
        { !(currentPage === totalPages)
          && <button className="pagination__btn" type="button" onClick={nextPage}> &gt; </button>}
      </div>
    </div>
  );
}
