const numbers = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operator"));
const output = document.getElementById("output");
const display = document.getElementById("display");
const del = document.getElementById("del");
const clear = document.querySelector(".clear");
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
class Calculate {
  addNumber(a, b) {
    return a + b;
  }

  subNumber(a, b) {
    return a - b;
  }

  divNumber(a, b) {
    return a / b;
  }

  multNumber(a, b) {
    return a * b;
  }
}

function compute(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return calculate.addNumber(a, b);
    case "−":
      return calculate.subNumber(a, b);
    case "×":
      return calculate.multNumber(a, b);
    case "÷":
      if (b === 0) return null;
      else return calculate.divNumber(a, b);
    default:
      return null;
  }
}


class Features {
  clearAll() {
    display.innerHTML = "";
    output.innerHTML = 0;
  }

  deleteNumber() {
    display.innerHTML = display.textContent.toString().slice(0, -1);
  }
  update() {
    x = display.textContent;
    output.innerHTML = x;
    display.innerHTML = "";
  }
}

const features = new Features();

del.onclick = features.deleteNumber;
clear.onclick = features.clearAll;

let calculate = new Calculate();

numbers.forEach((number) => {
  number.onclick = function () {
    if ((number.value === ".") & display.textContent.includes(".")) return;
    display.innerHTML += number.value;
  };
});

operators.forEach((operator) => {
  operator.onclick = function () {
    x = display.textContent;
    // output.innerHTML = x;
    display.innerHTML = "";
    if (operator.value === "") return;
    if (operator.value !== "" && display.textContent !=="") {
      c = compute(operator.value, display.textContent, x)
      output.innerHTML = c;
    }
  };
});
