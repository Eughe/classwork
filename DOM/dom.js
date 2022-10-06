// const wrapper = document.getElementById('wrapper');
// const list = document.getElementById('list');
// const firstItem = document.getElementById('fItem');
// const pItem = document.getElementById('pItem');

// wrapper.addEventListener('click', () =>{
//     console.log('wrapper');
// });
// list.addEventListener('click', () =>{
//     console.log('list');
// });
// const liListener = () => {
//     console.log('LI');
// }

// firstItem.addEventListener('click', liListener);
// firstItem.addEventListener('click', liListener, true);

// pItem.addEventListener('click', () =>{
//     console.log('p');
// });

// pItem.innerText = <h1>Hello</h1>;

// const pItem = document.getElementById('pItem');

// pItem.addEventListener('click', () =>{
//         pItem.setAttribute('wasClicked', 'true');
//         pItem.getAttribute('wasClicked');
//         const pItemCopy = pItem.cloneNode();
//});
// pItem.dataset.smth = 'qweqwe';
   
// pItem.remove();


// const pItem = document.getElementById('pItem');
// const list = document.getElementById('list');
// const bratik = list.getElementsByTagName('li')[2];

// list.addEventListener('click', () =>{
//     const newLi = document.createElement('li');
//     newLi.innerText = 'some text here';

//     list.append(newLi);
//     list.prepend(newLi);
//     list.insertAdjacentElement('beforebegin', newLi);

//     list.insertAdjacentHTML('afterend', '<h1>Header</h1>');
//     list.insertAdjacentText('afterbegin', '<h1>Header</h1>');
// });



// const list = document.getElementById('list');


// list.addEventListener('click', () =>{
//     const item3 = list.getElementsByTagName('li')[2];
//     list.append(item3.cloneNode(true));
// });


// const pItem = document.getElementById('pItem');
// const list = document.getElementById('list');

// pItem.addEventListener('click', () =>{
  // pItem.style.backgroundColor = 'red';

//   pItem.classList.add('active');
//   pItem.classList.remove('two');
//   pItem.classList.replace('one', 'blabla');
//   pItem.classList.toggle('active');
// });