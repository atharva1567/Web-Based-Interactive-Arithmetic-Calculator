// Display numbers/operators
function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

//Clear display (C)
function clearDisplay() {
  document.getElementById("display").value = "";
}

//Delete last character (←)
function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

//Calculate result (=)
function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

//Clear everything on the display
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

//Delete the last character from the display
function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}