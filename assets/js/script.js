var timeBlockTasks = [];

// Display current date in jumbotron
var headerDate = document.querySelector("#currentDay");
var todaysDate = moment().format("dddd, MMMM Do, YYYY");
headerDate.textContent = todaysDate;

// each hour block checked to current time 
function checkCurrentTime() {
  var currentHour = moment().hours(); // current time in military time

  // check the id number for each div matches the current time
  $(".time-block").each(function() {
    var taskHour = parseInt(
    $(this)
    .attr("id"))
    
    // conditional statements for each div then set styling class
    if (currentHour === taskHour) {
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

// load saved tasks from localStorage
function loadTasks() {
  var checkTasks = JSON.parse(localStorage.getItem("savedTasks"));
  console.log(checkTasks);

  // for each hour time block run function to check for tasks saved to local storage
  $(".hour").each(function() {
    var taskHour = $(this).text().trim();
    
    for (var i = 0; i < checkTasks.length; i++) {
      if (checkTasks[i].hour == taskHour) {
        $(this)
        .siblings(".description")
        .text(checkTasks[i].text);
      }
    }
  });
};

// save tasks to localStorage
function saveTask() {
  localStorage.setItem("savedTasks", JSON.stringify(timeBlocksTasks));
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

checkCurrentTime();
loadTasks();
