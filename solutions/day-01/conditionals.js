// Exercise 1

// 1.Get userInput.charAt(0).toUpperCase() ${userInput.slice(1)}using prompt,("Enter your age"). If use is 18 or older, give feedback: "You are old enough to drive" but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

function getUserAge() {
	const userAge = prompt('Enter your age');
	console.log(userAge);

	const parsedAge = parseInt(userAge);
	console.log(parsedAge);

	if (userAge === null || userAge.trim() === '' || isNaN(parsedAge)) {
		alert('Please enter a number!');
	} else {
		userAge >= 18
			? console.log('You are old enough to drive')
			: console.log(`You need to wait ${18 - userAge} more years to drive.`);
	}
}

// getUserAge();

// 2. Compare the values of myAge and yourAge using if...else. Based on the comparison and log the result to console stating who is oldder (me or you). Use prompt("Enter your age.") to get the age as input.

function comparingAges() {
	const userAge = prompt('Enter your age');
	const myAge = 24;

	if (userAge > myAge) {
		console.log(`You are ${userAge - myAge} years older than me.`);
	} else {
		console.log(`I am ${myAge - userAge} years older than you`);
	}
}

// comparingAges();

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
// - using if else
// - ternary operator

// if else

let a = 4;
let b = 3;

if (a > b) {
	console.log(`a is greater than b`);
} else {
	console.log('b is greater than a');
}

// ternary operator
a > b ? console.log('a is greater than b') : console.log('b is greater than a');

// 4. Even numbers are divisble by 2 an the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num1 = 2;
let num2 = 9;

if (num1 % 2 === 0) {
	console.log(`${num1} is an even number`);
} else {
	console.log(`${num1} is an old number`);
}

num2 % 2 === 0
	? console.log(`${num2} is an even number`)
	: console.log(`${num2} is an old number`);

// Exercise 2

/* 1. Write a code which can give grades to students according to theirs scores
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F 
*/

function studentGrade(grade) {
	if (grade >= 90) {
		console.log('A');
	} else if (grade <= 89 && grade >= 80) {
		console.log('B');
	} else if (grade <= 79 && grade >= 70) {
		console.log('C');
	} else if (grade <= 69 && grade >= 60) {
		console.log('D');
	} else {
		console.log('F');
	}
}

studentGrade(90);
studentGrade(80);
studentGrade(70);
studentGrade(60);
studentGrade(50);
studentGrade(40);

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

function checkSeason(month) {
	const userInput = month.toLowerCase();

	switch (userInput) {
		case 'september':
		case 'october':
		case 'november':
			console.log(
				`${userInput.charAt(0).toUpperCase()}${userInput.slice(
					1,
				)}, the season is Autumn`,
			);
			break;
		case 'december':
		case 'january':
		case 'february':
			console.log(
				`${userInput.charAt(0).toUpperCase()}${userInput.slice(
					1,
				)}, the season is Winter`,
			);
			break;
		case 'march':
		case 'april':
		case 'may':
			console.log(
				`${userInput.charAt(0).toUpperCase()}${userInput.slice(
					1,
				)}, the season is Spring`,
			);
			break;
		case 'june':
		case 'july':
		case 'august':
			console.log(
				`${userInput.charAt(0).toUpperCase()}${userInput.slice(
					1,
				)}, the season is Summer`,
			);
			break;
		default:
			console.log(`Invalid input: ${userInput}`);
	}
}

checkSeason('September');
checkSeason('December');
checkSeason('May');
checkSeason('June');

// 3. Check if a day is weekend day or a working day. Your script will take day as an input

function checkDay(day) {
	const dayLowerCased = day.toLowerCase();
	const userInput =
		dayLowerCased.charAt(0).toUpperCase() + dayLowerCased.slice(1);

	switch (userInput) {
		case 'Saturday':
		case 'Sunday':
			console.log(`${userInput} is a weekend.`);
			break;
		case 'Monday':
		case 'Tuesday':
		case 'Wednesday':
		case 'Thursday':
		case 'Friday':
			console.log(`${userInput} is a working day`);
			break;
		default:
			console.log(`Invalid input: ${userInput}`);
	}
}

checkDay('monDay');
checkDay('Friday');
checkDay('SuNday');
checkDay('Thursday');
checkDay('TUESDAY');

// Exercise 3

// 1. Write a program which tells the number of days in a month.

function getDaysInMonth(month, year) {
	// Input Standardization
	const newMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

	//Stringify the date
	const dateStr = `${newMonth} 1, ${year}`;
	// Create a date object
	const date = new Date(dateStr);
	console.log(date);

	// Set month to the next month
	date.setMonth(date.getMonth() + 1);
	// -1 to go back to the last day of the current month to get how many days in that month
	date.setDate(date.getDate() - 1);

	return console.log(`There is ${date.getDate()} in this ${newMonth}`);
}

const dayInMonth = getDaysInMonth('February', 2024);
