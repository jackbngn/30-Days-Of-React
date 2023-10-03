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

console.log(areaOfCircle(10));

// 4. Temperature in oC can be converted to oF using this formula: oF = (oC * 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenhiet.

convertCelciusToFahrenhiet = (celcius) => {
	return (celcius * 9) / 5 + 32;
};

console.log(convertCelciusToFahrenhiet(32));
