/**
 * Given an array of book objects in the form { tite: 'Book', author: 'Name'}
 *
 * Return an array of the book titles: ['Book', 'Book2]
 *
 * @param {*} arr
 */
const getTheTitles = function (books) {
  return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
