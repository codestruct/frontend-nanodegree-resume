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
	"welcome" : "Hello! I am a multi-skilled Web Designer/Front End Developer who thrives in challenging, fast-paced, and team-oriented environment.",
	"skills" : ["HTML 5", "CSS 3", "JavaScript", "Build Responsive Website", "BootStrap", "Create Wireframe","WordPress CMS"],
	"bioPict" : "images/New_Profile_2015_300x300.jpg"
};
bio.display = function(){
 	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", ' ::' + ' ' +bio.role);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	var formattedContact = HTMLcontactGeneric.replace("%contact%", "eMail").replace("%data%", bio.contact.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contact.phone);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contact.city);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills);
	var formattedPict = HTMLbioPic.replace("%data%", bio.bioPict);
	$(".navbar-brand").prepend(formattedName);
	$('h1#name').append(formattedRole);
	$(".welcome").append(formattedWelcome);
	$(".welcome").append(HTMLskillsStart);
	$("ul#skills").append(formattedSkills);
	$(".bio-info").append(formattedPict);
	$("img.biopic").after($("ul#topContacts").append(formattedContact));
	$("img.biopic").after($("ul#topContacts").append(formattedMobile));

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

        //3. format each job by adding a corresponding panel.
        $('.work-entry').append(HTMLworkPanel);
        var panelClassNo = "work"+(i+1);
        var workID = "heading"+(i+1);
        var linkID = "#collapse"+(i+1);
        var ariaControls = "collapse"+(i+1);
        var collapseID = "collapse"+(i+1);
        var ariaLabel = workID;

        $('.panel-default:last').attr('id', panelClassNo);
        $('.panel-heading:last').attr('id', workID);
        $('.panel-title:last > a').attr('href', linkID);
        $('.panel-title:last > a').attr('aria-controls', linkID);
        $('.panel-collapse:last').attr('id', collapseID);
        $('.panel-collapse:last').attr('aria-labelledby', ariaLabel);

    	for(var key in jobItem) {
            //3. formats each job's employer with HTMLworkEmployer and each job title with HTMLworkTitle and,
            var formattedEmployer = HTMLworkEmployer.replace("%data%", jobItem.employer);
		    var formattedTitle = HTMLworkTitle.replace("%data%", jobItem.title);	
	      	var formattedDates = HTMLworkDates.replace("%data%", jobItem.dates);	
	      	var formattedLocation = HTMLworkLocation.replace("%data%", jobItem.city);	
	      	var formattedDescription = HTMLworkDescription.replace("%data%", jobItem.description);
   		};

	        $('.panel-title:last > a').append(formattedTitle);
	        $('.panel-title:last > a').append(formattedEmployer);
	        $('.panel-title:last > a').append(formattedDates);
	        $('.panel-title:last > a').append(formattedLocation);
	        $('.work-description:last').append(formattedDescription);
    }

};
work.display();


//project object -----------------------------------------------------//
var allProjects = {
    "projects": [
        {
            "title": "Bootstrap Responsive Website",
            "dates": "2013",
            "type" : "web",
            "description": "Use Bootstrap to create demo website to demonstrate responsiveness across different devices.",
            "images": {
                "src": "images/Bootstrap_Responsive_Web_T.jpg",
                "name": "Restaurant Website",
                "alt" : "Use Bootstrap to create demo website to demonstrate responsiveness across different devices."
            }
        },
        {
            "title": "Single-Page Landing Page",
            "dates": "2015",
            "type" : "web",
            "description": "A fast deployment of a landing page built with Bootstrap.",
            "images": {
                "src": "images/hofland_xmas.jpg",
                "name": "Landing Page",
                "alt" : "A fast deployment of a landing page built with Bootstrap."
            }
        },
        {
            "title": "WordPress Website Design Development",
            "dates": "2015",
            "type" : "web",
            "description": "Use WordPress to create a demo site.",
            "images": {
                "src": "images/WordPress_Design_Development_T.jpg",
                "name": "WordPress Website",
                "alt" : "Design and develop website on WordPress."
            }
            
        },
        {
            "title": "eCampaign Design for MailChimp",
            "dates": "2015",
            "type" : "design",
            "description": "Design the X'mas eCampaign for MailChimp email distribution.",
            "images": {
                "src": "images/Email_Campaign_Design_2_T.jpg",
                "name": "eCampaign Design for MailChimp",
                "alt" : "eCampaign Design for MailChimp"
            }
            
        },
        {
            "title": "eCampaign Design for MailChimp",
            "dates": "2015",
            "type" : "design",
            "description": "Design the X'mas eCampaign for MailChimp email distribution.",
            "images": {
                "src": "images/Email_Campaign_Design_2_T.jpg",
                "name": "eCampaign Design for MailChimp",
                "alt" : "eCampaign Design for MailChimp"
            }
            
        }
    ]
};

projects.display = function(){

	$('#projects').append(HTMLprojectStart);

	var myProjects = allProjects.projects;
	//Add isotope filter
	$('.project-entry').append(HTMLprojectFilter);
	//Add posts container
	$('.project-entry').append(HTMLprojectPosts);

	//Write a for-in loop that iterates over all the projects in my projects objects.
	for (var i=0; i<myProjects.length; i++) {

		//Add single post div
		$('.projectContainer').append(HTMLprojectPost);

		//Add id for each project post
		var projectIDNo = i+1;
		var modalNo = '#bs-example-modal-lg-' + projectIDNo;
		var modalClass = 'bs-example-modal-lg-' + projectIDNo;

		$('.item:last > a').attr('data-target', modalNo);
		$('.item:last').attr('id', projectIDNo);

		for(var key in myProjects){
			var projectItem = myProjects[i];
		 	var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projectItem.title);
		 	var formattedprojectDates = HTMLprojectDates.replace('%data%', projectItem.dates);
		 	var formattedprojectDescription = HTMLprojectDescription.replace('%data%', projectItem.description);
		 	var formattedprojectImage = HTMLprojectImage.replace('%data%', projectItem.images.src);
		 	var addProjectType = projectItem.type;
		 	var addImageAlt = projectItem.images.alt;
		}

	$('.item:last').addClass(addProjectType);
 	$('.item:last > a').append(formattedProjectTitle);
 	$('.item:last > a').append(formattedprojectImage);
	$('.item:last > a > img').attr('alt', addImageAlt);
	/*
 	$('.item:last > a').append(HTMLprojectModal);
 	$('.carousel:last').attr('id', 'carousel-example-generic');
 	$('.modal:last').attr('id', modalClass);
 	*/
	}
}
projects.display();



//To see a map
$('#mapDiv').append(googleMap);



