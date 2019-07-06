// data (variables)
var teamName = "team name";
var teamMembers = ['aaa', 'bbb', 'aaaa'];

// functions
function printTeamName(strTeamName) {
    console.log("Our team name is: " + strTeamName);
}

function printTeamMember(arrayTeamMembers) {
    var i = 0;
    console.log("Team members:");
    for (i = 0; i < arrayTeamMembers.length; i++) {
        console.log(arrayTeamMembers[i]);
    }
}

function printIntroduction(strTeamName, arrayTeamMembers) {
    printTeamName(strTeamName);
    printTeamMember(arrayTeamMembers);
}