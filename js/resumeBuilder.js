'use strict';

//Create bio object
var bio = {
	"name":"Helen Shiu",
	"role":"Designer & Developer",
	"contact" : {
		"email" : "hello@helenshiu.com",
		"phone" : "4166288054",
		"github" : "https://github.com/quilt9",
		"twitter" : "@quilt9design",
		"linkedin" : "https://www.linkedin.com/in/helenshiu",
		"location" : "Toronto, Canada"
		},
	"welcome" : "Hello, my name is Helen. I am an UI Designer and Developer who is all about creating good online user experience.",
	"skills" : ["Visual Design", "HTML", "CSS", "Responsive Design", "BootStrap", "Wireframe"],
	"bioPict" : "images/Half-100X100.jpg"
};
bio.display = function(){
 	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	var formattedContact = HTMLcontactGeneric.replace("%contact%", "eMail").replace("%data%", bio.contact.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contact.phone);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
	var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
	var formattedSkills = HTMLskills.replace("%data%", bio.skills);
	var formattedPict = HTMLbioPic.replace("%data%", bio.bioPict);
	$("#header").prepend(formattedName);
	$('h1#name').append(formattedRole);
	$("#header").append(formattedPict);
	$("#header").append(formattedWelcome);
	$("#header").append(HTMLskillsStart);
	$("ul#skills").append(formattedSkills);
	$("ul#topContacts").append(formattedContact);
	$("ul#topContacts").append(formattedMobile);
	$("ul#topContacts").append(formattedLocation);
}
bio.display();

//Create work object
var work = {
	"jobs" : [
		{
			"employer" : "Hofland",
			"title" : "Graphic Design & Web Development Specialist",
			"location" : "Toronto, Canada",
			"dates" : "Dec, 2014-Aug, 2015",
			"description" : "Executed print, event and online graphic materials using the latest Adobe CC."
		},
		{
			"employer" : "Quilt9",
			"title" : "Independent Graphic Designer",
			"location" : "Toronto, Canada",
			"dates" : "Dec, 2014-Aug, 2015",
			"description" : "Created online marketing banners, e-blast campaign, infographic, graphic elements for social marketing campaigns on mobile platform and wireframe with minimal supervision."	
		}
	]
};
/* 
1. Write a for-in loop that iterates over all the jobs in my work objects and,
2. append a new HTMLworkStart element for each one and,
3. formats each job's employer with HTMLworkEmployer and each job title with HTMLworkTitle and,
4. append a concatenation of employer and title each to the element with class work-entry:last.
*/

work.display = function() {
	var myJobs = work.jobs;
	var jobItems = work.jobs.length;

	//2. append a new HTMLworkStart element for each one and,
	$('#workExperience').append(HTMLworkStart);

    //1. Write a for-in loop that iterates over all the jobs in my work objects and,
    for (var i=0; i<jobItems; i++) {

        var jobItem = myJobs[i];

    	for(var key in jobItem) {
            //3. formats each job's employer with HTMLworkEmployer and each job title with HTMLworkTitle and,
            var formattedEmployer = HTMLworkEmployer.replace("%data%", jobItem.employer);
		    var formattedTitle = HTMLworkTitle.replace("%data%", jobItem.title);	
	      	var formattedDates = HTMLworkDates.replace("%data%", jobItem.dates);	
	      	var formattedLocation = HTMLworkLocation.replace("%data%", jobItem.location);	
	      	var formattedDescription = HTMLworkDescription.replace("%data%", jobItem.description);
	      	//4. append a concatenation of employer and title each to the element with class work-entry:last.
       		var employerTitle = formattedEmployer + formattedTitle;
   		};
	        $('.work-entry:last').append(employerTitle);
	        $('.work-entry:last').append(formattedDates);
	        $('.work-entry:last').append(formattedLocation);
	        $('.work-entry:last').append(formattedDescription);
    }

};
work.display();

//Create project object
var allProjects = {
    "projects": [
        {
            "title": "Bootstrap Responsive Website",
            "dates": "2013",
            "description": "Use Bootstrap to create demo website to demonstrate responsiveness across different devices.",
            "images": {
                "src": "images/Bootstrap_Responsive_Web.jpg",
                "name": "Restaurant Website"
            }
        },
        {
            "title": "Single-Page Landing Page",
            "dates": "2015",
            "description": "A fast deployment of a landing page built with Bootstrap.",
            "images": {
                "src": "images/xmas_780x780.jpg",
                "name": "Landing Page"
            }
        },
        {
            "title": "WordPress Website Design Development",
            "dates": "2015",
            "description": "Use WordPress to create a demo site.",
            "images": {
                "src": "images/Website_Design_Development.jpg",
                "name": "WordPress Website"
            }
            
        }
    ]
};

projects.display = function(){
	var myProjects = allProjects.projects;
	//Write a for-in loop that iterates over all the projects in my projects objects.
	for (var i=0; i<myProjects.length; i++) {
		for(var key in myProjects){
			var projectItem = myProjects[i];
		 	var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projectItem.title);
		 	var formattedprojectDates = HTMLprojectDates.replace('%data%', projectItem.dates);
		 	var formattedprojectDescription = HTMLprojectDescription.replace('%data%', projectItem.description);
		 	var formattedprojectImage = HTMLprojectImage.replace('%data%', projectItem.images.src); 
		}
 	$('#projects:last').append(HTMLprojectStart);
 	$('.project-entry:last').append(formattedProjectTitle);
 	$('.project-entry:last').append(formattedprojectDates);
 	$('.project-entry:last').append(formattedprojectDescription);
 	$('.project-entry:last').append(formattedprojectImage);
	}
}
projects.display();



//Create education object
var education = {
	"schools" : [
		{
			"name" : "OCAD U",
			"city" : "Toronto, Canada",
			"degree" : "BDes",
			"major" : "Communication Design"
		},
		{
			"name" : "Akendi",
			"city" : "Toronto, Canada",
			"cert" : "Certification",
			"course" : "UX Design",
			"license" : "CXD-901-15-129",
			"link" : "http://www.akendi.ca/ux-training/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : 2015,
			"link" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

//To see a map
$('#mapDiv').append(googleMap);

//Create two new variables for my Name and Role


//var formattedSchool = HTMLschoolName.replace("%data%", education.schools.name(0));
//var formattedPosition = HTMLworkTitle.replace("%data%", work.position);

//Format my Name and Role and either append or prepend to the page

//$("#header").append(formattedSchool);
//$("#header").append(formattedPosition);


