/*NEED TO KEEP IN MIND
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.

$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(bio.name) || function(){};
    $('#name').html(iName);  
  });
});
*/

//.append() internationalizeButton to the main div.
//create a function called inName() that takes a string of two names and
//returns an internationalized version that looks like so: Helen SHIU.

//.append() internationalizeButton to the main div.
$('#main').append(internationalizeButton);


//create a function called inName() that takes a string of two names and
function inName(iName){
    var myNameArray = iName.split(" ");
    var internationalizedName = iName.replace("Shiu", myNameArray[1].toUpperCase());
    $('#name').html(internationalizedName);
};
