
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
previousSeconds = -1;

let isTimerON = false;
let startButtton = document.querySelector('#startBtn');
let stopButtton = document.querySelector('#stopBtn');
let resetButtton = document.querySelector('#resetBtn');
startButtton.addEventListener('click', () => {
     
    if (!isTimerON)
    {
        startTime = Date.now() - elapsedTime;
        isTimerON = true;
        timerInterval = setInterval(() => {
                elapsedTime = Date.now() - startTime;
                document.querySelector('#timerNote').innerText = formatTime(elapsedTime);
         const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        // Change box-shadow if seconds have changed
        // if (seconds !== previousSeconds) {
        //     previousSeconds = seconds;
        //         document.querySelector('#timerNote').style.boxShadow = getRandomBoxShadow();
            // }
        }, 10);
        
         // Extract the current seconds from the formatted time
       
    }
    
})

function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}


stopButtton.addEventListener('click', () => {
      clearInterval(timerInterval);
        isTimerON = false;
})

resetButtton.addEventListener('click', () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isTimerON = false;
    document.querySelector('#timerNote').innerText = `00:00:00`;
})

function getRandomBoxShadow() {
    // Generate random values for the box-shadow properties
    const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${.8})`; // Random RGBA color

    return `${0}px ${0}px ${10}px ${color}`;
}

