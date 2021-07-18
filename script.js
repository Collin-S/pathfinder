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
    return Math.floor((then - now)/1000);
}

const then =  getTargetDate();

function getTargetDate() {
    const baseline = new Date("5/30/2021 14:00");
    let dateFound = false;
    const now = new Date();
    let targetDate = baseline;
    while(!dateFound) {
        targetDate = dateFns.addWeeks(targetDate, 2)
        if(targetDate - now > 0) {
            dateFound = true;
        }
    }
    return targetDate;
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

function zeroPad(num) {
    return (num < 10 ? "0" : "") + num;
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

    document.getElementById("timer").innerHTML = zeroPad(days) + ":" + zeroPad(hours) + ":" + zeroPad(minutes) + ":" + zeroPad(seconds);
}

window.onload = function () {
    countdown = setInterval(tick, 1000);
    tick();
}

// Contact Form
var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.formName = document.getElementById('formName');
    fields.formEmail = document.getElementById('formEmail');
    fields.formMessage = document.getElementById('formMessage');
})

// Checks to verify form fields are not empty
function notEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isName(text) {
    const regex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    return regex.test(String(text).toLowerCase());
}

function isEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

const form = document.getElementById('contactUs');
if (form) {
  form.addEventListener('submit', (event) => {
    // This prevents the default way a browser handles submitting forms,
    // sending a request to the URL in the form's action attribute.
    event.preventDefault();
    // Now you can gather the form data and send it to the server using fetch.
    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const message = document.getElementById('formMessage').value;
    const response = fetch('http://localhost:8080/post-form', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: {
        name,
        email,
        message,
      },
    }).then((response) => {
      // Do something with the response from the server
      console.log(response);
    });
  });
}