let celsius = document.querySelector('#celsius');
let fahrenheit = document.querySelector('#fahrenheit');
let kelvin = document.querySelector('#kelvin');

celsius.addEventListener('input', () => {

    let currentValue = celsius.value;
    kelvin.value = (Number(currentValue) + 273.15).toFixed(2);
    fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
    console.log('celsius');
})

fahrenheit.addEventListener('input', () => {
        let currentValue = fahrenheit.value;
    celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
})


kelvin.addEventListener('input', () => {
    
     let currentValue = kelvin.value;
  celsius.value = (currentValue - 273.32).toFixed(2);
      fahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);

    
})
