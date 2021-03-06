/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/
/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<small>%data%</small>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact% </span><span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text"><span class="glyphicon glyphicon-phone"></span> </span><span>%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text"><span class="glyphicon glyphicon-envelope"></span> </span><span>%data%</span></li>';
var HTMLtwitter = '<li><span class="orange-text">twitter</span><span>%data%</span></li>';
var HTMLgithub = '<li><span class="orange-text">github</span><span>%data%</span></li>';
var HTMLblog = '<li><span class="orange-text">blog</span><span>%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text"><span class="glyphicon glyphicon-map-marker"></span> </span><span>%data%</span></li>';

var HTMLresume = '<li class="flex-item"><span class="orange-text"><span class="glyphicon glyphicon-save"></span> </span><span><a class="resume" href="%data%" download="filename">resume</a></span></li>';


var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance</h3><div class="skillsGroup"></div>';
var HTMLskills = '<span class="skills">%data% <span class="glyphicon glyphicon-star"></span> </span>';

var HTMLworkStart = '<div class="panel-group work-entry" id="accordion" role="tablist" aria-multiselectable="true"></div><!-- /.panel-group .work-entry -->';
var HTMLworkPanel = '<div class="panel panel-default"><div class="panel-heading work" role="tab"><h4 class="panel-title work"><a role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="true"></a></h4></div><!-- /.panel-heading .work --></div><!-- /.panel --><div class="panel-collapse collapse" role="tabpanel"><div class="panel-body work-description"></div><!-- /.panel-body .work-description --></div><!-- /#collapse -->';
var HTMLworkEmployer = '<span class="workEmployer">%data%</span>';
var HTMLworkTitle = '<h3 class="workTitle text-uppercase"><span>%data%</span></h3>';
var HTMLworkDates = '<span class="date-text"> &ndash; %data%</span>';
var HTMLworkLocation = '<span class="location-text"> &ndash; %data%</span>';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectFilter = '<div class="projectFilter"><a href="#" data-filter="*" class="current">All Categories</a><a href="#" data-filter=".design">Design</a><a href="#" data-filter=".web">Web</a></div>';
var HTMLprojectPosts = '<div class="projectContainer"></div><!—- /.projectContainer -->';
var HTMLprojectPost = '<div class="item col-sm-6 col-md-4 col-lg-4"><a href="#" data-toggle="modal"></a></div>';
var HTMLprojectModal = '<div class="modal fade" id="myModal-1 tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="myModalLabel_1"></h4><p></p></div><!--/.modal-header--><div class="modal-body"></div><!--.modal-body--><div class="modal-footer"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Close &times;</span></button></div><!--/.modal-footer--></div><!--/.modal-content--></div><!--/.modal-dialog--></div><!--/.modal-->';
var HTMLprojectModalPic = '<img src="%data%" class="modalPict img-responsive">';
var HTMLprojectTitle = '<h4><span>%data%</span></h4>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img class="img-responsive" src="%data%">';

var HTMLeducationStart = '<div class="education-entry"></div>';
var HTMLeducationPanel = '<div class="col-sm-4 col-md-4 col-lg-4"></div>'
var HTMLeducationType = '<h3 class="education">%data%</h3>'
var HTMLschoolName = '<h3>%data%</h3>';
var HTMLschoolDegree = '<h4>%data%</h4>';
var HTMLschoolLocation = '<span class="location-text">%data% &ndash;';
var HTMLschoolDates = ' %data%</span>';
var HTMLschoolURL = '<div class="learn"><a href="" target="_blank">Learn more about <mark>%data%</mark></a></div>';

var HTMLelectedName = '<h3>%data%</h3>';
var HTMLelectedCourse = '<h4>%data%</h4>';
var HTMLelectedCert = '<h4>%data%</h4>';
var HTMLelectedLicense = '<p>%data%</p>';
var HTMLelectedLocation = '<span class="location-text">%data% &ndash;';
var HTMLelectedDates = ' %data%</span>';
var HTMLelectedURL = '<div class="learn"><a href="" target="_blank">Learn more about <mark>%data%</mark></a></div>';

var HTMLonlineSchool = '<h3>%data%</h3>';
var HTMLonlineCourse = '<h4>%data%</h4>';
var HTMLonlineAccess = '<span class="location-text">%data% &ndash;';
var HTMLonlineDates = ' %data%</span>';
var HTMLonlineURL = '<div class="learn"><a href="" target="_blank">Learn more about <mark>%data%</mark></a></div>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
    $('button').click(function() {
        var iName = inName() || function() {};
        $('#name').html(iName);
    });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    // your code goes here!
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        //disableDefaultUI: true,
        center: new google.maps.LatLng(43.653226, -79.3831843),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    /* 
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js. 
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contact.location);

        // iterates through school locations and appends each location to
        // the locations array
        for (var school in education.schools) {
            locations.push(education.schools[school].location);
        }

        // iterates through work locations and appends each location to
        // the locations array
        for (var job in work.jobs) {
            locations.push(work.jobs[job].location);
        }

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
            infoWindow.open(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        for (var place in locations) {

            // the search request object
            var request = {
                query: locations[place]
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

//Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});