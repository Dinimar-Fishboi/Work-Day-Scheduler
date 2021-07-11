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

function hourNow() {
    var thisIsTheTime = moment().format("hha");
    console.log(thisIsTheTime);
}

hourNow();


//Two is saving the inputs to the correlating rows (i.e the activity for 4pm is
// only saved to the textarea in the 4pm row rather than ALL of the texareas.)

    //First off, we summon the inputs that may have been entered previously.

    $("#eightAM #activityInput").val(localStorage.getItem("eightAM"));
    $("#nineAM #activityInput").val(localStorage.getItem("nineAM"));
    $("#tenAM #activityInput").val(localStorage.getItem("tenAM"));
    $("#elevenAM #activityInput").val(localStorage.getItem("elevenAM"));
    $("#twelvePM #activityInput").val(localStorage.getItem("twelvePM"));
    $("#01pm #activityInput").val(localStorage.getItem("01pm"));
    $("#twoPM #activityInput").val(localStorage.getItem("twoPM"));
    $("#threePM #activityInput").val(localStorage.getItem("threePM"));
    $("#fourPM #activityInput").val(localStorage.getItem("fourPM"));
    $("#fivePM #activityInput").val(localStorage.getItem("fivePM"));
    $("#sixPM #activityInput").val(localStorage.getItem("sixPM"));
    $("#sevenPM #activityInput").val(localStorage.getItem("sevenPM"));
    $("#eightPM #activityInput").val(localStorage.getItem("eightPM"));


    // Here is where the setItem code is. the first line indidcates that the function
    // is to execute whenever a save button has been pressed.
   
        $(".saveBtn").on("click", function() {
            console.log("have pressed a button");

            // THIS in the next few lines refers to the button pressed. We are specifically
            // requesting the sibling with the #activityInput id (aka our textarea element)
            // and the parent ID of the button (aka 8AM for example).

            //Once those two pieces of data have variables assigned, then they are then placed
            // in  the local storage under unique keys which can be summoned above.

            var updateCalendar = $(this).siblings("#activityInput").val();
            console.log(updateCalendar)
            var hourTime = $(this).parent().attr("id");
            localStorage.setItem(hourTime,updateCalendar);
            console.log(hourTime)
        })



