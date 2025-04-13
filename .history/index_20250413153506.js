const display = document.getElementById("display");
let preValue = [""];

function addToDisplay(input) {
  display.value += input;
  preValue.push(input);
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}
