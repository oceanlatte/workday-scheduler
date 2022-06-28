var timeBlockTasks = [];

// Display current date in jumbotron
var headerDate = document.querySelector("#currentDay");
var todaysDate = moment().format("dddd, MMMM Do, YYYY");
headerDate.textContent = todaysDate;

// each hour block set to current time 
function checkCurrentTime() {
  var currentHour = moment().hours();

  $(".time-block").each(function() {
    var taskHour = parseInt(
    $(this)
    .attr("id"))

    if (currentHour === taskHour) {
      // taskHourEl.setAttribute("class", "col-9 description present");
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    }
    else if (currentHour > taskHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  })

};

checkCurrentTime();

// save tasks to localStorage
function saveTask() {
  localStorage.setItem("savedTasks", JSON.stringify(timeBlockTasks));
};

// when save button clicked grab time blocks hour / new task then saveTask();
$(".time-block").on("click", "button", function() {
  var hourTextbox = $(this).siblings(".description").val(); 
  var hourTime = $(this).siblings(".hour").text().trim();

  // push new changes to empty array
  timeBlockTasks.push({
    text: hourTextbox,
    hour: hourTime
  }); 
  console.log(timeBlockTasks);
  saveTask();
});

// load saved tasks from localStorage
function loadTasks() {
  var checkTasks = JSON.parse(localStorage.getItem("savedTasks"));
  console.log(checkTasks);
  // how do I get the content to load back on page?? 
};

$("#9 .description").val(localStorage.getItem("hour"));

loadTasks();
