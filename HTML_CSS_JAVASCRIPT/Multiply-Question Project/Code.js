let score = document.getElementById('score');
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let userinput = document.getElementById('userInput');
let checkResults = document.getElementById('checkResults');
let errorMessege = document.getElementById('errorMessege');
let ResultScore = 0;
let firstnumber;
let timerout;
let secondNumber;
loadRandomCalculation();

function loadRandomCalculation()
{
    firstnumber = Math.floor(Math.random() * 10);
    secondNumber = Math.floor(Math.random() * 10);
    number1.innerText = firstnumber;
    number2.innerText = secondNumber;
}

checkResults.addEventListener('click', () => {
    let userValue =  userinput.value;
    let result = firstnumber * secondNumber;
    if (result == userValue)
    {
        ResultScore++;
        userinput.value = '';
        userinput.focus();
        score.innerText = ResultScore;
        loadRandomCalculation();
    }
    else
    {
        errorMessege.style.visibility = 'visible';
        timerout =  setTimeout(() => {
            errorMessege.style.visibility = 'collapse';
            clearTimeout(timerout);
        }, (2000));
        }
})