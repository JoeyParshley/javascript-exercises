/**
 * Given an array of objects representing people with a birth and death year, return the oldest person.
 *
 * returns a person object
 */
const findTheOldest = function (people) {
  let oldest = {};
  let age = 0;
  people.filter((person) => {
    if (!person.yearOfDeath) person.yearOfDeath = 2025;
    if (person.yearOfDeath - person.yearOfBirth > age) {
      age = person.yearOfDeath - person.yearOfBirth;
      oldest = person;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
