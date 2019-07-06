/*   handlers  */
function print_handler() {
    print_deets(projectObject);
}

/*   event listeners  */
var print = document.getElementById("printt");
print.addEventListener("click", print_handler);