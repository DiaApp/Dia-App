// Initialize Firebase
var config = {
  apiKey: "AIzaSyAEpQOWrA8NdAQDn_tAds4GdBVw0F7HKsQ",
  authDomain: "dia-app-4218.firebaseapp.com",
  databaseURL: "https://dia-app-4218.firebaseio.com",
  projectId: "dia-app-4218",
  storageBucket: "",
  messagingSenderId: "292332669604"
};
firebase.initializeApp(config);

var database = firebase.database();

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

$("#name-display").text(localStorage.getItem("name"));


// function myFunction() {
// document.getElementById("myForm").reset();
// };