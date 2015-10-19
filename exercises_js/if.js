/*
1. Write an if statement that checks whether there are any skills in the bil object.
2. If the if statement evaluates to true, .append() HTMLskillsStart to the div with id=header.
3. Then .append() the skills to the element with id=skills using HTMLskills to format each skill.
*/

var foo = bio.skills.length;

if (foo > 0){
	
	var addSkills = $('#header').append(HTMLskillsStart);
};
	
	for(var i = 0; i < foo; i++) {
    var addSkill = HTMLskills.replace("%data%", bio.skills[i]);
    var skillList = $('ul#skills').append(addSkill);
};
