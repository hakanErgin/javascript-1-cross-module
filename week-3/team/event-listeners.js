/*   handlers  */
function name_handler() {
    printTeamName(teamName);
}

function tName_handler() {
    printTeamMember(teamMembers);
}

function intro_handler() {
    printIntroduction(teamName, teamMembers);
}

function new_members_handler() {
    var newMember = document.getElementById("add-member").value;
    teamMembers.push(newMember);
    printTeamMember(teamMembers);
}

/*   event listeners  */
var print = document.getElementById("team-name");
print.addEventListener("click", name_handler);

var print = document.getElementById("team-members");
print.addEventListener("click", tName_handler);

var print = document.getElementById("introduction");
print.addEventListener("click", intro_handler);

var new_member = document.getElementById("add");
new_member.addEventListener("click", new_members_handler);
