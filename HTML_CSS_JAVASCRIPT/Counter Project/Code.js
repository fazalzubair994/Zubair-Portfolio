let Counter = 0;
let increaseBtn = document.getElementById('increasebtn');
let decreasebtn = document.getElementById('decreasebtn');
let resetbtn = document.getElementById('resetbtn');
let counterUI = document.getElementById('CounterNumber');
increaseBtn.addEventListener('click', () => {
    Counter++;
    counterUI.innerText = Counter.toLocaleString();
})
decreasebtn.addEventListener('click', () => {
    Counter--;
    if (Counter >= 0) {
        counterUI.innerText = Counter;
    }
    else
        Counter = 0;

})
resetbtn.addEventListener('click', () => {
    Counter = 0;
    counterUI.innerText = Counter;
})
