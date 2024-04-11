const firstElementOfArr = (arr) => arr[0];

const allWithoutTheLast = (arr) => arr.slice(0, -1);

const lastItem = (arr) => arr.slice(-1);

const allWithoutTheFirst = (arr) => arr.slice(1, arr.length);

const removeItem = (arr, item) => {
  if (!arr.includes(item)) {
    return "There is no such item in the Array";
  }

  if (arr.includes(item)) {
    return arr.filter((element) => element !== item);
  } else {
    return arr;
  }
};

const uniqueItems = (arr) => {
  const uniqueItems = [...new Set(arr)];
  return uniqueItems;
};

const sum = (arr) => {
  const arrOfNumbers = arr.every((item) => typeof item === "number");

  if (arrOfNumbers) {
    return arr.reduce((sum, ele) => sum + ele, 0);
  } else {
    return "We need numbers, man, only numbers";
  }
};

const randomNum = (a, b) => Math.random() * (b - a) + a;

const firstLetterToUpperCase = (str) => str[0].toUpperCase() + str.slice(1);

const strToUpperCase = (str) => str.toUpperCase();

const compareLetters = (str, letter) => {
  if (typeof str !== "string" || typeof letter !== "string") {
    return "Both item must be of type string";
  }

  if (str[str.length - 1] === letter) {
    return true;
  } else {
    return false;
  }
};

export { firstElementOfArr, allWithoutTheLast, lastItem, allWithoutTheFirst, removeItem, uniqueItems, sum, randomNum, firstLetterToUpperCase, strToUpperCase, compareLetters };
