// const person = {
//     userName: 'John',
//     age: 23,
//     brain: true
// };

// const person2 = {
//     userName: 'Valerchik',
//     age: 23,
//     brain: true
// };

const programmer = {
    userName: 'John',
    age: 23,
    brain: true,
    stack: ['HTML', 'CSS'],
};

function Person (userName, age) {
    this.userName = userName,
    this.age = age,
    this.brain = true
};

Person.prototype.constitution = 'bla bla bla';

const person = new Person('John', 23);
// const person2 = new Person(Valerchik, 51);

console.log(person);
// console.log(new Person(Valerchik, 51));