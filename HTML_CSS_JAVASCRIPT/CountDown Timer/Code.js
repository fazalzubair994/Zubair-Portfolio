let minutes = 25;
let seconds = 60;
let isTimerON = false;
let countDownTimer;
let startButtton = document.querySelector('#startBtn');
let stopButtton = document.querySelector('#stopBtn');
let resetButtton = document.querySelector('#resetBtn');
startButtton.addEventListener('click', () => {
     if (seconds === 60)
        minutes--;
    if (!isTimerON)
    {
        countDownTimer = setInterval(startTimer, 1000);
        isTimerON = true;
    }
    
})

stopButtton.addEventListener('click', () => {
      clearInterval(countDownTimer);
        isTimerON = false;
       
})

resetButtton.addEventListener('click', () => {
    clearInterval(countDownTimer);
    isTimerON = false;
    minutes = 25;
    seconds = 60;
    document.querySelector('#timerNote').innerText = `${minutes}:00`;
})

function startTimer()
{
    // Calculate the minutes and seconds remaining
    seconds--;
    // Display the countdown
    document.querySelector('#timerNote').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.querySelector('#timerNote').style.boxShadow = getRandomBoxShadow();
    if (seconds == 0)
    {
        seconds = 60;
        minutes--;
    }
    if (minutes < 0)
    {
        clearInterval(countDownTimer);
        isTimerON = false;
    }
    let timerNote = document.querySelector('#timerNote');
    timerNote.style

}


function getRandomBoxShadow() {
    // Generate random values for the box-shadow properties
    const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${.8})`; // Random RGBA color

    return `${0}px ${0}px ${10}px ${color}`;
}
