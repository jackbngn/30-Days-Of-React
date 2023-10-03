// Exercise level 1

// 1. Create an empty object called dog

const dog = {};

// 2. Print the dog object on the console
console.log(dog);

// 3. Add name, legs, color, age, and bark properties for the dog object. The basrk properties is a mthod which return woof woof

dog.name = 'Henny';
dog.legs = 4;
dog.color = 'black';
dog.bark = function () {
	return 'woof woof';
};

// 4. GEt name, legs, color, age, and bark value from the dog object

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.bark());

// 5. Set new properties the dog object: breed, getDogInfo

dog.breed = 'German Shepard';
dog.getDogInfo = function () {
	return `Dog name: ${this.name}\nLegs: ${this.legs}\nColor: ${this.color}\nBreed: ${this.breed}`;
};

console.log(dog.getDogInfo());

// Exercise level 2
const users = {
	Alex: {
		email: 'alex@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript'],
		age: 20,
		isLoggedIn: false,
		points: 30,
	},
	Asab: {
		email: 'asab@asab.com',
		skills: [
			'HTML',
			'CSS',
			'JavaScript',
			'Redux',
			'MongoDB',
			'Express',
			'React',
			'Node',
		],
		age: 25,
		isLoggedIn: false,
		points: 50,
	},
	Brook: {
		email: 'daniel@daniel.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
		age: 30,
		isLoggedIn: true,
		points: 50,
	},
	Daniel: {
		email: 'daniel@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	John: {
		email: 'john@john.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
		age: 20,
		isLoggedIn: true,
		points: 50,
	},
	Thomas: {
		email: 'thomas@thomas.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React'],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	Paul: {
		email: 'paul@paul.com',
		skills: [
			'HTML',
			'CSS',
			'JavaScript',
			'MongoDB',
			'Express',
			'React',
			'Node',
		],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
};

// 1. Find the person who has many skills in the user's object
// initialize skilled user and max skills
let skilledUser;
let maxSkills = 0;

// for in loop for users object to iterate through each users
for (const username in users) {
	// setting each user's name to user
	const user = users[username];

	// counting the user's skills
	const skillsCount = user.skills.length;

	// if the skill count is higher than our maxskills then we set maxskills to that user's skills count, then setting that user to the most skilled
	if (skillsCount > maxSkills) {
		maxSkills = skillsCount;
		skilledUser = username;
	}
}

if (skilledUser) {
	console.log(
		`The person with the most skills is ${skilledUser} with ${maxSkills} skills`,
	);
} else {
	console.log('No users found');
}

// 2. Count looged in users having greater than equal to 50 points from the following object
// Initilize count and loggedIn
let count = 0;
let loggedIn = 0;

// for in loop for all users in the users object
for (const user in users) {
	// settting the user's name to username
	const username = users[user];
	// check if the user is logged in if so increment our loggedIn count
	if (username.isLoggedIn) {
		loggedIn++;
		// if the user have 50 or more points then we increment our count
		if (username.points >= 50) {
			count++;
		}
	}
}

console.log(`Total logged in users: ${loggedIn}`);
console.log(`Total user's with 50 or more points: ${count}`);

// 3. Find people who are MERN stack developer from the users object

// MERN stack

const mern = ['MongoDB', 'Express', 'Node', 'React'];

for (const username in users) {
	const user = users[username];

	let hasMern = true;

	for (const mernStack of mern) {
		if (!user.skills.includes(mernStack)) {
			hasMern = false;
			break;
		}
	}
	if (hasMern) {
		console.log(`${username} is a MERN stack developers`);
	}
}

// 5. Get all keys or properties of user object
const allKeys = [];
for (const username in users) {
	const user = users[username];
	const key = Object.keys(user);
	allKeys.push(...key);
}

const uniqueKeys = [...new Set(allKeys)];

console.log(uniqueKeys);

// 6. Get all the values of users object

const values = Object.values(users);
console.log(values);

const personalAccount = {
	firstName: 'Jack',
	lastName: 'Nguyen',
	incomes: 60000,
	expenseProperty: 100000,
	totalIncome: 200000,
};
