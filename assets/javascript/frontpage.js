// mobile collapse 
$(document).ready(function(){
    $(".sidenav").sidenav();
  });


// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

//Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Chill";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

myFunction();
//new clock
//clock
var currentTime;
var currentDate;
function centerClock() {
    currentTime = moment().format("h:mm a");
    currentDate = moment().format("MMMM Do, YYYY");
    $("#time").text(currentTime);
    $("#date").text(currentDate);
    console.log(currentTime);
    var intervalId;
    intervalId = setInterval(timeCurrent, 1000);
    function timeCurrent() {
        currentTime = moment().format("h:mm a");
        currentDate = moment().format("MMMM Do, YYYY");
        $("#time").text(currentTime);
        $("#date").text(currentDate);
    };
}
centerClock();

$("form").on("submit", function() {
  event.preventDefault();
  console.log("hi");

// Captures user input
var name = $("#name-input").val().trim();
console.log(name);
// Display the name
$("#name-display").text(name);

localStorage.setItem("name", name);

$("#myForm").hide();
}); 

var userName = localStorage.getItem("name");
if (userName) {
    $("#myForm").hide();
}

$("#name-display").text(userName);



