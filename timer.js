
let timer;
let minutes = 25;
let seconds = 0;

const btnPomodoro = document.getElementById("button-pomodoro");
const btnShort = document.getElementById("button-short-break");
const btnLong = document.getElementById("button-short-long");
const btnReset = document.getElementById("button-reset");
const btnUpdate = document.getElementById("modal-button-save");


const pomodoroTimeInput = document.getElementById('timer-pomodoro');
const shortBreakTimeInput = document.getElementById('timer-short-break');
const longBreakTimeInput = document.getElementById('timer-long-break');


const minutesDisplay = document.getElementById("timer-minutes");
const secondsDisplay = document.getElementById("timer-seconds");

/******************************************/

function startTimer(durationMinutes){
    minutes = durationMinutes;
    seconds = 0;
    updateDisplay();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer(){
    if(seconds > 0){
        seconds--;
    } else if(minutes > 0){
        minutes--;
        seconds = 59;
    } else {
        clearInterval(timer);
        alert('The time is over!');
    }
    updateDisplay();
}

function padtime(time){
    return time < 10 ? `0${time}` : time;
}

function updateDisplay(){
    minutesDisplay.textContent = padtime(minutes);
    secondsDisplay.textContent = padtime(seconds);
}

/******************************************/

btnPomodoro.addEventListener('click', ()=>{
    const pomodoroTime = parseInt(pomodoroTimeInput, 10);
    if(!isNaN(pomodoroTime) && pomodoroTime > 0){
        startTimer(pomodoroTime);
    }
});

btnShort.addEventListener('click', () => {
    const shortBreakTime = parseInt(shortBreakTimeInput.value, 10);
    if (!isNaN(shortBreakTime) && shortBreakTime > 0) {
        startTimer(shortBreakTime);
    }
});

btnLong.addEventListener('click', () => {
    const longBreakTime = parseInt(longBreakTimeInput.value, 10);
    if (!isNaN(longBreakTime) && longBreakTime > 0) {
        startTimer(longBreakTime);
    }
});

/******************************************/

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    updateDisplay();
});


updateDisplay();

