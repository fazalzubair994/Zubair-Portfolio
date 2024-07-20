let select = document.getElementById("select");
let selectui2 = document.getElementById("select2");
let numberinput = document.getElementById("numberinput");
let resultsshow = document.getElementById("result");

select.addEventListener("change", () => {
  updateRates();
});

selectui2.addEventListener("change", () => {
  updateRates();
});

numberinput.addEventListener("input", () => {
  updateRates();
});
function updateRates() {
  const usdToCad = 1.36; // Example rate, update with current rate
  const cadToUsd = 1 / usdToCad;
  const usdToInr = 83.52; // Example rate, update with current rate
  const inrToUsd = 1 / usdToInr;
  const cadToInr = usdToInr * cadToUsd;
  const inrToCad = 1 / cadToInr;

  if (select.value === selectui2.value) {
    resultsshow.value = numberinput.value;
  } else if (select.value === "USD" && selectui2.value === "CAD") {
    let results = numberinput.value * usdToCad;
    resultsshow.value = results.toFixed(2);
  } else if (select.value === "CAD" && selectui2.value === "USD") {
    let results = numberinput.value * cadToUsd;
    resultsshow.value = results.toFixed(2);
  } else if (select.value === "USD" && selectui2.value === "INR") {
    let results = numberinput.value * usdToInr;
    resultsshow.value = results.toFixed(2);
  } else if (select.value === "INR" && selectui2.value === "USD") {
    let results = numberinput.value * inrToUsd;
    resultsshow.value = results.toFixed(2);
  } else if (select.value === "CAD" && selectui2.value === "INR") {
    let results = numberinput.value * cadToInr;
    resultsshow.value = results.toFixed(2);
  } else if (select.value === "INR" && selectui2.value === "CAD") {
    let results = numberinput.value * inrToCad;
    resultsshow.value = results.toFixed(2);
  }
}
