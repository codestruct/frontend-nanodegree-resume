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
			"type" : "Graphic Design",
			"name" : "OCAD University",
			"city" : "Toronto, Canada",
			"location" : "100 McCaul Street, Toronto, Canada",
			"degree" : "Bachelor of Design (BDes)",
			"dates" : 2007,
			"url" : "http://www.ocadu.ca/academics/undergraduate/graphic-design.htm"
		}],
	"elected" : [{
			"type" : "UX Design",
			"name" : "Akendi",
			"city" : "Toronto, Canada",
			"location" : "30 Duncan Street, Toronto, Canada",
			"cert" : "User Experience Designer Certification",
			"course" : "CXD",
			"license" : "CXD-901-15-129",
			"dates" : 2015,
			"url" : "http://www.akendi.ca/ux-training/"
		}],
	"onlineCourses" : [{
			"type" : "Front-End Development",
			"school" : "Udacity",
			"title" : "Front-End Web Developer Nanodegree",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}]
};
education.display = function(){
	$('#education').append(HTMLeducationStart);

	//check to see if it is schools, certifications, or onlineCourses
		for(var key in education){
	    	if(key == "schools"){

	    		//Add a panel for each education type
	    		$('.education-entry').append(HTMLeducationPanel);
	    		$('.education-entry .col-sm-4').addClass('graphic');

	    		var mySchools = education.schools;
				//Write a for-in loop that iterates over all the schools in my education.
				for (var i=0; i<education.schools.length; i++) {
					for(var key in education.schools){
						var schoolItem = education.schools[i];
						var formattededucationType = HTMLeducationType.replace('%data%', schoolItem.type);					
					 	var formattedschoolName = HTMLschoolName.replace('%data%', schoolItem.name);
					 	var formattedschoolLocation = HTMLschoolLocation.replace("%data%", schoolItem.city);	
					 	var formattedschoolDates = HTMLschoolDates.replace('%data%', schoolItem.dates);
					 	var formattedschoolDegree = HTMLschoolDegree.replace('%data%', schoolItem.degree);
					 	var formattedschoolURL = HTMLschoolURL.replace('%data%', schoolItem.name);
					 	var schoolURL = schoolItem.url;
					}
				$('.graphic').append(formattededucationType);
			 	$('.graphic:last').append(formattedschoolName);
			 	$('.graphic:last').append(formattedschoolDegree); 	
			 	$('.graphic:last').append(formattedschoolLocation);
			 	$('.graphic:last').append(formattedschoolDates);
			 	$('.graphic:last').append(formattedschoolURL);
			 	$('a:last').attr('href', schoolURL);
				}
	    	}
	    	else if(key == "elected"){

	    		//Add a panel for each education type
	    		$('.education-entry').append(HTMLeducationPanel);
	    		$('.col-sm-4:last').addClass('ux');

	    		var myElected = education.elected;
				//Write a for-in loop that iterates over all the elected in my education.
				for (var i=0; i<education.elected.length; i++) {
					for(var key in education.elected){
						var electedItem = education.elected[i];
						var formattededucationType = HTMLeducationType.replace('%data%', electedItem.type);
					 	var formattedelectedName = HTMLelectedName.replace('%data%', electedItem.name);
					 	var formattedelectedLocation = HTMLelectedLocation.replace("%data%", electedItem.city);	
					 	var formattedelectedDates = HTMLelectedDates.replace('%data%', electedItem.dates);
					 	var formattedelectedCourse = HTMLelectedCourse.replace('%data%', electedItem.course);
					 	var formattedelectedCert = HTMLelectedCert.replace('%data%', electedItem.cert);
					 	var formattedelectedLicense = HTMLelectedLicense.replace('%data%', electedItem.license);
					 	var formattedelectedURL = HTMLelectedURL.replace('%data%', electedItem.name);
					 	var electedURL = electedItem.url;
					}
				$('.ux').append(formattededucationType);
			 	$('.ux:last').append(formattedelectedName);
			 	$('.ux:last').append(formattedelectedCourse);
			 	$('.ux:last').append(formattedelectedCert);
			 	$('.ux:last').append(formattedelectedLicense);
			 	$('.ux:last').append(formattedelectedLocation);
			 	$('.ux:last').append(formattedelectedDates);
			 	$('.ux:last').append(formattedelectedURL);
			 	$('a:last').attr('href', electedURL);
				}
	    	}
	    	else if(key == "onlineCourses"){

	    		//Add a panel for each education type
	    		$('.education-entry').append(HTMLeducationPanel);
	    		$('.col-sm-4:last').addClass('development');

	    		//Write a for-in loop that iterates over all the onlineCourses in my education.
				for (var i=0; i<education.onlineCourses.length; i++) {
					for(var key in education.onlineCourses){
						var onlineCoursesItem = education.onlineCourses[i];
						var formattedonlineType = HTMLeducationType.replace('%data%', onlineCoursesItem.type);						
					 	var formattedonlineCoursesSchool = HTMLonlineSchool.replace('%data%', onlineCoursesItem.school);
					 	var formattedonlineCoursesTitle = HTMLonlineClasses.replace('%data%', onlineCoursesItem.title);					 	
					 	var formattedonlineCoursesDates = HTMLonlineDates.replace('%data%', onlineCoursesItem.dates);
					 	var formattedonlineURL = HTMLonlineURL.replace('%data%', onlineCoursesItem.school);
					 	var onlineURL = onlineCoursesItem.url;
					}
			 	$('.development:last').append(formattedonlineType);
			 	$('.development:last').append(formattedonlineCoursesSchool);
				$('.development:last').append(formattedonlineCoursesTitle); 	
			 	$('.edevelopment:last').append(formattedonlineCoursesDates);
			 	$('.development:last').append(formattedonlineURL);
			 	$('a:last').attr('href', onlineURL);			 	
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
            },
            "modalPict" : "images/bootstrap_big.jpg"
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
            },
            "modalPict" : "images/hofland_xmas_big.jpg"
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
            },
            "modalPict" : "images/hofalnd_corporate_big.jpg"
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
            },
            "modalPict" : "images/Email_Campaign_Design.png"
        },
        {
            "title": "Infographic Design",
            "dates": "2015",
            "type" : "design",
            "description": "Created infographic design that can be divided by regions and placed on Facebook for different markets. ",
            "images": {
                "src": "images/infographic_T.jpg",
                "name": "Infographic Design",
                "alt" : "Infographic Design"
            },
            "modalPict" : "images/infographic_big.jpg"
        },
        {
            "title": "Corporate Branding & Web Design",
            "dates": "2012",
            "type" : "design",
            "description": "Designed the corporate branding and website information architecture.",
            "images": {
                "src": "images/webiforum_T.jpg",
                "name": "Corporate Branding & Web Design",
                "alt" : "Corporate Branding & Web Design"
            },
            "modalPict" : "images/webiforum_big.jpg"
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
		var modalNo = '#myModal-' + projectIDNo;
		var modalIdNo = 'myModal-' + projectIDNo;
		var modalAria = 'myLargeModalLabel-' + projectIDNo;

		$('.item:last > a').attr('data-target', modalNo);
		$('.item:last').attr('id', projectIDNo);

		for(var key in myProjects){
			var projectItem = myProjects[i];
		 	var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projectItem.title);
		 	var formattedprojectDates = HTMLprojectDates.replace('%data%', projectItem.dates);
		 	var formattedprojectDescription = HTMLprojectDescription.replace('%data%', projectItem.description);
		 	var formattedprojectImage = HTMLprojectImage.replace('%data%', projectItem.images.src);
		 	var formattedprojectModalPic = HTMLprojectModalPic.replace('%data%', projectItem.modalPict);
		 	var addProjectType = projectItem.type;
		 	var addImageAlt = projectItem.images.alt;
		}

	$('.item:last').addClass(addProjectType);
 	$('.item:last > a').append(formattedProjectTitle);
 	$('.item:last > a').append(formattedprojectImage);
	$('.item:last > a > img').attr('alt', addImageAlt);
 	$('.item:last').append(HTMLprojectModal);
 	$('.modal:last').attr('id', modalIdNo);
 	$('.modal:last').attr('aria-labelledby', modalAria);
 	$('h4:last').html(projectItem.title);
 	$('p:last').html(projectItem.description);
 	$('.modal-body:last').append(formattedprojectModalPic);
	}
}
projects.display();



//To see a map
$('#mapDiv').append(googleMap);



