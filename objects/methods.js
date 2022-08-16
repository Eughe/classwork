//  methods, get, set, property descriptor, 
// this, call, apply, bind, setTimeout, setInterval

// const person = {
//     name: 'John',
//     age: 23,
//     stack: ['CSS', 'HTML', 'JS'],
//     liveInCity: true,
//     run: () => {
//         console.log('person runs');
//     }
// };

// const compose = [
//     () => {},
//     () => {},
//     function () {}
// ];

// function eat (food) {
//         console.log(`${this.name} eats ${food}`);
//     };

// const person = {
//     userName: 'John',
//     age: 23,
//     stack: ['CSS', 'HTML', 'JS'],
//     liveInCity: true,
//     run: () => {
//         console.log('person runs');
//     },
//     walk (destination) {
//         console.log(`${person.name} walks to ${destination}`);
//     },
//     zhrat: eat
// };


// const person2 = {
//     userName: 'Valerchik',
//     age: 53,
//     stack: ['DIG', 'SOW', 'HARVEST'],
//     liveInCity: false,
//     run: () => {
//         console.log('person runs');
//     },
//     walk (destination) {
//         console.log(`${person2.name} walks to ${destination}`);
//     },
//     zhrat: eat
// };

// // this
// person.zhrat('ryabchik');
// person2.zhrat('kolbasa');


// function fly (dest, speed) {
//     console.log(`${this.name} flies to ${dest} with ${speed}km/h speed`)
// }

// const bird = {
//     name: 'kesha',
//     fly
// }

// const ezh = {
//     name: 'senya',
//     zhrat: eat,
// };

// fly.call(ezh, 'north', 200);
// fly.apply(ezh, ['east', 500]);

// const id = setTimeout(function () {
//     console.log('hello');
// }, 2000);

// clearTimeout(id);


// setInterval(() => {
//     console.log('im working!')
// }, 500);



// let count = 0;

// const id = setInterval(() => {
//   console.log(++count);
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
// }, 10000);


// const person = {
//     firstName: 'John',
//     lastName: 'Jhonson',
// };

// person.city = 'Gomel';
// Object.defineProperty(person, 'city', {
//     value: 'Gomel',
//     writable: false,
//     enumerable: true,
//     configurable: true,
// });


// console.log(person);

 
//  const person = {
//     firstName: 'John',
//     lastName: 'Jhonson',
// };

// Object.defineProperty(person, 'fullName', {
//     get () {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set(val){
//         const nameArr = val.split(' ');
//         this.firstName = nameArr[0];
//         this.lastName = nameArr[1];
//     },
//     enumerable: true,
//     configurable: true,
// });

// person.fullName = 'Valerchik Ivanov';

// console.log(person);

// const person = {
//     firstName: 'John',
//     lastName: 'Jhonson',
//     goTo: run
// };

// Object.defineProperty(person, 'goTo', {
//     get () {
//         return run.bind(this);
//     }
// })

// person.goTo();

// setTimeout(run, 1000);



// const person = {
//     firstName: 'John',
//     lastName: 'Jhonson',
//     _age: 0
// };

// Object.defineProperty(person, '_age', {enumerable:false});


// Object.defineProperty(person, 'age', {
//     get(){
//         return this._age;
//     },
//     set(val){
//         if ( 
//             typeof val === 'number' &&
//             val > 0 &&
//             val < 95
//         ) {
//             this._age = val;
//         } else {
//             console.error('VALUE SHOULD BE A NUMBER BALBES!');
//         }
//     },
//     enumerable: true
// }); 


// Object.keys(person).forEach((objKey) => {
//     console.log(objKey)
// })


const person = {
    firstName: 'John',
    lastName: 'Jhonson',
};

// Object.preventExtensions(person);
// Object.isExtensible(person)

// Object.seal(person);
// Object.isSealed(person);

// Object.freeze(person);
// Object.isFrozen(person);
