// 1. Declare an empty array
const arr = [];

// 2. Declare an array with more than 5 numbers of elements
const arr1 = ['Jack', 'Briana', 24, 23, true];

// 3. Find the length of your array

console.log(arr1.length); // 5

// 4 . Gete the first item, the middle item and the last item of the array
// first item in array
const firstItem = arr1[0];

// middle item in array
const middleItem = arr1[Math.floor(arr1.length / 2)];

//last item in array
const lastItem = arr1[arr1.length - 1];

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

// Array of mixed data types
const mixedDataTypes = ['Jack', 1, true, null, 'JavaScript', 8];

//the legnth of the array
mixedDataTypes.length; //6

// 6. Declare an array variable name itCompanies and assign inital values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.

// Array itCompanies
const itCompanies = [
	'Facebook',
	'Google',
	'Microsoft',
	'Apple',
	'IBM',
	'Oracle',
	'Amazon',
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
// first company
console.log(itCompanies[0]);

// middle
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);

// Last
console.log(itCompanies[itCompanies.length - 1]);

// 10. Print out each company

//for loop
for (let i = 0; i < itCompanies.length; i++) {
	console.log(itCompanies[i]);
}

// for each
itCompanies.forEach(function (company) {
	console.log(company);
});

// for...of loop
for (const company of itCompanies) {
	console.log(company);
}

// 11. Change each company name to uppercased one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
	const upperCased = itCompanies[i].toUpperCase();
	console.log(upperCased);
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

console.log(itCompanies.toString());

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

function checkIfExist(company) {
	const upperCased =
		company.charAt(0).toUpperCase() + company.slice(1).toLowerCase();
	const slice = company.slice(1);
	console.log(slice);

	if (itCompanies.includes(upperCased) === true) {
		const companyIndex = itCompanies.indexOf(upperCased);
		console.log(`${itCompanies[companyIndex]} is in the array!`);
	} else {
		console.log(`This ${company} was not found`);
	}
}

checkIfExist('apple');
checkIfExist('netflix');

// 14. Filter out companies which have more than one 'o' without the filter method

const filterCompany = [];

for (let i = 0; i < itCompanies.length; i++) {
	const companyName = itCompanies[i];
	let count = 0;
	console.log(companyName);

	for (let j = 0; j < companyName.length; j++) {
		console.log(companyName[j]);
		if (companyName[j].toLowerCase() === 'o') {
			count++;
		}

		if (count > 1) {
			break;
		}
	}
	if (count <= 1) {
		filterCompany.push(companyName);
	}
}
console.log(filterCompany);
