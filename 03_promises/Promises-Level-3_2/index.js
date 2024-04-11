const randomNumber = (time) => {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 1000 + 1);
    setTimeout(() => {
      typeof number === "number" ? resolve(number) : reject(new Error("Oops!.. Not a Number!"));
    }, time);
  });
};

Promise.all([randomNumber(3000), randomNumber(3000), randomNumber(3000), randomNumber(3000)])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
