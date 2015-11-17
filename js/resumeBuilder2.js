'use strict';


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
			"course" : "User Experience Designer Certification",
			"license" : "CXD-901-15-129",
			"dates" : 2015,
			"url" : "http://www.akendi.ca/ux-training/"
		}],
	"onlineCourses" : [{
			"type" : "Front-End Development",
			"school" : "Udacity",
			"course" : "Front-End Web Developer Nanodegree",
			"access" : "Online Study",
			"dates" : "Present",
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
					 	var formattedelectedLicense = HTMLelectedLicense.replace('%data%', electedItem.license);
					 	var formattedelectedURL = HTMLelectedURL.replace('%data%', electedItem.name);
					 	var electedURL = electedItem.url;
					}
				$('.ux').append(formattededucationType);
			 	$('.ux:last').append(formattedelectedName);
			 	$('.ux:last').append(formattedelectedCourse);
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
					 	var formattedonlineCoursesTitle = HTMLonlineCourse.replace('%data%', onlineCoursesItem.course);
					 	var formattedonlineCoursesDates = HTMLonlineDates.replace('%data%', onlineCoursesItem.dates);
					 	var formattedonlineAccess = HTMLonlineAccess.replace('%data%', onlineCoursesItem.access);
					 	var formattedonlineURL = HTMLonlineURL.replace('%data%', onlineCoursesItem.school);
					 	var onlineURL = onlineCoursesItem.url;
					}
			 	$('.development:last').append(formattedonlineType);
			 	$('.development:last').append(formattedonlineCoursesSchool);
				$('.development:last').append(formattedonlineCoursesTitle); 	
			 	$('.development:last').append(formattedonlineAccess);
			 	$('.development:last').append(formattedonlineCoursesDates);			 	
			 	$('.development:last').append(formattedonlineURL);
			 	$('a:last').attr('href', onlineURL);			 	
				}	
	    	}
		}
}
education.display();