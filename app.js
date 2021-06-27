const buttons = Array.from(document.querySelectorAll("button"));
const output = document.getElementById("output");
const display = document.getElementById("display");
const del = document.getElementById("del");
const clear = document.querySelector(".clear");
//////////////////////////////////////////////////////////////////

del.onclick = deleteNumber;
clear.onclick = clearAll;
/////////////////////////////////////////////////////////////////

class Operate {
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

class Features{
 clearAll() {
  display.innerHTML = "";
  output.innerHTML = 0;
}

 deleteNumber() {
  display.innerHTML = display.textContent.toString().slice(0, -1);
}
}
