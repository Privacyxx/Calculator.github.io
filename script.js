function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    var display = document.getElementById("display");
    display.value += number;
}

function appendOperator(operator) {
    var display = document.getElementById("display");
    var lastChar = display.value.slice(-1);
    if ("+-*/".includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function calculate() {
    var display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
