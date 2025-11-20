counterElm = document.querySelector('span');
incrementBtn = document.querySelector('#incrementBtn');
decrementBtn = document.querySelector('#decrementBtn');
doubleBtn = document.querySelector('#doubleBtn');
halveBtn = document.querySelector('#halveBtn');

function getCounterValue() {
  return Number(counterElm.textContent);
}

function increment(x) {
  return x + 1;
}

function decrement(x) {
  return x - 1;
}

function double(x) {
  return x * 2;
}

function halve(x) {
  return Math.round(x / 2);
} 

incrementBtn.addEventListener('click', function() { 
  var currentValue = getCounterValue();
  counterElm.textContent = increment(currentValue);
})


decrementBtn.addEventListener('click', function() {
  var currentValue = getCounterValue();
  counterElm.textContent = decrement(currentValue);
})

doubleBtn.addEventListener('click', function() {
  var currentValue = getCounterValue();
  counterElm.textContent = double(currentValue);
})

halveBtn.addEventListener('click', function() {
  var currentValue = getCounterValue();
  counterElm.textContent = halve(currentValue);
})

