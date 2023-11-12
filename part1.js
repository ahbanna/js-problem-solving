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

// Problem: 3 how to get 6 digit code with letter and number
function generateRandomCode() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  console.log(characters.length);

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
}

const sixDigitCode = generateRandomCode();
console.log(sixDigitCode);

// Problem: 4 (Sort Names in an Alphabetical Order)
const students = ["Hasan", "Arif", "Banna"];
const sortedStudents = [...students].sort();

console.log(`Original array: ${students}`);
console.log(`Sorted array: ${sortedStudents}`);
console.log("Original array:", students);
console.log("Sorted array:", sortedStudents);
