var timeBlockTasks = [];

// Display current date in jumbotron
var headerDate = document.querySelector("#currentDay");
var todaysDate = moment().format("dddd, MMMM Do, YYYY");
headerDate.textContent = todaysDate;

// each hour block set to current time 
function checkCurrentTime(hourTitle) {
  var currentTime = moment().format("hA");
  console.log(currentTime);

//   var taskHourEl = $(".hour").text().trim();
//   console.log(taskHourEl);

//   if (currentTime == taskHourEl) {
//     taskHourEl = $(hourTitle).addClass(".present")
//   }
//   else if (currentTime > taskHourEl) {
//     taskHourEl = $(hourTitle).addClass(".past")
//   }
//   else {
//     taskHourEl.addClass = "future";
//   }
};
checkCurrentTime();

function hourChecker() {
  var taskHour = $(".hour").text().trim();
  console.log(taskHour);
};
hourChecker();

// save tasks to localStorage
function saveTask() {
  localStorage.setItem("savedTasks", JSON.stringify(timeBlockTasks));
};

// load saved tasks from localStorage
// function loadTasks() {

// }


// when save button clicked grab time blocks hour / new task then saveTask();
$(".time-block").on("click", "button", function() {
  console.log("click");

  var hourTextbox = $(this).siblings(".description").val();
  console.log(hourTextbox);
 
  var hourTime = $(this).siblings(".hour").text().trim();
  console.log(hourTime);

  // push new changes to empty array
  timeBlockTasks.push({
    text: hourTextbox,
    hour: hourTime
  }); 
  console.log(timeBlockTasks);
  saveTask();
});

