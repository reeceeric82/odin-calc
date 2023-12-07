let numOne;
let numTwo;

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

const calculate = (num1, num2, func) => {
    return func(num1, num2);
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

oneBtb.addEventListener("click", () => {
    calcScreen.innerHTML = "1";
    // create a variable and add each clicked to it so make 43 or 81 etc
})

twoBtn.addEventListener("click", () => {
    calcScreen.innerHTML = "2";
})

equalsBtn.addEventListener('click', (event) => {
    calcScreen.innerHTML = "="
}
)