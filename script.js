let operator1 = document.querySelector(".operator1");
let operator2 = document.querySelector(".operator2");
let operand   = document.querySelector(".operand");
let result    = document.querySelector(".result");

let buttons = document.querySelectorAll(".ops p, .ops1 p, .operands p");

// ================= CLICK HANDLER =================
buttons.forEach(btn => {
    btn.addEventListener("click", () => handleInput(btn.innerText));
});

// ================= CORE LOGIC =================
function handleInput(value) {

    // CLEAR
    if (value === "C") {
        clearScreen();
        return;
    }

    // EQUAL
    if (value === "=") {
        calculate();
        return;
    }

    // OPERATORS
    if (["+", "-", "X", "/", "%"].includes(value)) {
        if (operator1.innerText !== "" && operand.innerText === "") {
            operand.innerText = value;
        }
        return;
    }

    // NUMBERS / DECIMAL
    if (result.innerText !== "") {
        clearScreen();
    }

    if (operand.innerText === "") {
        operator1.innerText += value;
    } else {
        operator2.innerText += value;
    }
}

// ================= CALCULATION =================
function calculate() {
    if (
        operator1.innerText === "" ||
        operator2.innerText === "" ||
        operand.innerText === ""
    ) {
        return;
    }

    let a = Number(operator1.innerText);
    let b = Number(operator2.innerText);

    switch (operand.innerText) {
        case "+":
            result.innerText = (`= ${a + b}`);
            break;
        case "-":
            result.innerText =(`= ${a - b}`);
            break;
        case "X":
            result.innerText = (`= ${a * b}`);
            break;
        case "/":
            result.innerText = (` = ${b === 0 ? "Error" : a / b}`);
            break;
        case "%":
            result.innerText = (`= ${a % b}`);
            break;
    }
}

// ================= CLEAR =================
function clearScreen() {
    operator1.innerText = "";
    operator2.innerText = "";
    operand.innerText   = "";
    result.innerText    = "";
}
