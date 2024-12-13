const inputEl = document.getElementById('display');

function addToDisplay(input) {
  inputEl.value += input;
}

function clearDisplay() {
  inputEl.value = '';
}

function calculate() {
  try {
    inputEl.value = eval(inputEl.value);
  } catch (error) {
    inputEl.value = 'Error';
 }
}

document.addEventListener('keydown', function(event) {
  const keyName = event.key;

  if (keyName === "Backspace") {
      inputEl.value = inputEl.value.slice(0, -1);
  }
})

const charactersToIgnore = 'qwertyuiop[]asdfghjkl;zxcvbnm,!@#$%^&_';

document.addEventListener('keypress', function(event) {
  const keyName = event.key;
  
  if (!charactersToIgnore.includes(keyName)) {
    
    if(keyName === '=') {
      calculate();
      return;
    }

    inputEl.value += keyName;
  }
})
