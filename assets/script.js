
//Date for the Jumbotron.

var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));

// So - there are really 2 main functions happening here.
// One is the colour change indicating we are behind schedule.
// As part of the starter code, we've been given classes to indicate
// at what stage of the project we are at.

//Two is saving the text onto the main page.