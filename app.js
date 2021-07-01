const numbers = Array.from(document.querySelectorAll(".number"));
// const operators = Array.from(document.querySelectorAll(".operator"));
const output = document.getElementById("output");
const display = document.getElementById("display");
const del = document.getElementById("del");
const clear = document.querySelector(".clear");
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


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


numbers.forEach((number) => {
  number.onclick = function () {
    if ((number.value === ".") & display.textContent.includes(".")) return;
    display.innerHTML += number.value;
    output.innerHTML = eval(display.textContent)
  };
});

