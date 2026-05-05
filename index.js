function helloNpmMaster() {
  console.log("Hello from the master npm demo project! CI/CD is awesome!");
}

function addNumbers(a, b) {
  return a + b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function capitalizeString(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function divideNumbers(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

module.exports = {
  helloNpmMaster,
  addNumbers,
  multiplyNumbers,
  capitalizeString,
  getRandomNumber,
  divideNumbers
};
