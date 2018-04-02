// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

//Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

myFunction();

//clock
var currentTime;
var currentDate;
function centerClock() {
    currentTime = moment().format("h:mm a");
    currentDate = moment().format("MMMM Do YYYY");
    $("#time").text(currentTime);
    $("#date").text(currentDate);
    console.log(currentTime);
    var intervalId;
    intervalId = setInterval(timeCurrent, 1000);
    function timeCurrent() {
        currentTime = moment().format("h:mm a");
        currentDate = moment().format("MMMM Do YYYY");
        $("#time").text(currentTime);
        $("#date").text(currentDate);
    };
}
centerClock();