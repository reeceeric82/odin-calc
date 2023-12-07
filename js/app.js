let storedNum;
let numTwo;
let currentNum;
let currentOp;

const prevSum = document.getElementById("prev-sum");
const calcScreen = document.getElementById("sum-text");
const delBtn = document.getElementById("del-btn");
const clearBtn = document.getElementById("clear-btn");

const oneBtb = document.getElementById("1-btn");
const twoBtn = document.getElementById("2-btn");
const threeBtn = document.getElementById("3-btn");
const fourBtn = document.getElementById("4-btn");
const fiveBtn = document.getElementById("5-btn");
const sixBtn = document.getElementById("6-btn");
const sevenBtn = document.getElementById("7-btn");
const eightBtn = document.getElementById("8-btn");
const nineBtn = document.getElementById("9-btn");
const zeroBtn = document.getElementById("0-btn");

const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const multiBtn = document.getElementById("multi-btn");
const divBtn = document.getElementById("div-btn");
const pointBtn = document.getElementById("point-btn");
const equalsBtn = document.getElementById("eq-btn");

const parseStrings = (num1, num2) => {
    if (num1.includes(".") && num2.includes(".")) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    } else if (num1.includes(".")) {
        num1 = parseFloat(num1)
    } else if (num2.includes(".")) {
        num2 = parseFloat(num2);
    } else {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
    }
    return [num1, num2];
}

const calculate = (num1, num2, func) => {
    [num1, num2] = parseStrings(num1, num2)
    const res = func(num1, num2);
    return res;
}

const add = (num1, num2) => {
    return num1 + num2;
}

const minus = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2
}

zeroBtn.addEventListener("click", () => {
    if (currentNum === undefined) {
        currentNum = undefined;
        calcScreen.innerHTML = "0";
    } else {
        currentNum = currentNum.concat("0");
        calcScreen.innerHTML = currentNum;
    }
})

oneBtb.addEventListener("click", () => {
    if (currentNum === undefined) {
        currentNum = "1";
    } else {
        currentNum = currentNum.concat("1");
    }
    calcScreen.innerHTML = currentNum;
})

twoBtn.addEventListener("click", () => {
    if (currentNum === undefined) {
        currentNum = "2";
    } else {
        currentNum = currentNum.concat("2");
    }
    calcScreen.innerHTML = currentNum;
})

threeBtn.addEventListener("click", () => {
    if (currentNum === undefined) {
        currentNum = "3";
    } else {
        currentNum = currentNum.concat("3");
    }
    calcScreen.innerHTML = currentNum;
})

fourBtn.addEventListener("click", () => {
    if (currentNum === undefined) {
        currentNum = "4";
    } else {
        currentNum = currentNum.concat("4");
    }
    calcScreen.innerHTML = currentNum;
})

fiveBtn.addEventListener("click", () => {
    if (currentNum === undefined) {
        currentNum = "5";
    } else {
        currentNum = currentNum.concat("5");
    }
    calcScreen.innerHTML = currentNum;
})

sixBtn.addEventListener("click", () => {
    if (currentNum === undefined) {
        currentNum = "6";
    } else {
        currentNum = currentNum.concat("6");
    }
    calcScreen.innerHTML = currentNum;
})

sevenBtn.addEventListener("click", () => {
    if (currentNum === undefined) {
        currentNum = "7";
    } else {
        currentNum = currentNum.concat("7");
    }
    calcScreen.innerHTML = currentNum;
})

eightBtn.addEventListener("click", () => {
    if (currentNum === undefined) {
        currentNum = "8";
    } else {
        currentNum = currentNum.concat("8");
    }
    calcScreen.innerHTML = currentNum;
})

nineBtn.addEventListener("click", () => {
    if (currentNum === undefined) {
        currentNum = "9";
    } else {
        currentNum = currentNum.concat("9");
    }
    calcScreen.innerHTML = currentNum;
})

pointBtn.addEventListener("click", () => {
    if (currentNum === undefined) {
        currentNum = "0.";
    } else if (currentNum.includes(".")) {
    } else {
        currentNum = currentNum.concat(".");
    }
    calcScreen.innerHTML = currentNum;
})

plusBtn.addEventListener('click', () => {
    currentOp = "add";
    storedNum = currentNum;
    currentNum = undefined;
    prevSum.innerHTML = `${storedNum} +`;
    calcScreen.innerHTML = "0";
})

minusBtn.addEventListener('click', () => {
    currentOp = "subtract";
    storedNum = currentNum;
    currentNum = undefined;
    prevSum.innerHTML = `${storedNum} -`;
    calcScreen.innerHTML = "0"
})

multiBtn.addEventListener("click", () => {
    currentOp = "multiply";
    storedNum = currentNum;
    currentNum = undefined;
    prevSum.innerHTML = `${storedNum} *`;
    calcScreen.innerHTML = "0"
})

divBtn.addEventListener("click", () => {
    currentOp = "divide";
    storedNum = currentNum;
    currentNum = undefined;
    prevSum.innerHTML = `${storedNum} /`;
    calcScreen.innerHTML = "0"
})

equalsBtn.addEventListener('click', () => {
    if (currentOp === "add") {
        let res = calculate(storedNum, currentNum, add);
        prevSum.innerHTML = res.toString();
        calcScreen.innerHTML = "0";
        currentNum = undefined;
    } else if (currentOp === "subtract") {
        let res = calculate(storedNum, currentNum, minus);
        prevSum.innerHTML = res.toString();
        calcScreen.innerHTML = "0";
        currentNum = undefined;
    } else if (currentOp === "multiply") {
        let res = calculate(storedNum, currentNum, multiply);
        prevSum.innerHTML = res.toString();
        calcScreen.innerHTML = "0";
        currentNum = undefined;
    } else if (currentOp === "divide") {
        let res = calculate(storedNum, currentNum, divide);
        prevSum.innerHTML = res.toString();
        calcScreen.innerHTML = "0";
        currentNum = undefined;
    }
})

delBtn.addEventListener('click', () => {
    if (currentNum === undefined) {
        alert("Nothing to delete");
    } else if (currentNum > 0) {
        currentNum = currentNum.replace(/.$/, "");
        if (currentNum.length === 0) {
            calcScreen.innerHTML = "0";
            currentNum = undefined;
        } else {
            calcScreen.innerHTML = currentNum;
        }
    }
})
clearBtn.addEventListener('click', () => {
    currentNum = undefined;
    calcScreen.innerHTML = "0"
    prevSum.innerHTML = "";
})