// let i = 0;

// while ( i < 6 ) {

//     console.log(i++)

// }

// let i = 5;
// while ( i >= 0 ) {
//     console.log(i--)
// }


// let i;

// do { 
//     i = +prompt('Введите число');
// } while (i !== 5)


// for (let i = 1; i < 6; i++) {
//     for (let j = 1; j < 5; j++) {
//     if (j === 3 || i === 3) {
//     continue;
//     }
//     console.log(`${i}.${j}`);
//     }
// }

// for (let i = 10; i < 100; i++) {
//     if (i % 6 !== 0 && i % 4 === 0) {
//     console.log(i);
//     }
// }



let i = +prompt('Введите число');

for ( ;i === 0; ) {
    if (i > 0) {
    console.log(i--);
    } else {console.log(i++);
}
}
