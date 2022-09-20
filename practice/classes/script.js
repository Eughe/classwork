// Напишите функцию, которая вычисляет длину линий в стандартной двухмерной системе координат. Координаты начала и конца линий должны храниться в объектах.
// Создайте три линии.
// Вычислите их длины с помощью функции
// Проверьте, могут ли три линии сформировать треугольник
// Помните
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина каждой стороны треугольника должны быть меньше суммы длин остальных сторон.

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// class Line {
//   constructor(startPoint, endPoint) {
//     this.startPoint = startPoint;
//     this.endPoint = endPoint;

//   }

//   static checkTriangle(line1, line2, line3) {
//     return (
//       line1.lenght + line2.lenght > line3.lenght &&
//       line3.lenght + line2.lenght > line1.lenght &&
//       line1.lenght + line3.lenght > line2.lenght
//     );
// };

//   get lenght () {
//     return Math.sqrt((this.endPoint.x - this.startPoint.x)**2 + (this.endPoint.y - this.startPoint.y)**2)
//   }
// };

// const point1 = new Point (3, 4);
// const point2 = new Point (7, 5);
// const point3 = new Point (4, 1);
// const point4 = new Point (4, 9);
// const point5 = new Point (5, 4);
// const point6 = new Point (12, 6);

// const line1 = new Line (point1, point2);
// const line2 = new Line (point3, point4);
// const line3 = new Line (point5, point6);

// console.log(Line.checkTriangle(line1, line2, line3));

// На этом изображении показано как нужно организовать наследование между классами.
// Требования:
// Human должен принимать параметры name,аде.
// Все представители этого класса должны иметь метод ,sayHi(), который возвращает строку с приветствием.
// Programmer должен принимать параметр technologies (массив строк) с названиями любых технологий (пример: ['HTML', 'CSS', 'JS']).
// Все представители этого класса долны иметь метод .startCodingO, который возвращает строку вида 'David is coding using HTML, CSS, JS'.
// Имя 'David' и названия технологий должны меняться в зависимости оттого, каким объектом был вызван метод.
// Sportsman должен принимать параметр medals, который характеризует количество медалей у спортсмена.
// FootballPlayer должен принимать параметр team (строка) с названием команды где играет футболист.
// Все представители этого класса должны иметь метод .run(speed), где speed это число характеризующее скорость бега.
//  Метод .run(б) должен возвращать строку вида 'John is running б kmph', где имя 'John' может меняться в зависимости от объекта вызывающего метод ,run().
// HockeyPlayer должен принимать параметр weight (число) характеризующим массу хоккеиста.
// Все представители этого класса должны иметь метод .pushOpponent(opponentName), который должен возвращать строку вида 'Bill pushed Brandon and used 123kgs',
// имя 'Bill' и количество кг могут меняться в зависимости от объекта запустившего метод. Имя 'Brandon' может меняться в зависимости от opponentName
// переданного в момент вызова метода.

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }
// }

// class Programmer extends Human {
//   constructor(technologies, ...args) {
//     super(...args);
//     this.technologies = technologies;
//   }
//   startCoding() {
//     console.log(`${this.name} is coding using HTML, CSS, JS`);
//   }
// }

// class Sportsman extends Human {
//   constructor(medals, ...args) {
//     super(...args);
//     this.medals = medals;
//   }
// }

// class FootballPlayer extends Sportsman {
//   constructor(team, ...args) {
//     super(...args);
//     this.team = team;
//   }
//   run(speed) {
//     console.log(`${this.name} is running ${speed} kmph`);
//   }
// }

// class HockeyPlayer extends Sportsman {
//   constructor(weight, ...args) {
//     super(...args);
//     this.weight = weight;
//   }
//   pushOpponent(opponentName) {
//     console.log(
//       `${this.name} pushed ${opponentName} and used ${this.weight} kgs`
//     );
//   }
// }
// let hockeyPl1 = new HockeyPlayer(110, 25, "Bill", 3);

// console.log(hockeyPl1.pushOpponent('John'));
// console.log(hockeyPl1);

// Создать класс Battery, который инициализирует поля type,
// energy (заряд, по умолчанию 100). Создать класс Device,
// который принимает параметр batteryType и метод
// insertBattery, который принимает два параметра (две
// батарейки). Создать класс Gamepad, который наследует от
// Device. Класс Gamepad должен содержать поле model, поле
// isConnected (boolean) и методы connectTo(), который
// принимает название другого девайса и выводит сообщение
// типа “gamepadModel connected to TV”, метод disconnect(),
// который отключает Gamepad и метод play(), который
// отнимает 10 зарядов от каждой батареи. Если хотя бы одно
// поле batteryType у Device и type у Battery не совпадают, то
// вывести сообщение что батарейки не вставлены.
// Подключить один девайс к другому можно только если есть
// 2 батарейки. Подключить Gamepad можно только если
// isConnected == false. Если заряд батареек == 0, то метод
// play вернет сообщение с требованием замены батареек.

class Battery {
  #energy = 100;

  constructor (type) {
      this.type = type;
  }

  consumeEnergy (amount) {
      if (amount <= this.#energy) {
          this.#energy -= amount;
      }       
  }

  get energy () {
      return this.#energy;
  }

  recharge () {
      this.#energy = 100;
  }
}

class Device {
  #batteries = [];

  constructor (batteryType) {
      this.batteryType = batteryType;
  }

  insertBatteries (bt1, bt2) {
      if (bt1?.type !== this.batteryType || bt2?.type !== this.batteryType) {
          console.log('battery types are incompatible');
      } else if (this.#batteries.length) {
          console.log('batteries are already set');
      } else {
          this.#batteries = [bt1, bt2];
      }
  }

  removeBatteries () {
      this.#batteries = [];
  }

  consumeEnergy (val) {
      this.#batteries.forEach((bt) => bt.consumeEnergy(val));
  }

  areBatteriesCharged () {
      return this.#batteries.every((bt) => bt.energy);
  }

  hasBatteries () {
      return Boolean(this.#batteries.length);
  }
}

class Gamepad extends Device {
  #isConnected = false;

  constructor (model, batteryType) {
      super(batteryType);
      this.model = model;
  }

  connectTo (device) {
      if (this.hasBatteries() && !this.#isConnected) {
          console.log(`${this.model} has been connected to ${device}`);
          this.#isConnected = true;
      } else {
          console.log(`This ${this.model} doesn't have batteries or is already connected`);
      }
  }
  disconnect () {
      this.#isConnected = false;
  }

  play () {
      if (this.areBatteriesCharged() && this.hasBatteries()) {
          this.consumeEnergy(10);
          console.log(`you are playing`);
      } else {
          this.#isConnected = false;
          console.log(`Please change/insert batteries`);
      }
  }
}

const bt1 = new Battery('AA');
const bt2 = new Battery('AA');
const xboxGamepad = new  Gamepad('Xbox Gamepad', 'AA');

xboxGamepad.insertBatteries(bt1,bt2);
xboxGamepad.connectTo('Playstation');
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.removeBatteries();
xboxGamepad.play();
xboxGamepad.play();


// Написать конструктор товара, который должен принимать
// имя, стоимость, цвет и объект params с параметрами (длина,
// ширина, высота). Для параметров params, должен
// существовать конструктор Params, который принимает три
// параметра (width, length, height)
