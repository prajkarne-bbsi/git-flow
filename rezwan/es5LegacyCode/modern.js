counterElm = document.querySelector('span');
incrementBtn = document.querySelector('#incrementBtn');
decrementBtn = document.querySelector('#decrementBtn');
doubleBtn = document.querySelector('#doubleBtn');
halveBtn = document.querySelector('#halveBtn');

getCounterValue = () => Number(counterElm.textContent);
increment = (x) => x + 1;
decrement = (x) => x - 1;
double = (x) => x * 2;
halve = (x) => Math.round(x / 2);

incrementBtn.addEventListener('click', () => { 
  const currentValue = getCounterValue();
  counterElm.textContent = increment(currentValue);
})


decrementBtn.addEventListener('click', () => { 
  const currentValue = getCounterValue();
  counterElm.textContent = decrement(currentValue);
})

doubleBtn.addEventListener('click', () => { 
  const currentValue = getCounterValue();
  counterElm.textContent = double(currentValue);
})

halveBtn.addEventListener('click', () => { 
  const currentValue = getCounterValue();
  counterElm.textContent = halve(currentValue);
})  