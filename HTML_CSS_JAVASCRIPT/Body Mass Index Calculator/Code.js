let heightInCM = document.getElementById("heightInCM");
let wieghtInKG = document.getElementById("wieghtInKG");
let results = document.getElementById("results");
let Weightstatus = document.getElementById("status");
let calculateBMI = document.getElementById("calculateBMI");

calculateBMI.addEventListener("click", CalculateBMI);

function CalculateBMI() {
  let height = heightInCM.value / 100; // Convert cm to meters
  let weight = wieghtInKG.value;

  if (height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight values.");
    return;
  }

  let bmi = weight / (height * height);
  results.value = bmi.toFixed(2); // Display BMI with two decimal places

  let status = "";
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    status = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    status = "Overweight";
  } else {
    status = "Obesity";
  }

  Weightstatus.innerText = status;
}
