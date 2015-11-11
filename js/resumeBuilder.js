'use strict';

//bio object -----------------------------------------------------//
var bio = {
	"name":"Helen Shiu",
	"role":"Design & Develop",
	"contact" : {
		"email" : "hello@helenshiu.com",
		"phone" : "4166288054",
		"github" : "https://github.com/quilt9",
		"twitter" : "@quilt9design",
		"linkedin" : "https://www.linkedin.com/in/helenshiu",
		"city" : "Toronto, Canada",
		"location" : "1048 Broadview ave., Toronto, Canada"
		},
	"welcome" : "Hello, my name is Helen. I am an UI Designer and Developer who is all about creating good online user experience.",
	"skills" : ["Visual Design", "HTML", "CSS", "Responsive Design", "BootStrap", "Wireframe"],
	"bioPict" : "images/Half-100X100.jpg"
};
bio.display = function(){
 	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", '::' + ' ' +bio.role);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	var formattedContact = HTMLcontactGeneric.replace("%contact%", "eMail").replace("%data%", bio.contact.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contact.phone);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contact.city);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills);
	var formattedPict = HTMLbioPic.replace("%data%", bio.bioPict);
	$("header").prepend(formattedName);
	$('h1#name').append(formattedRole);
	$("header").append(formattedPict);
	$("header").append(formattedWelcome);
	$("header").append(HTMLskillsStart);
	$("ul#skills").append(formattedSkills);
	$("ul#topContacts").append(formattedContact);
	$("ul#topContacts").append(formattedMobile);
	$("ul#topContacts").append(formattedLocation);
}
bio.display();


//education object -----------------------------------------------------//
var education = {
	"schools" : [{
			"name" : "OCAD University",
			"city" : "Toronto, Canada",
			"location" : "100 McCaul Street, Toronto, Canada",
			"degree" : "Bachelor of Design (BDes)",
			"major" : "Graphic Design",
			"dates" : 2007,
			"url" : "http://www.ocadu.ca/academics/undergraduate/graphic-design.htm"
		}],
	"elected" : [{
			"name" : "Akendi",
			"city" : "Toronto, Canada",
			"location" : "30 Duncan Street, Toronto, Canada",
			"cert" : "Certification",
			"course" : "UX Design",
			"license" : "CXD-901-15-129",
			"dates" : 2015,
			"url" : "http://www.akendi.ca/ux-training/"
		}],
	"onlineCourses" : [{
			"school" : "Udacity",
			"title" : "Front-End Web Developer Nanodegree",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}]
};
education.display = function(){
	$('#education').append(HTMLschoolStart);

	//check to see if it is schools, certifications, or onlineCourses
		for(var key in education){
	    	if(key == "schools"){
	    		var mySchools = education.schools;
				//Write a for-in loop that iterates over all the schools in my education.
				for (var i=0; i<education.schools.length; i++) {
					for(var key in education.schools){
						var schoolItem = education.schools[i];						
					 	var formattedschoolName = HTMLschoolName.replace('%data%', schoolItem.name);
					 	var formattedschoolLocation = HTMLschoolLocation.replace("%data%", schoolItem.city);	
					 	var formattedschoolDates = HTMLschoolDates.replace('%data%', schoolItem.dates);
					 	var formattedschoolDegree = HTMLschoolDegree.replace('%data%', schoolItem.degree);
					 	var formattedschoolMajor = HTMLschoolMajor.replace('%data%', schoolItem.major);
					 	var formattedonlineURL = HTMLonlineURL.replace('%data%', schoolItem.url);
					}
			 	$('.education-entry:last').append(formattedschoolName);
			 	$('.education-entry:last').append(formattedschoolLocation);
			 	$('.education-entry:last').append(formattedschoolDates);
			 	$('.education-entry:last').append(formattedschoolDegree); 	
			 	$('.education-entry:last').append(formattedschoolMajor);
			 	$('.education-entry:last').append(formattedonlineURL);
				}
	    	}
	    	else if(key == "elected"){
	    		var myElected = education.elected;
				//Write a for-in loop that iterates over all the elected in my education.
				for (var i=0; i<education.elected.length; i++) {
					for(var key in education.elected){
						var electedItem = education.elected[i];
					 	var formattedelectedName = HTMLelectedName.replace('%data%', electedItem.name);
					 	var formattedelectedLocation = HTMLelectedLocation.replace("%data%", electedItem.city);	
					 	var formattedelectedDates = HTMLelectedDates.replace('%data%', electedItem.dates);
					 	var formattedelectedCourse = HTMLelectedCourse.replace('%data%', electedItem.course);
					 	var formattedelectedCert = HTMLelectedCert.replace('%data%', electedItem.cert);
					 	var formattedelectedLicense = HTMLelectedLicense.replace('%data%', electedItem.license);
					 	var formattedonlineURL = HTMLonlineURL.replace('%data%', electedItem.url);
					}
			 	$('.education-entry:last').append(formattedelectedName);
			 	$('.education-entry:last').append(formattedelectedLocation);
			 	$('.education-entry:last').append(formattedelectedDates);
			 	$('.education-entry:last').append(formattedelectedCourse); 	
			 	$('.education-entry:last').append(formattedelectedCert);
			 	$('.education-entry:last').append(formattedelectedLicense);
			 	$('.education-entry:last').append(formattedonlineURL);
				}
	    	}
	    	else if(key == "onlineCourses"){
	    		//Write a for-in loop that iterates over all the onlineCourses in my education.
				for (var i=0; i<education.onlineCourses.length; i++) {
					for(var key in education.onlineCourses){
						var onlineCoursesItem = education.onlineCourses[i];
					 	var formattedonlineCoursesSchool = HTMLonlineSchool.replace('%data%', onlineCoursesItem.school);
					 	var formattedonlineCoursesDates = HTMLonlineDates.replace('%data%', onlineCoursesItem.dates);
					 	var formattedonlineCoursesTitle = HTMLonlineSchool.replace('%data%', onlineCoursesItem.title);
					 	var formattedonlineURL = HTMLonlineURL.replace('%data%', onlineCoursesItem.url);
					}
			 	$('.education-entry:last').append(HTMLonlineClasses);
			 	$('.education-entry:last').append(formattedonlineCoursesSchool);
			 	$('.education-entry:last').append(formattedonlineCoursesDates);
			 	$('.education-entry:last').append(formattedonlineCoursesTitle); 	
			 	$('.education-entry:last').append(formattedonlineURL);
				}	
	    	}
		}
}
education.display();


