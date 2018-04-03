

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


});
//-------------------------------------------------------------------------------------------------
//MOTIVATIONAL QUOTES

//create array of quotes and then randomize the selection to be displayed

function shuffle(quotes) {
  var currentIndex = quotes.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    var randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = quotes[currentIndex];
    quotes[currentIndex] = quotes[randomIndex];
    quotes[randomIndex] = temporaryValue;

    var formQuote = $("<p>");
  }

  return quotes;
}

var quotes = ["Life is the first gift, love is the second, and understanding is the third. ~ Unknown", "All you need in this life is ignorance and confidence. Then success is sure. ~ Mark Twain", "Difficulties are things that show a person who they are. ~ Epictetus",
  "Never throughout history has a man who lived a life of ease left a name worth remembering. ~ Theodore Roosevelt", "The smallest change in perspective can transform a life. What tiny attitude adjustment might turn your world around? ~ Oprah Winfrey",
"Don't wait for your feelings to change before you take action. Take the action and your feelings will change.” ~ Barbara Baron", "Knowing is not enough, we must apply; willing is not enough, we must do. ~ Bruce Lee", "The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world. ~ Dalai Lama", "Forgive others, not because they deserve forgiveness but because you deserve peace. ~ Jonathan Lockwood Huie", "Self-discipline begins with the mastery of your thoughts. If you don't control what you think, you can't control what you do. Simply, self-discipline enables you to think first and act afterward. ~ Napoleon Hill", "With self-discipline most anything is possible. ~ Theodore Roosevelt", "Why is it that people in the industrialized world tend to label as primitive those cultures that teach that man and nature are inseparable, when indeed this is the case? ~ Charlie Badenhop", "Unless you try to do something beyond what you have already mastered, you will never grow. ~ Ralph Waldo Emerson", "Motivation is a fire from within. If someone else tries to light that fire under you, chances are it will burn very briefly. ~ Stephen R. Covey", "“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. ~ Thomas A. Edison", "“In order to attract more of the blessings that life has to offer, you must truly appreciate what you already have. ~ Ralph Marston",];

var randomQuote = shuffle(quotes);

console.log(randomQuote);

//assign randomquote to div

$("#quotesMiddle").text(randomQuote);


