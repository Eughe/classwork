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

// const programmer = {
//     userName: 'John',
//     age: 23,
//     brain: true,
//     stack: ['HTML', 'CSS'],
// };

// function Person (userName, age) {
//     this.userName = userName,
//     this.age = age,
//     this.brain = true
// };

// Person.prototype.constitution = 'bla bla bla';

// const person = new Person('John', 23);
// const person2 = new Person(Valerchik, 51);

// console.log(person);
// console.log(new Person(Valerchik, 51));



// function Person (userName, age) {
//     this.userName = userName,
//     this.age = age,
//     this.hasBrain = true
// };

// Person.prototype.run = function () {
//     console.log(`${this.userName} runs`);
// };

// function Programmer (stack, ...args) {
//     Person.apply(this, args);
//     this.stack = stack;
// };

// Programmer.prototype = Object.create(Person.prototype);
// Programmer.prototype.code = function () {
//     console.log((`${this.userName} codes`);)
// };

// const p1 = new Programmer(['HTML', 'CSS'], 'John', 61);
// const person = new Person ('Valerchik', 12);

// p1.run();



// class Person{
//     hasBrain = true;
//     #age = 0;
//     #creditPayments = [2, 6, 3, 8, 3, 7, 2];
    
//     constructor (userName) {
//         this.userName = userName;
//     }

//     #calculateAverage () {
//         return this.#creditPayments.reduce((sum, item) => sum + item)/this.#creditPayments.length;
//     }

//     showAveragePayment() {
//         console.log(this.#calculateAverage())
//     }

//     set age (val) {
//         if (val >0 && val < 100) {
//             this.#age = val;
//         }
//     }
//     get age () {
//         return this.#age
//     }

//     run () {
//         console.log(`${this.userName} runs`);
//     }
// };

// const p1 = new Person('Valerchik');
// p1.age = 25;

// console.log(p1);

class Person{
        hasBrain = true;
        #age = 0;
        #creditPayments = [2, 6, 3, 8, 3, 7, 2];
        
        constructor (userName) {
            this.userName = userName;
        }
    
        #calculateAverage () {
            return this.#creditPayments.reduce((sum, item) => sum + item)/this.#creditPayments.length;
        }
    
        showAveragePayment() {
            console.log(this.#calculateAverage())
        }
    
        set age (val) {
            if (val >0 && val < 100) {
                this.#age = val;
            }
        }
        get age () {
            return this.#age
        }
    
        run () {
            console.log(`${this.userName} runs`);
        }
    };

class Programmer extends Person {
    constructor (stack, ...args) {
        super(...args);
        this.stack = stack;
    }
        code () {
            console.log((`${this.userName} codes`));
        };
};

class JSProgrammer extends Programmer {
    smoozie = true;

    static getSmoozie (frontender) {
        frontender.smoozie = true;
    }

    run () {
        console.log(`In a fashion way`);
        super.run();
    }
}

const jsp = new JSProgrammer (['CSS', 'JS'], 'Oleg');

jsp.smoozie = false;
JSProgrammer.getSmoozie(jsp);

console.log(jsp)

