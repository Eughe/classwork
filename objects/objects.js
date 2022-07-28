// const person = {
//   name: "John",
//   age: 23,
//   city: "Gomel",
//   isProgrammer: true,
//   stack: ['HTML', 'CSS', 'JS'],
//   size: {
//     width: 23,
//     height: 200,
//     weight: 100,
//     }
// };

// console.log( person.age );
// console.log( person['city'] );

// person.name = 'Valerchik';
// person.lastname = 'Ivanov';

// 'isProgrammer' in person;
// person.hasOwnProperty('isProgrammer');

// delete person.age;

// const person2 = {};

// for (let key in person) {
//   person2[key] = person[key];
// }



// rest, spread, detructuring


const str = 'city';

const person = {
    name: 'Valerchik',
    [str]: 'Gomel'
}
