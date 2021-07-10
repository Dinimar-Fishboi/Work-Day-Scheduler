 //Date and time for the Jumbotron (aka the easy bit)

function displayTime() {
    var currentDay = moment();
    $("#currentDay").text(currentDay.format("dddd, MMMM Do"));
    $("#specificTime").text(currentDay.format("hh:mm:ss a"))
}

setInterval(displayTime, 1000);

// So - there are really 2 main functions happening here.
// One is the colour change indicating we are behind schedule.
// As part of the starter code, we've been given classes to indicate
// at what stage of the project we are at.

// There are .past .present and .future classes given with the CSS file
// that can be changed depending on what time of the day it is, indicating
// that we're looking at a conditional statment based on TIME.

//Two is saving the inputs to the correlating rows (i.e the activity for 4pm is
// only saved to the textarea in the 4pm row rather than ALL of the texareas.)

//$(document).ready(function () {


    $("#eightAM #activityInput").val(localStorage.getItem("eightAM"));
    $("#nineAM #activityInput").val(localStorage.getItem("nineAM"));
    $("#tenAM #activityInput").val(localStorage.getItem("tenAM"));
    $("#elevenAM #activityInput").val(localStorage.getItem("elevenAM"));
    $("#twelvePM #activityInput").val(localStorage.getItem("twelvePM"));
    $("#onePM #activityInput").val(localStorage.getItem("onePM"));
    $("#twoPM #activityInput").val(localStorage.getItem("twoPM"));
    $("#threePM #activityInput").val(localStorage.getItem("threePM"));
    $("#fourPM #activityInput").val(localStorage.getItem("fourPM"));
    $("#fivePM #activityInput").val(localStorage.getItem("fivePM"));
    $("#sixPM #activityInput").val(localStorage.getItem("sixPM"));
    $("#sevenPM #activityInput").val(localStorage.getItem("sevenPM"));
    $("#eightPM #activityInput").val(localStorage.getItem("eightPM"));



   
        $(".saveBtn").on("click", function() {
            console.log("have pressed a button");
            var updateCalendar = $(this).siblings("#activityInput").val();
            console.log(updateCalendar)
            var hourTime = $(this).parent().attr("id");
            localStorage.setItem(hourTime,updateCalendar);
            console.log(hourTime)
        })

//  })

