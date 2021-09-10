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

const populations = [211, 6, 126, 83];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)

const neighbours = ['Colombia', 'Bolivia', 'Suriname'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Suriname')] = 'Republic of Suriname';
console.log(neighbours);

// LECTURE: Introduction to Objects

const myCountry = {
  country: 'Brazil',
  capital: 'Brasilia',
  language: 'Portuguese',
  population: 211,
  neighbours: ['Colombia', 'Bolivia', 'Peru'],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,
${myCountry.neighbours.length} neighbouring countries and
a capital called ${myCountry.capital} `
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

// LECTURE: Object Methods

const myCountry2 = {
  country: 'Brazil',
  capital: 'Brasilia',
  language: 'Portuguese',
  population: 211,
  neighbours: ['Colombia', 'Bolivia', 'Peru'],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million
    ${this.language}-speaking people,
    ${this.neighbours.length} neighbouring countries and a
    capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    console.log(this.isIsland);
  },
};

myCountry2.describe();
myCountry2.checkIsland();

// LECTURE: Iteration: The for Loop

for (let voter = 0; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100; }

// populations = [211, 6, 126, 83];

let populations2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  populations2.push(perc);
}

console.log(populations2);

// LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

// LECTURE: The while Loop

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
