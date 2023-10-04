// Exercise level 1

// 1.Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name

function fullName(firstName, lastName) {
	return `${firstName} ${lastName}`;
}

console.log(fullName('Jack', 'Nguyen'));

// 2. Declare a function addNumbers and it takes two parameters and it returns sum.

function addNumbers(num1, num2) {
	return num1 + num2;
}

console.log(addNumbers(1, 3));

// 3. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates_areaOfCircle

areaOfCircle = (radius) => {
	return Math.PI * radius * radius;
};

console.log(areaOfCircle(20));

// 4. Temperature in oC can be converted to oF using this formula: oF = (oC * 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenhiet.

convertCelciusToFahrenhiet = (celsius) => {
	return (celsius * 9) / 5 + 32;
};

console.log(convertCelciusToFahrenhiet(20));

// 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function calculateBmi(weight, height) {
	let bmi = Math.floor((weight / (height * height)) * 703);
	console.log(bmi);

	if (bmi < 18.5) {
		console.log(
			`You are underweight at ${weight}Ibs and height of ${height}in`,
		);
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		console.log(
			`You are normal weight at ${weight}Ibs and height of ${height}in`,
		);
	} else if (bmi >= 25 && bmi <= 29.9) {
		console.log(`You are overweight at ${weight}Ibs and height of ${height}in`);
	} else if (bmi >= 30) {
		console.log(`You are obese at ${weight}Ibs and height of ${height}in`);
	}
}

calculateBmi(160, 69);

// 6. Write a function called checkSeason, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer

const checkSeason = (month) => {
	switch (month) {
		case 'December':
		case 'January':
		case 'Feburary':
			console.log(`The season for ${month} is Winter.`);
			break;
		case 'March':
		case 'Apirl':
		case 'May':
			console.log(`The season for ${month} is Spring.`);
			break;
		case 'June':
		case 'July':
		case 'August':
			console.log(`The season for ${month} is Summer`);
			break;
		case 'September':
		case 'October':
		case 'November':
			console.log(`The season for ${month} is Autumn`);
			break;
		default:
			console.log('Invalid month');
	}
};

checkSeason('January');
