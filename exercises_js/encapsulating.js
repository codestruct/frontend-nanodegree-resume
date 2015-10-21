/*ENCAPSULATING FUNCTIONS
//Encapsulate display() within the projects object.
//projects.display() should .append() all of your projects information to the projects section.
//start each new project with a HTMLprojectStart.
*/

//create all the variables needed now.
var myProjects = allProjects.projects;
    
//start each new project with a HTMLprojectStart.
$('#projects').append(HTMLprojectStart);


//projects.display() should .append() all of your projects information to the projects section.
var display = function(){

    for(project in myProjects)
    
        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', myProjects[project].title);
        $('.project-entry:last').append(formattedProjectTitle);
        var formattedprojectDates = HTMLprojectDates.replace('%data%', myProjects[project].dates);
        $('.project-entry:last').append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace('%data%', myProjects[project].description);
        $('.project-entry:last').append(formattedprojectDescription);
        var formattedprojectImage = HTMLprojectImage.replace('%data%', myProjects[project].image.src);
        $('.project-entry:last').append(formattedprojectImage);
        var formattedprojectDisplay = 
};
display();
                      
/*
//create all the variables needed now.
var myProjects = allProjects.projects;

//start each new project with a HTMLprojectStart.
$('#projects').append(HTMLprojectStart);
    
    //projects.display() should .append() all of your projects information to the projects section.
    function displayProjects()
    {
        for(project in myProjects)
        {
        
            //Encapsulate display() within the projects object.
            var encapsulateDisplay = function()
            {
            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', myProjects[project].title);
            var formattedprojectDates = HTMLprojectDates.replace('%data%', myProjects[project].dates);
            var formattedprojectDescription = HTMLprojectDescription.replace('%data%', myProjects[project].description);
            var formattedprojectImage = HTMLprojectImage.replace('%data%', myProjects[project].image.src);
            }    
            return encapsulateDisplay;
            
            var projectsDisplay = function()
            {
            $('.project-entry').append(formattedProjectTitle);
            $('.project-entry').append(formattedprojectDates);
            $('.project-entry').append(formattedprojectDescription);
            $('.project-entry').append(formattedprojectImage);
            }
            return projectsDisplay;
        }
    };
    displayProjects();






/*

//create all the variables needed now.
var myProjects = allProjects.projects;
var myProjectsLength = allProjects.projects.length;

//find out if there is any projects
if(myProjectsLength>0){

//start each new project with a HTMLprojectStart.
$('#projects').append(HTMLprojectStart);


    //projects.display() should .append() all of your projects information to the projects section.
    function projectsDisplay(){
            
            for(project in myProjects){
            
                //Encapsulate display() within the projects object.
                function encapsulateDisplay(){
                    var formattedProjectTitle = HTMLprojectTitle.replace('%data%', myProjects[project].title);
                    var formattedprojectDates = HTMLprojectDates.replace('%data%', myProjects[project].dates);
                    var formattedprojectDescription = HTMLprojectDescription.replace('%data%', myProjects[project].description);
                    var formattedprojectImage = HTMLprojectImage.replace('%data%', myProjects[project].image.src);
                    
                    return formattedProjectTitle;
                    return formattedprojectDates;
                    return formattedprojectDescription;
                    return formattedprojectImage;
                };
            
            $('.project-entry').append(formattedProjectTitle);
            $('.project-entry').append(formattedprojectDates);
            $('.project-entry').append(formattedprojectDescription);
            $('.project-entry').append(formattedprojectImage);
            };
        };
        
};
    
projectsDisplay();

