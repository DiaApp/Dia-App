

// JAVASCRIPT BELOW FOR GOALS TAB
//-------------------------------------------------------------

//firebase intitialization for productivity page
var config = {
  apiKey: "AIzaSyBPmro-Lmwer67ByMa3D-64qu7U-CsbT5I",
  authDomain: "diaapp-199504.firebaseapp.com",
  databaseURL: "https://diaapp-199504.firebaseio.com",
  projectId: "diaapp-199504",
  storageBucket: "diaapp-199504.appspot.com",
  messagingSenderId: "827656289467"
};
firebase.initializeApp(config);
var database = firebase.database();

// Create an initial variable
var goalCount = 0;

// onClick event associated with function

$("#add-goals").on("click", function (event) {
  event.preventDefault();

  // Get the value from the textbox and store as variable
  var addGoal = $("#formGoal").val().trim();

  // create variable to hold a <p> tag 
  var formText = $("<p>");

  // assign an ID to the new variable

  formText.attr("id", "item-" + goalCount);

  // append the value as text

  formText.append(" " + addGoal);

  // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
  // Give your button a data attribute called data-goal and a class called "checkbox".
  // Lastly append the letter X inside.

  var formClose = $("<button>");

  formClose.attr("data-goal", goalCount);
  formClose.addClass("checkbox");
  formClose.append("✓");

  // Append the button to the to do item
  formText = formText.prepend(formClose);

  // Add the button and to do item to the goals div
  $("#goals").append(formText);

  // Clear the textbox when done
  $("#formGoal").val("");

  // Add to the goalCount
  goalCount++;

   // Jquery works
   console.log(goalCount);
   console.log(formText);
   console.log("hi, this code works");
});

// When a user clicks a check box then delete the specific content
// (NOTE: Pay attention to the unusual syntax here for the click event.
// Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)
$(document.body).on("click", ".checkbox", function () {

  // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
  var goalNumber = $(this).attr("data-goal");

  // Select and Remove the specific <p> element that previously held the to do item number.
  $("#item-" + goalNumber).remove();
 

})
//-------------------------------------------------------------------------------------------------



