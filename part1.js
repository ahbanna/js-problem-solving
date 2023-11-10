// Problem 1: Get random number in a range?
const getRandomNumberInARange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(
  `The random number in a range is: ${getRandomNumberInARange(1, 6)}`
);

// Problem 2: How to get 6 digit random number?
const getSixDigitRandomNumber = () => {
  return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
};
console.log(`The six digit random number is ${getSixDigitRandomNumber()}`);

// Problem: how to get 6 digit code with letter and number
function generateRandomCode() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
}

const sixDigitCode = generateRandomCode();
console.log(sixDigitCode);
