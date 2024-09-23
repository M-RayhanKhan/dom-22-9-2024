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

myBtn.setAttribute('disabled', true);