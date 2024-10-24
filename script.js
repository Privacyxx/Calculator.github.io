document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Agar raqam bo'lsa
    if (!isNaN(key)) {
        appendNumber(key);
    }

    // Agar operator bo'lsa
    if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    }

    // Enter tugmasi "=" funktsiyasini bajaradi
    if (key === 'Enter') {
        calculate();
    }

    // Backspace "DEL" funktsiyasini bajaradi
    if (key === 'Backspace') {
        deleteLast();
    }

    // C yoki Escape tugmasi "clear" funktsiyasini bajaradi
    if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearDisplay();
    }

    // Nuqta (.) qo'shish
    if (key === '.') {
        appendNumber('.');
    }
});

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
