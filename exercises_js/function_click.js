/* 
Use the following code shell to collect x and y click values and pass them
to logClick(x,y);
$(document).click(function(loc)){//code goes here});
*/

//$(document).click() is a jQuery event handler on the page,
//which is a fancy way of saying that it will hold some code that
//runs every time a user clicks on the page.
//The function (that doesn't have a name, making it an anonymous function)
//that gets passed into .click() will be run every time a user clicks on the page.
//loc is jQuery event object.

$( document ).click(function( loc ) {
  x = loc.pageX;
  y = loc.pageY;
  
  logClicks(x,y);
});


