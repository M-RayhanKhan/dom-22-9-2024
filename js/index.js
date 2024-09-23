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