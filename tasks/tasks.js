// Создать функцию которая принимает массив футболистов
// [
// { name:"Ronaldo", team:"Juventus"}, 
// { name:"Messi", team:"Barcelona"},
// { name:"Pedro", team:"Chelsea" },
// { name:"Rico", team:"PSG"},
// { name:"Suarez", team:"Barcelona" },
// { name:"Buffon", team:"Juventus" },
// { name:"Zuma", team:"Chelsea" },
// { name:"Gonsalo", team:"Juventus"}
// ]
// Функция должна "пробегать" по массиву и выяснять какие футболисты играют в одинаковых командах.
// функция должна возвращать двумерный массив футболистов сформированный по принципу: 1 массив - 1 команда
// пример возвращаемого массива:

// [
// 	[
// 		{
// 		name:"Messi",
// 		team:"Barcelona"
// 		},
// 		{
// 		name:"Suarez",
// 		team:"Barcelona"
// 		}

// 	],
// 	[
// 		{
// 		name:"Ronaldo",
// 		team:"Juventus"
// 		},
// 		{
// 		name:"Buffon",
// 		team:"Juventus"
// 		},
// 		{
// 		name:"Gonsalo",
// 		team:"Juventus"
// 		}
// 	],
// 	[
// 		{
// 		name:"Pedro",
// 		team:"Chelsea"
// 		},
// 		{
// 		name:"Zuma",
// 		team:"Chelsea"
// 		}
// 	],
// 	[
// 		{
// 		name:"Rico",
// 		team:"PSG"
// 		}
// 	]
// ]

// let teams = [];

// function getTeams (players) {
//     for (let i = 0; i < players.length; i++) {
//         const element = array[i];

//     }
// }


// 2. 
// const car = {
//     model: 'tesla',
//     adress: {
//         country: {
//             city: {
//                 name: 'gomel',
//                 street: {
//                     name: 'pushkina',
//                     numbre: 2
//                 }
//             }
//         },
//         region: ['gomel','brest', 'minsk']
//     },
//     specs: {
//         price: {
//             low: 2000,
//             mid: 3000,
//             hight: 5000
//         },
//         engine: {
//             power: 400,
//             lowPower: 100
//         }
//     }
// };

// const car2 = {
//     model: 'lada',
//     adress: {
//         country: {
//             city: {
//                 name: 'gomel',
//                 street: {
//                     name: 'pushkina',
//                     numbre: 2
//                 }
//             }
//         },
//         region: ['minsk','grodno', 'eremino']
//     },
//     specs: {
//         price: {
//             low: 100,
//             mid: 2000,
//             hight: 2500
//         },
//         engine: {
//             power: 200,
//             lowPower: 100
//         }
//     }
// };

// const car3 = {
//     model: 'bmw',
//     adress: {
//         country: {
//             city: {
//                 name: 'boston',
//                 street: {
//                     name: 'pushkina',
//                     numbre: 2
//                 }
//             }
//         },
//         region: ['new york', 'berlin', 'bacelona']
//     },
//     specs: {
//         price: {
//             low: 100000,
//             mid: 150000,
//             hight: 200000
//         },
//         engine: {
//             power: 1000,
//             lowPower: 500
//         }
//     }
// };


// const arrCars = [car, car2, car3];



// 2.1 отфильтровать авто так чтобы в результирующий массив вошли
// только машины из региона гомель
// 2.2 просуммировать общую стоимость авто по наивысшей цене
// 2.3 найти хотя бы одно авто мощность двигателя которого больше 500
// 2.4 найти самое дешевое авто по наименьшей цене







// 2. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

// let namesArr = ['Александр', 'Алексей', 'Антон', 'Афанасий', 'Василий', 'Дмитрий', 'Елисей', 'Иван', 'Митрофан', 'Михаил', 'Семён', 'Никанор', 'Пётр'];

// function getName(name) {
//     return name === 'Семён';
// }
// console.log(namesArr.some(getName));

// 3. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// let numbersArr = [10, 7, 125, 76, 35, 78, 117, 56, 12, 7];

// let sumEven = numbersArr.reduce(function (sum, current) {
//     if (current % 2 === 0) {
//         return sum + current;
//     } else {
//         return sum
//     }
// }, 0);

// console.log(sumEven);

// 4. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

let userNumber = 0;
let numbersArr = [];

for (let i = 0; i < 10; i++) {
    numbersArr[i] = prompt('Введите число');
}

function isNumber(number) {
    return !isNaN(number)
}

console.log(numbersArr);
console.log(numbersArr.every(isNumber));



// 1. Создать объект check с двумя методами:
// .checkNameLength()
// .checkIsAdult()

// создать два объекта person1 и person2 с полями name и age (задать самостоятельно)

// вызвать методы из объекта check и передать в них в качестве контекста
// person1 или person2. 
// checkNameLength() должен возвращать true если поле name у объекта больше 4
// checkIsAdult() должен возвращать true если поле объекта age больше или равно 18

// 2. Создать объект person с полем name и методом eat.
// Создать массив строк food в котором перечисляется любая еда (не менее 4 наименований)
// Метод eat должен принимать строку food с названием еды и возвращать строку вида 
// person.name + " eats " + food
// Используя setTimeout или setInterval запустите метод eat объекта person раз в секунду, передавая при этом каждый раз следующее название еды из массива.

// ==============================================================================
// Доп задания

// 1

// Дана строка
// var str = ‘Мама мыла раму’;
// Написать функцию toWash(str, thing);
// Где str - это строка в которой надо поменять последнее
// слово, а thing - это, то самое слово которое надо вставить
// в конец строки.
// Функция должна возвращать строку.
// Например:
// document.write( toWash(str, ’машину’) );
// // ‘Мама мыла машину’
// document.write( toWash(str, ’рябину’) );
// // ‘Мама мыла рябину’
// document.write( toWash(str, ‘картину’) );
// // ‘Мама мыла картину’


// 2.
// . Взять массив футболистов из задачи 1. Напишите функцию
// addAbility(array), которая добавляет к каждому
// объекту массива функцию run(), при запуске которой
// выводится сообщение (“ИМЯ_ФУТБОЛИСТА is
// running”)








