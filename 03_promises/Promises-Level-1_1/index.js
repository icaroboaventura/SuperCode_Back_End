const doubleNumber = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof number === "number" ? resolve(number * 2) : reject(new Error("Oops!.. Not a Number!"));
    }, 2000);
  });
};

doubleNumber(14)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
