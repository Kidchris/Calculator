const buttons = Array.from(document.querySelectorAll("button"));
const output = document.getElementById("output");
const display = document.getElementById("display");
const del = document.getElementById('del')
//////////////////////////////////////////////////////////////////

del.onclick = deleteNumber;

console.log(buttons)
buttons.forEach(function (e) {
    e.onclick = function () {
        if (e.className === "number") {
            display.innerHTML += e.value;
            if (e.value === ".") {
                // display.textContent = e.value;
            }
        }
        let firstValue;
        let nextValue;
        firstValue = display.textContent;
        if (e.className === "operator") {
            e.target.classList.add("is-depressed")
            // display.innerHTML += e.value;
            // switch (e.value) {
            //     case "*":
            //         console.log(display.textContent);
            //         nextValue = display.textContent;
            //         console.log(nextValue);
            //         output.innerHTML ;
            //         console.log(nextValue, firstValue);
            //         break;
            }
        }
    }
})

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

  clear() {
    return (display.innerHTML = 0);
  }
}

function deleteNumber() {
  display.textContent = display.textContent.toString().slice(0, -1);
}
