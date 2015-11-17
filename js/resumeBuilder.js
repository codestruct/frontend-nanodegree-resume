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
		"resume" : "pdf/helen-shiu.pdf",
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
	var formattedContact = HTMLemail.replace("%data%", bio.contact.email);
	var formattedResume = HTMLresume.replace("%data%", bio.contact.resume);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contact.phone);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contact.city);
	var formattedPict = HTMLbioPic.replace("%data%", bio.bioPict);
	$(".navbar-brand").prepend(formattedName);
	$('h1#name').append(formattedRole);
	$(".welcome").append(formattedWelcome);
	$(".welcome").append(HTMLskillsStart);
	$(".bio-info").append(formattedPict);
	$("img.biopic").after($("ul#topContacts").append(formattedMobile));
	$("img.biopic").after($("ul#topContacts").append(formattedContact));
	$("img.biopic").after($("ul#topContacts").append(formattedResume));
	

	var skills = bio.skills;

	for (var i=0; i<skills.length; i++) {

		var skill = skills[i];

		var formattedSkills = HTMLskills.replace("%data%", skill);
		$('.skillsGroup').append(formattedSkills);
	}
	$('.skillsGroup span:last').removeClass('glyphicon glyphicon-star');

}
bio.display();





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
	        $('.panel-title:last > a').append(formattedLocation);	        
	        $('.panel-title:last > a').append(formattedDates);
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
            "title": "eMail Campaign Design for MailChimp",
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



