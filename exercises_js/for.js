/* 
1. Write a for-in loop that iterates over all the jobs in my work objects and,
2. append a new HTMLworkStart element for each one and,
3. formats each job's employer with HTMLworkEmployer and each job title with HTMLworkTitle and,
4. append a concatenation of employer and title each to the element with class work-entry:last.
*/

var myJobs = work.jobs;
var jobItems = work.jobs.length;

if(jobItems>0) {

//2. append a new HTMLworkStart element for each one and,
$('#workExperience').append(HTMLworkStart);

    //1. Write a for-in loop that iterates over all the jobs in my work objects and,
    for (i=0; i<jobItems; i++) {
        var jobItem = myJobs[i];
        	for(var key in jobItem) {
            //3. formats each job's employer with HTMLworkEmployer and each job title with HTMLworkTitle and,
            var formattedEmployer = HTMLworkEmployer.replace("%data%", jobItem.employer);
			      var formattedTitle = HTMLworkTitle.replace("%data%", jobItem.title);	
			      var formattedDates = HTMLworkDates.replace("%data%", jobItem.dates);	
			      var formattedLocation = HTMLworkLocation.replace("%data%", jobItem.location);	
			      var formattedDescription = HTMLworkDescription.replace("%data%", jobItem.description);
       			};
       	//4. append a concatenation of employer and title each to the element with class work-entry:last.
       	var employerTitle = formattedEmployer + formattedTitle;
	      $('.work-entry:last').append(employerTitle);
	      $('.work-entry:last').append(formattedDates);
	      $('.work-entry:last').append(formattedLocation);
	      $('.work-entry:last').append(formattedDescription);
	          		
    };

};