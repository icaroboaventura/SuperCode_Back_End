import { names, numbers } from "./data.js";
import { firstElementOfArr, allWithoutTheLast, lastItem, allWithoutTheFirst, removeItem, uniqueItems, sum, randomNum, firstLetterToUpperCase, strToUpperCase, compareLetters } from "./functions.js";

console.log(firstElementOfArr(names));
console.log(firstElementOfArr(numbers));

console.log(allWithoutTheLast(names));
console.log(allWithoutTheLast(numbers));

console.log(lastItem(names).toString());
console.log(Number(lastItem(numbers).toString()));

console.log(allWithoutTheFirst(names));
console.log(allWithoutTheFirst(numbers));

console.log(removeItem(names, "Christian"));
console.log(removeItem(names, "Peter"));
console.log(removeItem(numbers, 1));

console.log(uniqueItems(numbers));

console.log(sum(numbers));
console.log(sum(names));

console.log(randomNum(1, 5));
console.log(randomNum(7, 8));

console.log(firstLetterToUpperCase("ahmed"));
console.log(firstLetterToUpperCase("lisa"));

console.log(strToUpperCase("ahmed"));
console.log(strToUpperCase("lisa"));

console.log(compareLetters("Thomas", "s"));
console.log(compareLetters("Thomas", "t"));
console.log(compareLetters("Thomas", 5));
