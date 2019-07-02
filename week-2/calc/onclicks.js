// onclick's
let print_values_button = document.getElementById("logABbtn");
print_values_button.onclick = function () {
    logAB(a, b);
}

let button_add_result = document.getElementById("addbtn");
button_add_result.onclick = function () {
    do_math(a, b, add);
}

let button_subtract_result = document.getElementById("subtractbtn");
button_subtract_result.onclick = function () {
    do_math(a, b, subtract);
}

let button_multiply_result = document.getElementById("multiplybtn");
button_multiply_result.onclick = function () {
    do_math(a, b, multiply);
}

let button_divide_result = document.getElementById("dividebtn");
button_divide_result.onclick = function () {
    do_math(a, b, divide);
}