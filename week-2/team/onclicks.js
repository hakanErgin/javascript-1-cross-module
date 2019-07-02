var team_name_button = document.getElementById("teamName");
team_name_button.onclick = function() {
        printTeamName(teamName);
        }
var team_member_button = document.getElementById("teamMembers");
team_member_button.onclick = function() {
        printTeamMember(teamMembers);
        }
var team_intro_button = document.getElementById("introduction");
team_intro_button.onclick = function() {
        printIntroduction(teamName,teamMembers)
        }