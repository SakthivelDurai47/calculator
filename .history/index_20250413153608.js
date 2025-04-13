const display = document.getElementById("display");
let preValue = [""];

function addToDisplay(input) {
  display.value += input;
  preValue.push(input);
}

function clearDisplay() {
  display.value = "";
}

function removeFromDisplay() {
  preValue.pop();
  display.value = preValue[preValue.length - 1];
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}
