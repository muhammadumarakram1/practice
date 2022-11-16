'use strict';
let score = 20;
let highScore = 0;
function displayMessage(selector, message) {
    document.querySelector(selector).textContent = message;
}
function styleElement(selector, property, value) {
    document.querySelector(selector).style[property] = value;
}
let secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);

        if (!guess) {
            displayMessage('.message', 'No Number');
        }
        else if (guess === secretNum) {
            displayMessage('.message', 'Congrats');
            styleElement('body', 'backgroundColor', 'green');
            displayMessage('.number', secretNum);
            styleElement('.number', 'width', '30rem');
            styleElement('header', 'borderBottom', '7px solid #eee');
            styleElement('.number', 'background', '#eee');
            styleElement('.number', 'color', '#222');
            if (highScore < score) {
                highScore = score;
                displayMessage('.highscore', highScore);
            }

        }
        else if (guess !== secretNum) {
            if (score > 1) {
                displayMessage('.message', (guess > secretNum ? 'High! ' : 'Low! ') + ' Try Again')
                let colors = (guess > secretNum ? '#8D021F' : '#3B7A57');
                styleElement('.number', 'background', colors);
                styleElement('.number', 'color', '#eee');
                styleElement('header', 'borderBottom', '7px solid' + colors);
                score--;
                displayMessage('.score', score);
            } else {
                displayMessage('.message', 'You have lost the game');
                displayMessage('.score', '0');
            }
        }
    });

document.querySelector(['.reset']).addEventListener('click',
    function () {
        score = 20;
        styleElement('.number', 'background', '#eee');
        styleElement('.number', 'color', '#222');
        styleElement('header', 'borderBottom', '7px solid #eee');
        displayMessage('.score', score);
        displayMessage('.number', '?');
        secretNum = Math.trunc(Math.random() * 20) + 1;
        displayMessage('.message', 'Guess the Number Again');
        document.querySelector('.guess').value = '';
        displayMessage('.message', 'Congrats');
        styleElement('body', 'backgroundColor', '#222');
        styleElement('.number', 'width', '15rem');
    });