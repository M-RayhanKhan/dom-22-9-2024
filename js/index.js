// const header = document.getElementById('header')
// header.style.backgroundColor = 'blue';
// header.style.color = 'green ';

const unique = document.querySelector("#unique-para")
unique.style.border = '2px solid red';


const myTags = document.getElementsByTagName('p');
for(let i = 0; i < myTags.length; i++){
    myTags[i].style.backgroundColor = 'green';
    myTags[i].style.border = '2px solid blue'
}

const allClassElement = document.getElementsByClassName('info');
// console.log(allClassElement[0]);

const queryAll = document.querySelectorAll('.info');
// console.log(queryAll[0].innerText);
// noe vs Element DOM
const container2 = document.querySelector('.container2');

// parentElement
/**
 * nextElementSibling vs nextSibling
 * previousElementSibling
 * */ 

const item2 = document.getElementById('item-2');

// container4;

// innerText || textContent || innerHTML;
const container4 = document.querySelector('.container4');
// console.log(container4.innerText);
// console.log(container4.textContent);
// console.log(container4.innerHTML);

const myBtn = document.getElementById('myButton');
myBtn.setAttribute('class', 'btn btn-primary btn-bg')
myBtn.setAttribute('id', 'myId')
myBtn.setAttribute('disabled', true);
myBtn.removeAttribute('disabled')

const linkA = document.getElementById('myLink');
const link = linkA.getAttribute('href')
// console.log(link);


// container 5;
const container5 = document.querySelector('.container5') 

const p = document.createElement('p');
p.innerText = "creating paragraph dynamically";
container5.appendChild(p);
const h1 = document.createElement('h1');
h1.textContent = 'I am h1, and can i inject to html though js';
// h1.classList.add('btn-bg')
container5.append(h1, 'habijai khabi')