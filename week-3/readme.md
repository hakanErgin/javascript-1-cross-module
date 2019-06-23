# Week 3  

* **Home page**:
    * _data_: **project** object with `"name"`, `"link"` & `"description"` of website the team is going to recreate
    * _functions_: A function that loops over the object, printing each property
* **Team page**: 
    * _data_: team name, array of members (users can add to this array)
    * _functions_: print team name, print team members by looping over array, function that does both
* **Calculator page**: 
    * _data_: var a, var b, (users can update these values)
    * _functions_: add, subtract, multiply, divide, a higher-order function that does math

> handlers read from & write to the user. they'll call your data and functions from global scope

---

##  Check-Off


|  | your Emoji | your comments | coach emoji | coach comments |
| --- | --- | --- | --- | --- |
| Home page  | | | | |
| Team page | | | | |
| Calc page | | | | |


---

## Home Page 

* ./index.html
* ./data-&-functions.js
* ./event-listeners.js

| __a user can ...__ | _html_ | _event listeners_ | _handlers_ | _functions_ | _data_ |
| --- | --- | --- | --- | --- | --- |
| _visit the home page_ | a project h1, some greetings, header/navbar & footer | none | none | none | none |
| _print project details to the console_ | a button with a unique id | an onclick listener taking a callback that calls it's handler with the project object | calls "print_deets" with the object as argument | print_deets: takes in an object and and loops over it.  use template literals and bracket access | project object with 3 properties: name (string), link (string), description (string) |
| _navigate to the team page_ | relative link to team.html in the header | none | none | none | none |
| _navigate to the calculator_ | relative link to calc.html in the header | none | none | none | none |



[TOP](#week-2)

---

## Team Page 

* ./team/index.html
* ./team/data-&-functions.js
* ./team/event-listeners.js


| __a user can ...__ | _html_ | _event listeners_ | _handlers_ | _functions_ | _data_ |
| --- | --- | --- | --- | --- | --- |
| _visit the team page_ | h1, greeting, header/navbar & footer | none | none | none | none |
| _navigate back to home_ | relative link to index.html in header | none | none | none | none |
| _navigate to calc_ | relative link to calc/index.html in header | none | none | none | none |
| _print team name to the console_ | button with unique id | a "click" listener to call this handler -> | call "print_team_name" with the team name string | print_team_name: take a string as an argument and logs it in a greeting (using template literals) | team_name variable, string. |
| _print team members to the console_ | button with unique id | event listener "click" to call -> | call "print_team_members" with the team array | print_team_members: takes an array, loops over the array printing each entry (using template literals) | an array of team member names (strings) |
| _print a complete introduction to the console_ | button with unique id | event listener to call -> | call "introduce" with the team name & array | introduce: takes a string and an array, calls the team name function with the string, and the team members function with the array | none |
| _add a team member to array_ | button & input field with unique id's | an event listener to call -> | read the new name from the dom & push it into the team array | none | none |

[TOP](#week-2)

---

## Calculator Page 

* ./calc/index.html
* ./calc/data-&-functions.js
* ./calc/event-listeners.js

| __a user can ...__ | _html_ | _event listeners_ | _handlers_ | _functions_ | _data_ |
| --- | --- | --- | --- | --- | --- |
| _visit the calculator_ | h1, greeting, header/navbar & footer | none | none | none | none |
| _navigate to home page_ | relative link to index.html | none | none | none | none |
| _navigate to team_ | relative link to team/index.html in header | none | none | none | none |
| _log `a` and `b`_ | button with unique id | ev.lis to call -> | calls "print_vals" with ```a``` and ```b``` | print_vals: takes in `a` and `b`, logs them to the console | var a, var b.  both hardcoded numbers, you'll learn to change the values later |
| _change a_ | input & button with unique id's | ev.lis to call -> | reads from input and changes the value of ```a``` | none | none |
| _change b_ | input & button with unique id's | ev.lis to call -> | reads from input and changes the value of ```b``` | none | none |
| _do math function_ ('infrastructure'. a user can't yet do anything) | none | none | none | do_math: takes in two numbers & a function.  calls the function with the numbers. prints the result | none |
| _add_ | button with unique id | ev.lis to call -> | calls "do_math" with ```a```, ```b```, ```add``` | add: takes in a & b, adds them, returns the result | none |
| _subtract_ | button with  unique id | ev.lis to call -> | calls "do_math" with ```a```, ```b```, ```subtract``` | subtract: takes in a & b, subtracts them, returns the result | none |
| _multiply_ | button with  unique id | ev.lis to call -> | calls "do_math" with ```a```, ```b```, ```multiply``` |  multiply: takes in a & b, multiplies them, returns the result | none |
| _divide_ | button with  unique id | ev.lis to call -> | calls "do_math" with ```a```, ```b```, ```divide``` | divide: takes in a & b, divides them, returns the result | none |


[TOP](#week-2)

---

## Resources

* event listeners (addEventListener): [mdn](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), [w3schools](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
* ["functions as arguments" exercises](https://github.com/colevandersWands/function-exercises)
* [truthiness](https://github.com/janke-learning/truthiness)
* [input values are by default "string"](https://stackoverflow.com/questions/27849944/input-value-is-a-string-instead-of-a-number)
    * a JavaScript way to specify input type: [table 1](https://janke-learning.org/arithmetic-coercion/), [table 2](https://janke-learning.org/equalities-coercion/)

[TOP](#week-2)

___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg" width="100" height="100"></img></a>
