function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, ...args);
    }, ms);
  };
}

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

export { debounce, range };
