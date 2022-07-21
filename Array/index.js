

// const team = [
//     'John',
//     'Valerckik',
//     'Vovanchik',
//     'Olezha',
//     'Glebushka',
//     'Messi'
//     ];

// const player = team[2];
    
// team[0] = 'Evlampi'

// console.log(team);

// for (let i = 0; i < team.length; i++) {
//     console.log(`Mr.${team[i]}`)
// }


// 1. Дан массив 10 чисел. Вывести в консоль сумму всех элементов массива.

// const numbers = [23, 546, 84, 81, 324, 34, 70, 12, 7, 88];
// let sumNumbers = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sumNumbers = sumNumbers + numbers[i];
// }

// console.log(sumNumbers);

// 2. Найти среднее арифметическое всех элементов массива, которые стоят на чётных местах (0, 2, 4...)

// const numbers = [23, 546, 84, 81, 324, 34, 70, 12, 7, 88];
// let sumNumbers = 0;
// let counter;
// let average;

// for (let i = 0; i < numbers.length; i += 2) {
//     sumNumbers = sumNumbers + numbers[i]; 
//     counter = i/2 + 1;  
// }

// average = sumNumbers / counter;
// console.log(average);

// 3. Дан исходный массив [2, -65, 7, -1, 26, 48, -93, 58, 9]
// создать новый массив, элементы которого противоположны по знакам исходного

// const numbers = [2, -65, 7, -1, 26, 48, -93, 58, 9];
// const numbersNegative = [];

// for (let i = 0; i < numbers.length; i++) {
//     numbersNegative[i] = - numbers[i];
// }

// console.log(numbersNegative);


// 4. Создать пустой массив длиной 10 и автоматически заполнить массив
// нулями и единицами, начиная с единицы


// let numbers = new Array(10);

// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 === 0) {
            // numbers[i] = 1;
//     } else {
            // numbers[i] = 0;
    // }
// }

// console.log(numbers);

// 5. Заполнить массив последовательными нечётными числами (длина 10)

// let numbers = new Array(10);
// let oddNumber = 1;

// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = oddNumber;
//     oddNumber += 2;
//     } 

// console.log(numbers);

// 6. С помощью цикла содать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)

// let numbers = new Array(10);

// for (let i = 0; i < numbers.length; i++) {
//      numbers[i] =  i**2;
//      } 

// console.log(numbers);


// 7. Дан массив 10 числе. Вывести в консоль количество чётных
// элементов из этого массива

// const numbers = [23, 546, 84, 81, 324, 34, 70, 12, 7, 88];
// let evenNumbers = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//     evenNumbers = ++evenNumbers;
//     }
// }

// console.log(evenNumbers);


// 8. дан массив 10 чисел. вывести наибольшее число из этого массива

// const numbers = [23, 546, 84, 81, 324, 34, 70, 1002, 7, 88];
// let maxNumber = numbers[0];


// for (let i = 0; i < numbers.length; i++) {
//     if (maxNumber < numbers[i]) {
//     maxNumber = numbers[i];
//     }
// }

// console.log(maxNumber);


// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего 
// не больше чем на 10%




// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива
// 11. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// пользователь вводит число n, вывести в консоль элемент массива
// который наиболее близок к n (если таких элементов несколько, вывести несколько)