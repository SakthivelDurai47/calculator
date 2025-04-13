const display = document.getElementById("display");
let preValue = [""];
let errors = false;

function addToDisplay(input) {
  playClickSound();
  if (!errors) {
    if (display.value === "0") {
      display.value = "";
    }
    display.value += input;
    preValue.push(display.value);
    display.scrollLeft = display.scrollWidth + 20;
  } else {
    display.value = "";
    preValue = [""];
    errors = false;
    addToDisplay(input);
  }
}

function clearDisplay() {
  playClickSound();
  display.value = "";
  preValue = [""];
  errors = false;
}

function removeFromDisplay() {
  playClickSound();
  if (preValue.length >= 1) {
    preValue.pop();
    display.value = preValue[preValue.length - 1];
  }
}

function calculate() {
  playClickSound();
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
function playClickSound() {
  const clickSound = document.getElementById("clickSound");
  clickSound.currentTime = 0;
  clickSound.play();
}
