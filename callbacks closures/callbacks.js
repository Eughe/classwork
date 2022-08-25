// callback
// hof


// function func (a, cb) {
//     return 2 + cb(a);
// }


// function square (a) {
//     return a * a;
// }


// closure

// let a = 2;

// // lexical environment
// const foo = (b) => {
//     return  a + b;
// };


// const res = foo(5);



// const arr = [
//     {a: 3},
//     {a: 5}
// ];

// let obj = arr[0];
// obj = null;

// console.log(arr[0]);


// let a = 0;

// function foo () {
//     return ++a;
// }


// let a = 1;

// function foo () {
//     a = a + 1;
//     return a;
// }

// function bar (cb) {
//     let a = 10;

//     return cb();
// }

// console.log( bar(foo) );




// curry paritally applied hof


// function bla () {
//     let a = 4;

//     return function ooo ( ) {
//         a = a + 1;
//         return a;
//     }
// }


// const ooo = bla();
// const hhh = bla();


// console.log(ooo())
// console.log(hhh())
// console.log(ooo())

// curry, memoizing

// const add = (a,b,c) => {
//     return a + b + c;
// }

// add(2, 5, 7);
// add(2)(5)(7);


// const add = a => b => c => d => a + b + c + d;

// const onePlus = add(1);
// const onePLusTwoPlus = onePlus(2);
// const res = onePLusTwoPlus(3);

// console.log( add(1)(2)(3) )



// paritally applied

// const add = (a,b,c) => {
//     return a + b + c;
// };


// add(1,2)(3);

// HIGHER ORDER FUNCTION*****

// function add (a, b) {
//     return a + b;
// }

// function addWithLogging (a, b) {
//     console.log(a,b);
//     return add(a,b);
// }

function wrapWithLogger (add) {

    return function (...args) {
        console.log(...args);
        return add(...args);
    };
};

function sub (a, b) {
    return a - b;
}

function replaceLast (arr, str, length) {
    arr.pop()
    arr.push(str);
    arr.length = length;
    return arr;
}

const addLogger = wrapWithLogger(add);
const subLogger = wrapWithLogger(sub);
const replaceLastLogger = wrapWithLogger(replaceLast)

// console.log(addLogger(2,3));



console.log(replaceLastLogger(['a', 'b', 'c'], 'd', 20));

console.log(replaceLast(['x', 'c', 'n'], 'u', 10));


