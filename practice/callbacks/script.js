// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

// function toggleMe() {
//     let a = true;
//     return function toggle () {
//         return a = !a;
//     }
// }

// let toggler = toggleMe();

// console.log(toggler());
// console.log(toggler());
// console.log(toggler());
// console.log(toggler());

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 10, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 10, то функция считает
// количество от этого числа до 0

// function funcCounter(startNum) {
//   let counter = 10;
  
//   return function getCount() {
    
//     if ((start === 0)) {
//       return startNum;
//     } else if (counter > startNum) {
//       return startNum++;
//     } else if (counter < startNum) {
//       return startNum--;
//     }
//   };
// }

// let count = funcCounter();

// console.log(count(12));


// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

// classNameEditor('active', true) // добавляем класс ====>>>>> 'active'
// classNameEditor('test', true) // =====>>>>> 'active test'
// classNameEditor('btn', true) // =====>>>>> 'active test btn'
// classNameEditor('test', false) // =====>>>>> 'active btn'
// classNameEditor('blabla', false) // =====>>>>> 'active btn'

// .split()
// .join()


function classNameEditor (str, add) {
    let className = 'blabla asdasd test';
    return function () {
        let classArr = className.split(' ');
        if (add) { 
            classArr.push(str);            
        } else {
            classArr.splice(classArr.indexOf(str), 1)
        }
        className = classArr.join(' ');
        return className;
    }
}

let nameEditor = classNameEditor();

console.log(nameEditor('active', true));
console.log(nameEditor('test', true));
console.log(nameEditor('btn', true));
console.log(nameEditor('test', false));


// 4. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.

// arr.map(() => {})
// map(arr, () => {})

// 5. Создать функцию sumTo, которая принимает два числа и callback.
// Задача функции складывать 2 числа, а задача callback’a заставлять
// функцию sumTo возвращать результат в виде числа, строки или
// логического типа данных.

// function toString (val) { return val + ''; }

// sumTo(2,3, someCallback)

// 6. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.

// 7. Создать объект
// kurochka = {
// 	name: 'Ryaba',
// 	isAlive: true,
// 	isZazharena: false
// }

// измените объект так, чтобы после изменения поля isZazharena = true, поле isAlive автоматически стало false,
// поле isAlive должно быть доступно только для чтения. После изменения isZazharena - это поле должно стать доступно только для чтения
