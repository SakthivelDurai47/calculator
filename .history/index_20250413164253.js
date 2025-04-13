const display = document.getElementById("display");
let preValue = [""];
let errors = false;

display.addEventListener("display", () => {
  display.scrollLeft = display.scrollWidth;
});

function addToDisplay(input) {
  if (!errors) {
    if (display.value == 0) {
      display.value = "";
    }
    display.value += input;
    preValue.push(display.value);
  } else {
    display.value = "";
    preValue = [""];
    errors = false;
    addToDisplay(input);
  }
}

function clearDisplay() {
  display.value = "";
  preValue = [""];
  errors = false;
}

function removeFromDisplay() {
  if (preValue.length >= 1) {
    display.value = preValue[preValue.length - 1];
    preValue.pop();
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
    if (display.value == Infinity) {
      throw new Error();
    }
  } catch (error) {
    display.value = "error";
    errors = true;
  }
}
