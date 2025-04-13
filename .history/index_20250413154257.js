const display = document.getElementById("display");
let preValue = [""];
let errors = false;
function addToDisplay(input) {
  if (!errors) {
    display.value += input;
    preValue.push(display.value);
  } else {
    clearDisplay();
  }
}

function clearDisplay() {
  display.value = "";
}

function removeFromDisplay() {
  if (preValue.length > 1) {
    display.value = preValue[preValue.length - 1];
    preValue.pop();
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}
