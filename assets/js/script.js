var currentTasks = [];

// Display current date in jumbotron
var headerDate = document.querySelector("#currentDay");
var todaysDate = moment().format("dddd, MMMM Do, YYYY");
headerDate.textContent = todaysDate;

// each hour block set to current time 
var currentTime = moment().format("H");
console.log(currentTime);


function hourChecker() {
  // put each hour in a span tag
  // compare span value to the currentTime variable
  // set color attributes 
};

// function saveButton() {
//   var saveText = $(this).$("#task-description").val();
// };

$(".saveBtn").click(function() {
  console.log("click");
  var hourTextbox = $(".description").val();
  console.log(hourTextbox);

  var hourTime = $("h3").text();
  // gets ALL hours of h3 
  console.log(hourTime);
});

