

// const arr = [23, 4, 56, 43, 0, 54, -23, 34, 23];
// const arr2 = ['one', 'two', 'three'];

// const resultArr = arr.concat(arr2);

// const resultArr = arr2.push(100);
// const resultArr = arr2.pop();
// const resultArr = arr2.shift();
// const resultArr = arr2.unshift();
// arr2.indexOf('two');
// const resultArr = arr2.join(' ');
// const str = 'I love itstep';

// str.split('v');


// const arr2 = ['one', 'two', 'three', 'two', 'zzz', 'xxx', 'ccc', 'vvv'];
// const arr4 = ['1', '51', '2', '56', '89', '45', '4', '5'];


// rest, spread, destructuring

// console.log( Math.max(...arr4) );
// const arr5 = [20, ...arr2];

// const arr2 = ['one', 'two', 'three', 'two', 'zzz', 'xxx', 'ccc', 'vvv'];
// const one = arr2[0];
// const [ a, b, c ] = arr2;

// const [ a, b, ...newArr] = arr2


// Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let userName = prompt( 'Введите Ваше имя');

// for (let i = 0; i < people1.length; i++) {
//     if (userName === people1[i]) {
//         people2.push(userName);
//         break;
//     }    
// }

// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let userName = prompt( 'Введите Ваше имя');

// for (let i = 0; i < people1.length; i++) {
//     if (userName === people2[i]) {
//         people2.splice(i, 1);
//     }    
// }


// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let newArray = [];

// for (let i = 0; i < people1.length; i++) {
//      for (let j = 0; j < people2.length; j++) {
//         if (people1[i] === people2[j]) {
//             newArray.push(people1[i]);
//             } 
//         }  
// }


// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.

// let people1 = ['Samuel','Jack','Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo','Albert','Owen','Oliver','Ethan','Thomas'];
// let newArray = people2.concat();

// for (let i = 0; i < people1.length; i++) {
//         if (people2.indexOf(people1[i]) === -1) {
//             newArray.push(people1[i]); 
//         }  
// }


// 5. Отсортируйте получившийся массив по алфавиту

// newArray.sort();
// console.log(newArray);


// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

// let people3 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let newArray = people3.splice(2, 3);

// console.log(newArray);



// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива



// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"

// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

// 5. Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]

// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)