//work object -----------------------------------------------------//
var work = {
	"jobs" : [
		{
			"employer" : "Hofland",
			"title" : "Graphic Design & Web Development Specialist",
			"city" : "Mississauga, Canada",
			"location" : "6695 Pacific Circle, Mississauga ON, Canada",
			"dates" : "Dec, 2014-Aug, 2015",
			"description" : "Executed print, event and online graphic materials using the latest Adobe CC."
		},
		{
			"employer" : "Quilt9",
			"title" : "Independent Graphic Designer",
			"city" : "Toronto, Canada",
			"location" : "Toronto, Canada",
			"dates" : "Jan, 2011-Nov, 2014",
			"description" : "Created online marketing banners, e-blast campaign, infographic, graphic elements for social marketing campaigns on mobile platform and wireframe with minimal supervision."	
		},
		{
			"employer" : "Bee Networx",
			"title" : "Senior Designer",
			"city" : "Vaughan, Canada",
			"location" : "668 Millway Avenue, Vaughan, Canada",
			"dates" : "Feb, 2010-Dec, 2010",
			"description" : "Created online marketing banners, e-blast campaign, infographic, graphic elements for social marketing campaigns on mobile platform and wireframe with minimal supervision."
		},
		{
			"employer" : "Geminare",
			"title" : "Senior Designer",
			"city" : "Toronto, Canada",
			"location" : "225 Richmond St. West, Toronto, Canada",
			"dates" : "Aug, 2008-Jan, 2010",
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
	      	var formattedLocation = HTMLworkLocation.replace("%data%", jobItem.city);	
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


//project object -----------------------------------------------------//
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



//To see a map
$('#mapDiv').append(googleMap);



