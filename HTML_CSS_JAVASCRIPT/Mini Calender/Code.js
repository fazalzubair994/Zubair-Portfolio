let Month = document.getElementById('Month'); 
let Day = document.getElementById('Day'); 
let Dateof = document.getElementById('Date'); 
let Year = document.getElementById('Year'); 
let date = new Date;
let month = date.getMonth();
Month.innerText = date.toLocaleString("en", {
  month: "long",
});

Day.innerText = date.toLocaleString("en", {
  weekday: "long",
});
Dateof.innerText = date.getDate();
Year.innerText = date.getFullYear();
console.log("month");