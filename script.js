function displayDate() {
  date = moment().format("MMMM Do YYYY, h:mm:ss a");
  document.getElementById("as-of-date-time").innerHTML = date;
}

setInterval(displayDate, 1000);
