// Display current date in jumbotron
var headerDate = document.querySelector("#currentDay");
var todaysDate = moment().format("dddd, MMMM Do, YYYY");
headerDate.textContent = todaysDate;



