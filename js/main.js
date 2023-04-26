'use strict';

const appDOM = document.querySelector('.app');
const minusDOM = appDOM.querySelector('.btn:first-child');
const plusDOM = appDOM.querySelector('.btn:nth-child(3)');
const resetDOM = appDOM.querySelector('.reset');
const screenDOM = appDOM.querySelector('.screen');

let sum = 0;

function padydinti() {
    screenDOM.innerText = ++sum;
}

function sumazinti() {
    screenDOM.innerText = --sum;
}

plusDOM.addEventListener('click', padydinti);
minusDOM.addEventListener('click', sumazinti);

resetDOM.addEventListener('click', () => {
    sum = 0;
    screenDOM.innerText = sum;
})