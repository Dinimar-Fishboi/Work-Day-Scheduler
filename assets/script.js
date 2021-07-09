
//Date for the Jumbotron.

var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));

// So - there are really 2 main functions happening here.
// One is the colour change indicating we are behind schedule.
// As part of the starter code, we've been given classes to indicate
// at what stage of the project we are at.

// There are .past .present and .future classes given with the CSS file
// that can be changed depending on what time of the day it is, indicating
// that we're looking at a conditional statment based on TIME.

//Two is saving the text onto the main page.
// Now - about that.... really all we are doing is saving the content to
// the page, regardless of what textarea has been modified.
// So..... we just need to figure out how to save the page.