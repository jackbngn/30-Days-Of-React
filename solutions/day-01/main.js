// 1. Create a seperate countries.js and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both files in main.js file
// Import the countries array from countries.js
import countries from './countries.js';

// Import the webTechs array from web_techs.js
import webTechs from './web_techs.js';

// Now you can use the arrays in your main.js file
console.log('Countries:', countries);
console.log('Web Technologies:', webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
	'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.replace(/[,.]/g, '').split(' ');
console.log(words);
console.log(words.length);

// 3. In the following shoppoing card add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add "Meat" in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
// add Sugar at the end of your shopping cart if it has not been already added
shoppingCart.push('Sugar');
// remove "Honey" if you are allergic to honey
shoppingCart.splice(4, 1);
// modify Tea to "Grean Tea"
shoppingCart[3] = 'Grean Tea';
console.log(shoppingCart);

// 4. In countries array check if "Ethiopia" exist in the array if it exists print "ETHIOPIA". If it does not exist add to the countries list.

function checkArray(country) {
	const upperCase = country.charAt(0).toUpperCase();
	const restOfWord = country.slice(1);
	const capitalized = upperCase + restOfWord;

	if (countries.includes(capitalized)) {
		return console.log(`This country ${capitalized} is in the array`);
	} else {
		console.log(
			`This country ${capitalized} is not in the array and will be added.`,
		);
		countries.push(capitalized);
	}
}
checkArray('USA');
checkArray('Cananda');
checkArray('ethiopia');
console.log(countries);

// 5. In the WebTechs array check if Sass exist in the array if it exists print 'Sass is a css preprocess'. If it does not exist add Sass to the array and print the array
function checkWebTechArray(tech) {
	if (webTechs.includes(tech)) {
		console.log('Sass is a css preprocess');
	} else {
		webTechs.push(tech);
		console.log(webTechs);
	}
}

checkWebTechArray('Sass');

// 6. Concatenate the following two variables and store it in a fullstack variable
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

// Exercise 3

// 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedAges = ages.sort();
console.log(sortedAges);

//min age
const minAge = sortedAges[0];
//max age
const maxAge = sortedAges[sortedAges.length - 1];

console.log(`The min age: ${minAge} \nThe max age: ${maxAge}`);

//The median

if (sortedAges.length % 2 === 0) {
	const middleIndex = Math.floor(sortedAges.length / 2);
	const median = (sortedAges[middleIndex] + sortedAges[middleIndex - 1]) / 2;
	console.log(median);
} else {
	const middleIndex = Math.floor(sortedAges.length / 2);
	console.log(sortedAges[middleIndex]);
}

// average
let sum = 0;
for (let i = 0; i < ages.length; i++) {
	sum += ages[i];
	console.log(sum);
}
const average = sum / ages.length;
console.log(average);

const minDifference = Math.abs(minAge - average);
const maxDifference = Math.abs(maxAge - average);
// Compare the values
if (minDifference > maxDifference) {
	console.log('The absolute difference between min and average is greater.');
} else if (maxDifference > minDifference) {
	console.log('The absolute difference between max and average is greater.');
} else {
	console.log(
		'The absolute differences between min and average, and max and average, are equal.',
	);
}

// 2. Slice the first ten countries from the countries array
const sliceCountry = countries.slice(10);
console.log(sliceCountry);

// 3. Find the middle country in the countries array

const middleCountry = countries[Math.floor(countries.length / 2)];
console.log(middleCountry);

// 4. Divide the countries array into two equal array if it is even. If countries array is not even, one more country for the first half

let firstHalf;
let secondHalf;

if (countries.length % 2 === 0) {
	const midpoint = countries.length / 2;
	firstHalf = countries.slice(0, midpoint);
	secondHalf = countries.slice(midpoint);
} else {
	const midpoint = Math.floor(countries.length / 2);
	firstHalf = countries.slice(0, midpoint + 1);
	secondHalf = countries.slice(midpoint + 1);
}
console.log(firstHalf);
console.log(secondHalf);
