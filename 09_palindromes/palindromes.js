const palindromes = function (str) {
  noPuncOrSpaces = str.toLowerCase().replace(/[\.,?!\s]/g, "");

  return noPuncOrSpaces == noPuncOrSpaces.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
