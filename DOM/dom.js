// Document
// Object
// Model

// console.log(document.body);
// console.log(h1.nextElementSubling);
// console.log(h1.previousElementSubling);
// console.log(h1.parentElement);

// const ul = document.getElementById('list');
// const lis = ul.getElementsByTagName('li');
// Array.from(lis);

// const lis = document.getElementsByClassName('item');
// console.log(lis);


// const ol = document.getElementById('test');
// const items = ol.getElementsByClassName('item');
// console.log(items);

// const lis = document.querySelector('#list > li:not(.item)');

// const btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//     console.log('Hi there');
// });

// const onBtnClick = function () {
//     console.log('Hi there again');
// }

// btn.addEventListener('click', onBtnClick);

// btn.removeEventListener('click', onBtnClick);

// const chtotoRemove = function () {
//     btn.removeEventListener('click', chtoto);
// };

// const chtoto = function () {
//         console.log('chtoto');
//         chtotoRemove();
// };


// btn.addEventListener('click', chtoto);


// const btn = document.getElementById('btn');
// btn.addEventListener('click', (event) => {
//     console.log(event);
// });

// const input = document.getElementById('input');

// input.addEventListener('keydown', function (event) {
//     console.log(event);
// });

// const link = document.getElementById('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('link click');
// });

// window.addEventListener('contextmenu', (event) =>{
//     event.preventDefault();
// });


// const list = document.getElementById('list');
// const lis = [...list.getElementsByTagName('li')];

// function onliClick({target}) {
//     console.log(target);
// };

// // lis.forEach((li) => li.addEventListener('click', onliClick));
// list.addEventListener('click', onliClick);


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const clickBoom = function () {
    console.log('BOOM!');
};

const clickOk = function () {
    console.log('OK');
};

btn.addEventListener('click', (event) => {
    console.log(event);
});