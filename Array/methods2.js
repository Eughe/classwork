// arrow functions

// function declaration
// function add (a,b) {
//     return a + b;
// }

// function expression
// const div = function (a, b) {
//     return a / b;
// };

// const persons = [
//     {userName: 'john', age: 42},
//     {userName: 'peter', age: 12},
//     {userName: 'semen', age: 57},
//     {userName: 'oleg', age: 76},
//     {userName: 'smauil', age: 66},
//     {userName: 'innokentij', age: 14}
// ];

// arr.forEach((item, index, mass ) => {});




const arr = [
    "john",
    "valerchik",
    "peter",
    "semen",
    "oleg",
    "samuil",
    "innokentij",
  ];
  
// const result = arr.some((item) => item[0] === 'm');
// const result = arr.every((item) => item.length > 3);
// const result = arr.filter((item) => item.length > 5);


const userToFind = 'valerchik';

const persons = [
    {userName: 'john', age: 42}, 
    {userName: 'peter', age: 12},
    {userName: 'semen', age: 57},
    {userName: 'oleg', age: 76},
    {userName: 'smauil', age: 66},
    {userName: 'innokentij', age: 14}
];

const numbers = [99,2,3,3,12,42,3,42,3];
// [3,42]

// const result = numbers.reduce((acc, number, index, mass) => {
//     if (
//         mass.includes(number, index + 1) &&
//         !acc.includes(number)
//     ) {
//         acc.push(number);
//     }

//     return acc;
// }, []);
// const foo = (acc, number) => !acc.includes(number) ? [...acc, number] : acc;

// const result = numbers.reduce(foo, []);

// console.log(result);

// const foo = (sum, number, index) => {
//     console.log(index);
//     return sum + number;
// };

// const result = numbers.reduce((sum, number, index) => {
//     console.log(index);
//     return sum + number;
// });

// console.log(result);


// let counter = 0;

// const res = persons.sort((person1,person2) => {
//    return person2.age - person1.age;
// });

// const result = persons.includes('oleg');
// const result = persons.findIndex((item) => item.userName === 'oleg');
// result.userName = 'olezha';
// console.log(result);



// if (arr.includes(userToFind)) {
//     console.log(userToFind);
// }







