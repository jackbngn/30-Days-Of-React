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
