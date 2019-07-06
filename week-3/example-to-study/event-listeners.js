/*   event listeners  */
function a_button_callback() {
  print_thing(a);
}
var a_button = document.getElementById('call-with-a');
a_button.addEventListener('click', a_button_callback);

function set_b_callback() {
  var new_b_input = document.getElementById('new-b-input');
  var new_b = new_b_input.value;
  b = new_b;
  console.log(b);
}
var set_b_button = document.getElementById('set-b');
set_b_button.addEventListener('click', set_b_callback);

function b_button_callback() {
  print_thing(b);
}
var b_button = document.getElementById('call-with-b');
b_button.addEventListener('click', b_button_callback);

function friendly_button_callback() {
  console.log('hi!');
}
var friendly_button = document.getElementById('friendly-one');
friendly_button.addEventListener('click', friendly_button_callback);