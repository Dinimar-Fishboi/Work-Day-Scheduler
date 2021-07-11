 //Date and time for the Jumbotron (aka the easy bit)

function displayTime() {
    var currentDay = moment();
    $("#currentDay").text(currentDay.format("dddd, MMMM Do"));
    $("#specificTime").text(currentDay.format("hh:mm:ss a"))
}

setInterval(displayTime, 1000);

// So - there are really 2 main functions happening here.
// One is adding classes dependent on the time blocks in association with
// the current time.

function hourNow() {
    var thisIsTheTime = moment().format("HH");
    console.log(thisIsTheTime);

    // In order to save some sanity - the tags for each time-block were converted
    // to 24hr time to make life easier.
    
    $(".time-block").each(function() {
         var timeBlock = ($(this).attr("id"));

         // we are also removing classes because if we don't then eventually each
         // block will only have the 'past' class attached.
     
         if (thisIsTheTime === timeBlock) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
         } else if (thisIsTheTime < timeBlock){
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
         } else if (thisIsTheTime > timeBlock){
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } 
         
     })
    
}

hourNow();

//Two is saving the inputs to the correlating rows (i.e the activity for 4pm is
// only saved to the textarea in the 4pm row rather than ALL of the texareas.)

    //First off, we summon any inputs that may have been entered previously.

    $("#08 #activityInput").val(localStorage.getItem("08"));
    $("#09 #activityInput").val(localStorage.getItem("09"));
    $("#10 #activityInput").val(localStorage.getItem("10"));
    $("#11 #activityInput").val(localStorage.getItem("11"));
    $("#12 #activityInput").val(localStorage.getItem("12"));
    $("#13 #activityInput").val(localStorage.getItem("13"));
    $("#14 #activityInput").val(localStorage.getItem("14"));
    $("#15 #activityInput").val(localStorage.getItem("15"));
    $("#16 #activityInput").val(localStorage.getItem("16"));
    $("#17 #activityInput").val(localStorage.getItem("17"));
    $("#18 #activityInput").val(localStorage.getItem("18"));
    $("#19 #activityInput").val(localStorage.getItem("19"));
    $("#20 #activityInput").val(localStorage.getItem("20"));
    $("#21 #activityInput").val(localStorage.getItem("21"));
    $("#22 #activityInput").val(localStorage.getItem("22"));

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


    