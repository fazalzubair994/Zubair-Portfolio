let inputField = document.querySelector('#inputfield');
let results = document.querySelector('#results');
let errorMessege = document.querySelector('#errorMessege');
let resultTimer;
let errorTimer;

// add event listner for the input 
inputField.addEventListener('input', () =>
{
    if (inputField.value <= 0 || isNaN(inputField.value))
    {
        inputField.style.boxShadow = '0px 0px 10px rgba(233, 75, 75, .5)';
        errorMessege.style.visibility = 'visible';
        
       errorTimer = setTimeout(showerror, 3000);
        
    }
    else {
        results.innerText = (+inputField.value / 2.2).toFixed(2);
        
        resultTimer = setTimeout(() => {
            results.innerText = "";
            inputField.value = '';
             clearTimeout(resultTimer);
        }, 20000)
       
    }
})

function showerror()
{
    clearTimeout(errorTimer);
    inputField.style.boxShadow = '0px 0px 10px rgba(215, 245, 160, 0.5)';
    errorMessege.style.visibility = 'collapse';
     results.innerText = "";
            inputField.value = '';
}