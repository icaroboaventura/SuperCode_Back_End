const multiplyNumber = (number) => {
  return new Promise((resolve, reject) => {
    typeof number === "number" ? resolve(number * number) : reject(new Error("Oops!.. Not a Number!"));
  });
};

const multiplyAgain = (number) => {
  multiplyNumber(number)
    .then((result) => {
      console.log(result);
      return multiplyNumber(result);
    })
    .then((result) => {
      console.log(result);
      return multiplyNumber(result);
    })
    .then((result) => {
      console.log(result);
      return multiplyNumber(result);
    })
    .catch((error) => console.log(`Rejected: ${error}`));
};

multiplyAgain(5);
