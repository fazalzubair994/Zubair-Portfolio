let button = document.querySelector("#CalculateBtn"); // taking the CalcuatleBtn

// when ever the user clicks the button
// the event bellow will be called
button.addEventListener("click", () => {
  // and this method will wun after each click.

  // first taking the billAmount, user input
  let billAmount = document.querySelector("#billAmount").value;
  // then taking the timpAmount on the TimAmount element field
  let tipAmount = document.querySelector("#tipAmount").value;

  // then add the billAmount variable with the TimAmount
  // actually you have to parse the values into integer. that is why i am using parseInt() method
  // cause the input fields can also cary string values
  let totalAmount = parseInt(billAmount) + parseInt(tipAmount);

  // now check that if the totalAmount variable is not a number using isNan() method

  if (!isNaN(totalAmount))
    document.querySelector("#totalAmount").innerText = totalAmount + " PKR";
  else {
    // if user input any kind of string or irrelevent values in the input fields
    // then set the totalAmount value to error messege.
    document.querySelector("#totalAmount").innerText = "input is not Valid...";
    // and also apply different color to show the error messege
    document.querySelector("#totalAmount").style.color = "hotpink";
    // and then reset everything  after 2 seconds. and for that use the setTimeout() method.
    // you should study about the setTimeout and setInterval() methods. as these are very usefull for time-based system.

    // actaull we are calling the resetUI after 2 seconds. (2000 mili-seconds)
    setTimeout(resetUI, 2000);
  }
});

// this will reset the UI Elements
let resetUI = () => {
  // set the totalAmount element to again 0 PKR
  document.querySelector("#totalAmount").innerText = "0 PKR";
  // empty the input fiels
  document.querySelector("#billAmount").value = "";
  document.querySelector("#tipAmount").value = "";
  // and at the end also reset the color of totalAmount
  document.querySelector("#totalAmount").style.color = "white";
};
