let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");
let pointOne = document.getElementById("one-point");
let newGame = document.getElementById("new-game");
let timerInterval;
let display = document.querySelector('#time');

let hFoul = document.getElementById("home-foul");
let gFoul = document.getElementById("guest-foul");

let homeScore = 0; // Add "let" to properly declare the variables
let guestScore = 0;
let homeFoul = 0;
let guestFoul = 0;

// score buttons change the points for home
function homePointIncrm() {
    homeScore += 1;
    homePoints.innerText = homeScore
}
function homePointIncrm2() {
    homeScore += 2;
    homePoints.innerText = homeScore
}
function homePointIncrm3() {
    homeScore += 3;
    homePoints.innerText = homeScore
}


// foul button adds a foul for home
function homeFoulIncrm() {
    homeFoul += 1;
    hFoul.innerHTML = homeFoul
}


// score buttons change the points for guest
function guestPointIncrm() {
    guestScore += 1;
    guestPoints.innerText = guestScore
}
function guestPointIncrm2() {
    guestScore += 2;
    guestPoints.innerText = guestScore
}
function guestPointIncrm3() {
    guestScore += 3;
    guestPoints.innerText = guestScore
}

function rstGame() {
    homeScore = 0;
    guestScore = 0;
    homeFoul = 0;
    guestFoul = 0;
    homePoints.innerText = homeScore
    guestPoints.innerText = guestScore
    hFoul.innerHTML = homeFoul
    gFoul.innerHTML = guestFoul
    
    // Reset the timer
    clearInterval(timerInterval);
    var fiveMinutes = 60 * 24;
    display.textContent = "24:00"; // Reset the timer display to 24:00
    startTimer(fiveMinutes, display);
}

function guestFoulIncrm() {
    guestFoul += 1;
    gFoul.innerHTML = guestFoul
}



function startTimer(duration) {
    var timer = duration, minutes, seconds;
    timerInterval = setInterval(function () { // Store the timer interval ID
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}



window.onload = function () {
    var fiveMinutes = 60 * 24,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};