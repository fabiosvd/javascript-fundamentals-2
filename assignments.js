'use strict';
// LECTURE: Functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const countryOne = describeCountry('Finland', 6, 'Helsinki');
const countryTwo = describeCountry('Brazil', 211, 'Brasilia');
const countryThree = describeCountry('Finland', 6, 'Helsinki');
console.log(countryOne);
console.log(countryTwo);

// LECTURE: Function Declarations vs. Expressions

// Function Declarations

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const brazilPerc1 = percentageOfWorld1(200);
const finlandPerc1 = percentageOfWorld1(6);
const countryPerce1 = percentageOfWorld1(6);

console.log(brazilPerc1);
console.log(finlandPerc1);

// Function Expressions

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const brazilPerc2 = percentageOfWorld2(200);
const finlandPerc2 = percentageOfWorld2(6);
const countryPerc2 = percentageOfWorld2(6);

console.log(brazilPerc2);
console.log(finlandPerc2);

// LECTURE: Functions Calling Other Functions

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
  return console.log(description);
}

describePopulation('Brazil', 211);
describePopulation('Finland', 6);

// LECTURE: Introduction to Arrays
