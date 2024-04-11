import { data } from "./data.js";
import { population, cities } from "./functions.js";

const populationGreater100k = population(data);
console.log(populationGreater100k);

const citiesLessThan100k = cities(data);
console.log(citiesLessThan100k);
