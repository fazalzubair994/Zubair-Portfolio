let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let period = document.getElementById("period");

function updateClock() {
  const now = new Date(); // Get the current date and time

  let Hour = now.getHours().toString().padStart(2, "0");
  if (Hour > 12) {
    let time = Hour - 12;
    hours.innerText = (time < 10 ? "0" : "") + time;
  } else hours.innerText = (Hour < 10 ? "0" : "") + Hour;

  period.innerText = Hour >= 12 ? "PM" : "AM";
  minutes.innerText = now.getMinutes().toString().padStart(2, "0");
  seconds.innerText = now.getSeconds().toString().padStart(2, "0");
}

// Update the clock every second
setInterval(updateClock, 1000);

// Show the current time immediately on page load
updateClock();
