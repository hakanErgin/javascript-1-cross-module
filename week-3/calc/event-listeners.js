//handlers
function display_handler() {
    logAB(a, b)
}

function add_handler() {
    do_math(a, b, add);
}

function subt_handler() {
    do_math(a, b, subtract);
}

function multp_handler() {
    do_math(a, b, multiply);
}

function divide_handler() {
    do_math(a, b, divide);
}

function new_a_handler() {
    var new_a = Number(document.getElementById("newAbtn").value);
    a = new_a;
    console.log(`a: ${a}`)
}
function new_b_handler() {
    var new_b = Number(document.getElementById("newBbtn").value);
    b = new_b;
    console.log(`b: ${b}`)
}

// event listeners
let print_values_button = document.getElementById("logABbtn");
print_values_button.addEventListener("click", display_handler)

let button_add_result = document.getElementById("addbtn");
button_add_result.addEventListener("click", add_handler);

let button_subtract_result = document.getElementById("subtractbtn");
button_subtract_result.addEventListener("click", subt_handler);

let button_multiply_result = document.getElementById("multiplybtn");
button_multiply_result.addEventListener("click", multp_handler);

let button_divide_result = document.getElementById("dividebtn");
button_divide_result.addEventListener("click", divide_handler);

var change_a = document.getElementById("change-a");
change_a.addEventListener("click", new_a_handler);

var chance_b = document.getElementById("change-b");
chance_b.addEventListener("click", new_b_handler);
