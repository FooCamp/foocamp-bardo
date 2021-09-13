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

const camelize = (text) => text.replace(/-./g, (x) => x.toUpperCase()[1]);

const kebabize = (text) => text.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (x, ofs) => (ofs ? '-' : '') + x.toLowerCase());

export {
  debounce, range, camelize, kebabize,
};
