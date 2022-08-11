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


function fly (dest, speed) {
    console.log(`${this.name} flies to ${dest} with ${speed}km/h speed`)
}

const bird = {
    name: 'kesha',
    fly
}

const ezh = {
    name: 'senya',
    zhrat: eat,
};

// fly.call(ezh, 'north', 200);
fly.apply(ezh, ['east', 500]);

