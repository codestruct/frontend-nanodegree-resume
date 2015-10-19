//$("#main").append(["Helen Shiu!"]);

/*
var awesomeThoughts = "I am Helen and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);
*/

/*
Need to create four objects:
Work
Project
Bio
Education
Use:
["Bracket Notation"] or
Dot.Notation or
"Object":"Literal"
*/

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
	"welcome" : "Hello, I am Helen and I am all about creating good online user experience.",
	"skills" : ["Visual Design", "HTML", "CSS", "Responsive Design", "BootStrap", "Wireframe"],
	"bioPict" : "images/Half-100X100.jpg"
};

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
}

//Create project object
var projects = {
    "project": [
        {
            "title": "Bootstrap Responsive Website",
            "date": "2013",
            "description": "Use Bootstrap to create demo website to demonstrate responsiveness across different devices.",
            "image": {
                "src": "images/Bootstrap_Responsive_Web.jpg",
                "name": "Restaurant Website"
            }
        },
        {
            "title": "Single-Page Landing Page",
            "date": "2015",
            "description": "A fast deployment of a landing page built with Bootstrap.",
            "image": {
                "src": "images/xmas_780x780.jpg",
                "name": "Landing Page"
            }
        },
        {
            "title": "WordPress Website Design Development",
            "date": "2015",
            "description": "Use WordPress to create a demo site.",
            "image": {
                "src": "Website_Design_Development.jpg",
                "name": "WordPress Website"
            }
        }
    ]
}



//Create two new variables for my Name and Role

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedContact = HTMLcontactGeneric.replace("%contact%", "eMail").replace("%data%", bio.contact.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.phone);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
//var formattedSchool = HTMLschoolName.replace("%data%", education.schools.name(0));
//var formattedPosition = HTMLworkTitle.replace("%data%", work.position);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedPict = HTMLbioPic.replace("%data%", bio.bioPict);
//Format my Name and Role and either append or prepend to the page
$("#header").prepend(formattedName).append(formattedRole);
$("#header").append(formattedPict);
$("#header").append(formattedWelcome);
$("#header").append(formattedContact);
$("#header").append(formattedMobile);
$("#header").append(formattedLocation);
//$("#header").append(formattedSchool);
//$("#header").append(formattedPosition);
//$("#header").append(HTMLskillsStart);
//$("#header").append(formattedSkills);


