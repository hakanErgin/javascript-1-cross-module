// data (variables)
var a = 10;
var b = 5;

// functions
function logAB(varA, varB) {
    console.log("a: " + varA);
    console.log("b: " + varB);
};

function do_math(varA, varB, func) {
    console.log("The result of the calculation is: " + func(varA, varB));
};

function add(varA, varB) {
    return varA + varB;
};

function subtract(varA, varB) {
    return varA - varB;
};

function multiply(varA, varB) {
    return varA * varB;
};

function divide(varA, varB) {
    return varA / varB;
};
