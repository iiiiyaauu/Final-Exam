const display = document.getElementById('display');

function addToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
 }
}

document.addEventListener('keydown', function(e) {
  const keyName = e.key;
  if (keyName === "Backspace") {
      display.value = display.value.slice(0, -1);
  }
})

const charactersToIgnore = 'qwertyuiop[]asdfghjkl;zxcvbnm,!@#$%^&_';

document.addEventListener('keypress', function(e) {
  const keyName = e.key;
  
  if (!charactersToIgnore.includes(keyName)) {
    
    if(keyName === '=') {
      calculate();
      return;
    }

    display.value += keyName;
  }
})
