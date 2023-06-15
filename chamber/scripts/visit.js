// Function to calculate the number of days between two dates
function calculateDaysSinceLastVisit() {
    var lastVisit = localStorage.getItem("lastVisit");
    var currentDate = new Date();
    var timeDiff = Math.abs(currentDate - new Date(lastVisit));
    var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
}
  
// Function to update the visit information on the page
function updateVisitInfo() {
    var visitInfoElement = document.getElementById("visitInfo");
    var daysSinceLastVisit = calculateDaysSinceLastVisit();
    visitInfoElement.textContent = "Days since last visit: " + daysSinceLastVisit;
}
  
// Function to set the last visit timestamp in localStorage
function setLastVisitTimestamp() {
    var currentDate = new Date();
    localStorage.setItem("lastVisit", currentDate);
}
  
// Check if the browser supports localStorage
if (typeof Storage !== "undefined") {
    // Check if the last visit timestamp is stored in localStorage
    if (localStorage.getItem("lastVisit")) {
      // Update visit information
      updateVisitInfo();
    } else {
      // Set the last visit timestamp if it doesn't exist
      setLastVisitTimestamp();
    }
} else {
    console.log("Sorry, your browser does not support Web Storage.");
}