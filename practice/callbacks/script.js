// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

// function toggleMeMaker () {
//     let toggler = true;
//     return function toggle () {
//         return toggler = !toggler;
//     }
// }

// let toggleMe = toggleMeMaker ();

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

// function funcCountMaker(startNum) {
//   let count = 0;
//   let checkNum = startNum;
//   return function getCount() {

//     if ((checkNum === 0)) {
//       return checkNum;
//     } else if (count < startNum && startNum > 10) {
//       return checkNum--;
//     } else if (count < Infinity && startNum < 10) {
//       return checkNum++;
//     }
//     count++;
//   };
// }

// let funcCounter = funcCountMaker(6);

// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());

/* Преподователь

function countMaker() {
  let count = 0;
  let shouldRaise = true;

  return function (num) {
    if (num) {
      count = num;
      shouldRaise = num < 10;
    }

    if (shouldRaise) {
      return ++count;
    } else {
      return count ? --count : 0;
    }
  };
}
*/

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

// function classNameEditorMaker () {
//     let className = ' ';
//     return function (str, add) {
//         let classArr = className.split(' ');
//         if (add) {
//             classArr.push(str);
//         } else {
//             classArr.splice(classArr.indexOf(str), 1)
//         }
//         className = classArr.join(' ');
//         return className;
//     }
// }

// let classNameEditor = classNameEditorMaker();

// console.log(classNameEditor('active', true));
// console.log(classNameEditor('test', true));
// console.log(classNameEditor('btn', true));
// console.log(classNameEditor('test', false));

// 4. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.

// arr.map(() => {})
// map(arr, () => {})

// function arrMap(arr, cb) {
//   let newArr = [];
//   return cb(item);
// }

// function addItem(item) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }



// 5. Создать функцию sumTo, которая принимает два числа и callback.
// Задача функции складывать 2 числа, а задача callback’a заставлять
// функцию sumTo возвращать результат в виде числа, строки или
// логического типа данных.

// function toString (val) { return val + ''; }

// sumTo(2,3, someCallback)


// function sumTo(num1, num2, cb) {
//   let sum = num1 + num2;
//   return cb(sum);
// }

// function toString(sum) {
//   return sum + "";
// }

// function toNumber(sum) {
//   return +sum;
// }

// function toBoolean(sum) {
//   return !!sum;
// }


// console.log(sumTo(2, 5, toString));
// console.log(sumTo(2, 5, toNumber));
// console.log(sumTo(5, -5, toBoolean));



// 6. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.

// function rightLogin() {
//     alert('Вход успешно выполнен')
// };

// function wrongLogin() {
//     alert('Проверьте введённые данные')
// };

// function checkLogin(userLogin, login, cb1, cb2) {
//     if (userLogin === login) {
//         return cb1();
//     } else {
//         return cb2();
//     }
// };

// checkLogin(prompt('Введите login'), '12345', rightLogin, wrongLogin);

// 7. Создать объект
// kurochka = {
// 	name: 'Ryaba',
// 	isAlive: true,
// 	isZazharena: false
// }

// измените объект так, чтобы после изменения поля isZazharena = true, поле isAlive автоматически стало false,
// поле isAlive должно быть доступно только для чтения. После изменения isZazharena - это поле должно стать доступно только для чтения

const kurochka = {
  name: 'Ryaba',
  isAlive: true,
  _isZazharena: false
};


Object.defineProperty(kurochka, 'isAlive', {
  writable: false
});

Object.defineProperty(kurochka, '_isZazharena', {
  writable: true,
  enumerable: false,
  configurable: false
});

Object.defineProperty(kurochka, 'isZazharena', {
  set (val) {
      if (val && !this._isZazharena) {
          this._isZazharena = val;

          Object.defineProperty(this, 'isAlive', {
              writable: true
          });

          this.isAlive = false;

          Object.defineProperty(this, 'isAlive', {
              writable: false,
              configurable: false
          })
      }
  },
  get () {
      return this._isZazharena;
  }
});


kurochka.isZazharena = true;
kurochka.isAlive = true;

console.log(kurochka);
