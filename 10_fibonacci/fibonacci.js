const fibonacci = function (n) {
  let num = parseInt(n);
  if (num < 0) {
    return "OOPS";
  } else if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
