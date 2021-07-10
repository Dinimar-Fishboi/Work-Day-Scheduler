 //Date for the Jumbotron.

 var currentDay = moment();
 $("#currentDay").text(currentDay.format("dddd, MMMM Do"));


//  var eightAM = document.querySelector("#eightAM");
//  var eightAMInput = document.querySelector("#eightAM #activityInput");
//  $("#eightAM .activityInput").val(localStorage.getItem("eightAM"));

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

 var saveBtn = $("#saveBtn");
// var activityInput = document.querySelectorAll("#activityInput");

$(document).ready(function () {

   
        $(".saveBtn").on("click", function() {
            console.log("have pressed a button");
            var activityInput = $("textarea").val();
            console.log(activityInput);
           // var timeDue = activityInput.parent().attr("id");
          //  console.log(timeDue);
            var updateCalendar = $(".saveBtn").siblings(".activityInput").val();
            var hourTime = $(this).parent().attr("id");
            localStorage.setItem(updateCalendar,hourTime);
            console.log(hourTime)
            console.log(updateCalendar);

        })



        $("#eightAM .activityInput").val(localStorage.getItem("eightAM"));
        console.log($("#eightAM .activityInput").val(localStorage.getItem("eightAM")))


})

// var calendarUpdate = localStorage.getItem("calendar");

// activityInput.textContent = calendarUpdate;

// updateCalendar();

// function updateCalendar() {
//     var textareaSubmit = localStorage.getItem('key');
//     activityInput.textContent = textareaSubmit
// }

// console.log(activityInput)
// console.log(saveBtn)

// We need to apply the setItem code above the save.Btn work, else nothing will
// be summoned.

// The following code block ensures that when ANY save button is pressed, the
// action will be the same.

// saveBtn.forEach(function(){
//     if ( 54 > 7) {
//         console.log("correct")
//     }
//     for (i = 0 ; i < saveBtn.length; i++ ) {

//         saveBtn[i].addEventListener("click", function(){

//             console.log("saveBtn has been clicked");
            

//             activityInput[i].textContent = activityInput[i]

//             //calendarUpdate = localStorage.setItem("calendar",JSON.stringify(calendarUpdate));

//         })
//     }    
// });


// //=====================
// var emailInput = document.querySelector('#email');
// var passwordInput = document.querySelector('#password');
// var signUpButton = document.querySelector('#sign-up');
// var msgDiv = document.querySelector('#msg');
// var userEmailSpan = document.querySelector('#user-email');
// var userPasswordSpan = document.querySelector('#user-password');

// renderLastRegistered();

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute('class', type);
// }

// function renderLastRegistered() {
//   var email = localStorage.getItem('email');
//   var password = localStorage.getItem('password');

//   if (!email || !password) {
//     return;
//   }

//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }

// signUpButton.addEventListener('click', function (event) {
//   event.preventDefault();

//   var email = document.querySelector('#email').value;
//   var password = document.querySelector('#password').value;

//   if (email === '') {
//     displayMessage('error', 'Email cannot be blank');
//   } else if (password === '') {
//     displayMessage('error', 'Password cannot be blank');
//   } else {
//     displayMessage('success', 'Registered successfully');

//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);
//     renderLastRegistered();
//   }
// });







// if (saveBtn.addEventListener("click",function(){

//     console.log("yes")
// }));

     
// function proofOfConcept() {

//     if ( 54 > 7) {
//         console.log("correct")
//     }

//     activityInput.textContent = calendarUpdate;

//     localStorage.setItem("calendar", calendarUpdate);
  
// };


