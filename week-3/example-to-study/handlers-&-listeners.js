/*   handlers  */

function set_a_handler() {
  var new_a_input = document.getElementById('new-a-input');
  var new_a = new_a_input.value;
  a = new_a;
  console.log("a: "+typeof a+", "+a);
}

function a_button_handler() {
  print_thing(a);
}

function set_b_handler() {
  var new_b_input = document.getElementById('new-b-input');
  var new_b = new_b_input.value;
  b = new_b;
  console.log("b: "+typeof b+", "+b);
}

function b_button_handler() {
  print_thing(b);
}

function friendly_button_handler() {
  console.log('hi!');
}


/*   event listeners  */

var set_a_button = document.getElementById('set-a');
set_a_button.addEventListener('click', set_a_handler);

var a_button = document.getElementById('call-with-a');
a_button.addEventListener('click', a_button_handler);

var set_b_button = document.getElementById('set-b');
set_b_button.addEventListener('click', set_b_handler);

var b_button = document.getElementById('call-with-b');
b_button.addEventListener('click', b_button_handler);

var friendly_button = document.getElementById('friendly-one');
friendly_button.addEventListener('click', friendly_button_handler);