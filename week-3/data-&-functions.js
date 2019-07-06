// data (variables)
var projectObject = {
    name: "Project JavaScript No. 1",
    link: "https://github.com/hakanErgin/javascript-1-cross-module/tree/master/week-1",
    description: "This is my first Project in JavaScript",
}

// functions
function print_deets(placeholder) {
    for (let key in placeholder) {
        console.log(`${key} : ${placeholder[key]}`);
    }
}