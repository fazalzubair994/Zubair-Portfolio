let button = document.querySelector("#CalculateBtn");

button.addEventListener("click", () => {
  let data = document.querySelector("#ageData").value;

  let dob = new Date(data);
  let today = new Date();

  let yearDifference = today.getFullYear() - dob.getFullYear();
  let monthDifference = today.getMonth() - dob.getMonth();
  let totalMonths = 12 * yearDifference + monthDifference;
  let totalDays = getDateDifference(dob, today);
  let Years = totalMonths / 12;
  let Months = totalMonths % 12;
  let TotalMonths = totalDays / 12;
  let Weeks = totalDays % 7;
  let totalWeeks = totalDays / 7;
  let Days = totalDays % 7;

  document.querySelector("#totalAmount").innerText = `${Math.floor(
    Years
  )} Years, ${Math.floor(Months)} Months, ${Weeks} Weeks, ${Math.floor(
    Days
  )} Days\n\n Total Months: ${Math.floor(
    TotalMonths
  )}\n Total Weeks: ${Math.floor(totalWeeks)}\n Total Days: ${Math.floor(
    totalDays
  )}`;
});

function getDateDifference(startDate, endDate) {
  // Convert the date strings into Date objects
  let start = new Date(startDate);
  let end = new Date(endDate);

  // Calculate the time difference in milliseconds
  let timeDifference = Math.abs(end.getTime() - start.getTime());

  // Calculate days difference
  let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return daysDifference;
}
setInterval(changeShadowColor, 3000); // change the shadow color every 3 seconds

function changeShadowColor() {
  document.querySelector(".AgeCalculator").style.boxShadow =
    getRandomBoxShadow();
}

// create a randomShadow color and return.
function getRandomBoxShadow() {
  // Generate random values for the box-shadow properties
  const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${1})`; // Random RGBA color

  return `${0}px ${0}px ${15}px ${color}`;
}
