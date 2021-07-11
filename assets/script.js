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

// var timeBlock = $(".time-block")
// console.log(timeBlock);
// console.log(timeBlock[1]);

// for (i = 0; i < timeBlock.length; i++) {
//     var testProcess = parseInt(timeBlock[i].attr("id").split("hour"));
//     console.log(testProcess)
// }

// console.log(timeBlock[1])


function hourNow() {
    var thisIsTheTime = moment().format("hha");
    console.log(thisIsTheTime);
    
    $(".time-block").each(function() {
        // console.log(index + ": " + $(this).text());
         var timeBlock = ($(this).attr("id"));
         console.log(timeBlock)
     
         if (thisIsTheTime === timeBlock) {
             console.log(" the current hour is:" + timeBlock);
         } else  {
             console.log("no dice");
         }
     
     })
    
}


hourNow();




//Two is saving the inputs to the correlating rows (i.e the activity for 4pm is
// only saved to the textarea in the 4pm row rather than ALL of the texareas.)

    //First off, we summon the inputs that may have been entered previously.

    $("#08am #activityInput").val(localStorage.getItem("08am"));
    $("#09am #activityInput").val(localStorage.getItem("09am"));
    $("#10am #activityInput").val(localStorage.getItem("10am"));
    $("#11am #activityInput").val(localStorage.getItem("11am"));
    $("#12pm #activityInput").val(localStorage.getItem("12pm"));
    $("#01pm #activityInput").val(localStorage.getItem("01pm"));
    $("#02pm #activityInput").val(localStorage.getItem("02pm"));
    $("#03pm #activityInput").val(localStorage.getItem("03pm"));
    $("#04pm #activityInput").val(localStorage.getItem("04pm"));
    $("#05pm #activityInput").val(localStorage.getItem("05pm"));
    $("#06pm #activityInput").val(localStorage.getItem("06pm"));
    $("#07pm #activityInput").val(localStorage.getItem("07pm"));
    $("#08pm #activityInput").val(localStorage.getItem("08pm"));
    $("#09pm #activityInput").val(localStorage.getItem("09pm"));
    $("#10pm #activityInput").val(localStorage.getItem("10pm"));



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


