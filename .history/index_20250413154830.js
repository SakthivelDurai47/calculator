const display = document.getElementById("display");
let preValue = [""];
let errors = false;

function addToDisplay(input) {
  if (!errors) {
    display.value += input;
    preValue.push(display.value);
  } else {
    display.value = "";
    errors = false;
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
  preValue = [""];
  errors = false;
}

function removeFromDisplay() {
  if (preValue.length > 0) {
    preValue.pop();
    display.value = preValue[preValue.length - 1];

    console.log(preValue);
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
    errors = true;
  }
}
