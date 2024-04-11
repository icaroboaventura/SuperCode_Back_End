const population = (arr) => {
  return arr.filter((item) => item.population > 100000);
};

const cities = (arr) => {
  return arr.filter((item) => item.population < 100000);
};

export { population, cities };
