// dice roller
function rollDice() {
    return 1 + Math.floor(Math.random() * 20);
}

function diceRoll(number) {
    var dice = document.getElementById("dice-face");
    dice.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
    var result = rollDice();
    diceRoll(result);
}

// Countdown timer
function dateDifference() {
    const now = new Date();
    const then = new Date("7/11/2021 14:00");
    return Math.floor((then - now)/1000);
} 

function getDays(seconds) {
    return Math.floor(seconds/86400);
}

function getHours(seconds) {
    return Math.floor(seconds/3600);
}

function getMinutes(seconds) {
    return Math.floor(seconds/60);
}

function tick() {
    //The difference between the date and now
    let difference = dateDifference();
    const days = getDays(difference);
    difference = difference - days * 86400;
    const hours = getHours(difference);
    difference = difference - hours * 3600;
    const minutes = getMinutes(difference);
    difference = difference - minutes * 60;
    const seconds = difference;

    document.getElementById("timer").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
}

window.onload = function () {
    countdown = setInterval(tick, 1000);
    tick();
}

// http request for google docs API
