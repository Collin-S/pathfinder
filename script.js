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
var currentDay;
var time;
var countdown;

function getSeconds() {
    var nowDate = new Date();
    var days = 6;
    var timer = new
    Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate(),14,0,0);

    var currentTime = nowDate.getTime();
    var countdownTime = timer.getTime();
    var diff = parseInt((countdownTime - currentTime)/1000)
        if (diff < 0) {
            currentDay = days - nowDate.getDay();
        } else { currentDay = days - nowDate.getDay() -1 }
        if (currentDay > 0) {
            currentDay +=7;
        } if (diff <=0) { diff += (86400 *7) }
        startTimer (diff);
        }

function startTimer(secs) {
    time = parseInt(secs);
    countdown = setInterval("tick()", 1000);
    tick();
}

var secs;

function tick() {
    var secs = time;
    if (secs > 0) {
        time--;
    } else {
        clearInterval(countdown);
        getSeconds();
    }
}

var days = Math.floor(secs/86400);
secs %= 86400;
var hours = Math.floor(secs/3600);
secs %= 3600;
var mins = Math.floor(secs/60);
secs %= 60;

window.onload = function () {
    document.getElementById("timer").innerHTML = getSeconds();
}

// function timer(duration, display) {
//     var timer = duration, hours, minutes, seconds;
//     setInterval(function () {
//         hours = (duration / 24);
//         minutes = (duration % 24) / 60;
//         seconds = parseInt(duration % 60) / 10;

//         hours = hours < 24 ? "0" + hours : hours;
//         minutes = minutes < 60 ? "0" + minutes : minutes;
//         seconds = seconds < 60 ? "0" + ":" + seconds : seconds;
        
//         display.textContent = hours + ":" + minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var twoWeeks = 24 * 336,
//         display = document.getElementById("timer");
//     timer(twoWeeks, display);
//     timer.innerHTML = display
// }