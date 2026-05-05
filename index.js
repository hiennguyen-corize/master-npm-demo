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

module.exports = {
  helloNpmMaster,
  addNumbers,
  multiplyNumbers,
  capitalizeString
};
