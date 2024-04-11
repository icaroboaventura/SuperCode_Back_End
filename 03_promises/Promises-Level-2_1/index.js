const randomNumber = () => {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10 + 1);
    number < 6 ? resolve(number) : reject(number);
  });
};

randomNumber(14)
  .then((result) => console.log(`Resolved: ${result}`))
  .catch((result) => console.log(`Rejected: ${result}`));
