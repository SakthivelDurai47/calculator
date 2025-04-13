const display = document.getElementById("display");
let preValue = [""];

function addToDisplay(input) {
  display.value += input;
  preValue.push(display.value);
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
