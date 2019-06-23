# Week 2

* **Home page**:
    * _data_: **project** object with `"name"`, `"link"` & `"description"` of website the team is going to recreate
    * _functions_: A function that loops over the object, printing each property
* **Team page**: 
    * _data_: team name, array of members
    * _functions_: print team name, print team members by looping over array, function that does both
* **Calculator page**: 
    * _data_: var a, var b
    * _functions_: add, subtract, multiply, divide, a higher-order function that does math

> try writing your data and functions separately, before connecting them to your HTML


---

##  Check-Off


|  | your Emoji | your comments | coach emoji | coach comments |
| --- | --- | --- | --- | --- |
| Home page | | | | |
| Team page | | | | |
| Calc page | | | | |


---

## Home Page 

* ./index.html
* ./data-&-functions.js

| __a user can ...__ | _html_ | _onclick's_ | _functions_ | _data_ |
| --- | --- | --- | --- | --- |
| _visit the home page_ | a project h1, some greetings, header/navbar & footer | none | none | none |
| _print project details to the console_ | a "print" button with unique id attribute | one that makes the "print" button call *print\_deets* with the project object | print_deets: takes in an object and and loops over it.  use template literals and bracket access | project object with 3 properties: name (string), link (string), description (string) |
| _navigate to the team page_ | relative link to team.html in the header | none | none | none |
| _navigate to the calculator_ | relative link to calc.html in the header | none | none | none |


[TOP](#week-2)

---

## Team Page (

* ./team/index.html
* ./team/data-&-functions.js

| __a user can ...__ | _html_ | _onclick's_ | _functions_ | _data_ |
| --- | --- | --- | --- | --- |
| _visit the team page_ | h1, greeting, header/navbar & footer | none | none | none |
| _navigate back to home_ | relative link to index.html in header | none | none | none |
| _navigate to calc_ | relative link to calc/index.html in header | none | none | none |
| _print team name to the console_ | "print" button with unique id | one that makes the "print" button call "print_team_name" with the team name  | print_team_name: take a string as an argument and logs it in a greeting (using template literals) | team_name variable, string. |
| _print team members to the console_ | button with unique id | call "print_team_members" with the array of team names | print_team_members: takes an array, loops over the array printing each entry (using template literals) | an array of team member names (strings) |
| _print a complete introduction to the console_ | button with unique id | call "introduce" with the team name and members | introduce: takes a string and an array, calls the team name function with the string, and the team members function with the array | none |

[TOP](#week-2)

---

## Calculator Page (calc.html):

* ./calc/index.html
* ./calc/data-&-functions.js

| __a user can ...__ | _html_ | _onclick's_ | _functions_ | _data_ |
| --- | --- | --- | --- | --- |
| _visit the calculator_ | h1, greeting, header/navbar & footer | none | none | none |
| _navigate to home page_ | relative link to index.html | none | none | none |
| _navigate to team_ | relative link to team/index.html in header | none | none | none |
| _log `a` and `b`_ | button with unique id | calls "print_vals" with ```a``` and ```b``` | print_vals: takes in `a` and `b`, logs them to the console | var a, var b.  both hardcoded numbers, you'll learn to change the values later |
| _do math function_ ('infrastructure'. a user can't yet do anything) | none | none | do_math: takes in two numbers & a function.  calls the function with the numbers. prints the result | none |
| _add_ | button with unique id | call ```do_math(a, b, add);``` | add: takes in a & b, adds them, returns the result | none |
| _subtract_ | button with  unique id | call ```do_math(a, b, subtract);``` | subtract: takes in a & b, subtracts them, returns the result | none |
| _multiply_ | button with  unique id | call ```do_math(a, b, multiply);``` | multiply: takes in a & b, multiplies them, returns the result | none |
| _divide_ | button with  unique id | call```do_math(a, b, divide);``` | divide: takes in a & b, divides them, returns the result | none |


[TOP](#week-2)

---

## Resources

functions as arguments exercises

[TOP](#week-2)

___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg" width="100" height="100"></img></a>
