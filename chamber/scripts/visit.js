function getDaysSinceLastVisit() {
    const visitTimestamp = localStorage.getItem("lastVisitTimestamp");
    if (visitTimestamp) {
      const lastVisit = new Date(parseInt(visitTimestamp));
      const currentDate = new Date();
      const timeDifference = currentDate.getTime() - lastVisit.getTime();
      const daysSinceLastVisit = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      return daysSinceLastVisit;
    }
    return null;
}
  
function displayVisitInfo() {
    const daysSinceLastVisit = getDaysSinceLastVisit();
    if (daysSinceLastVisit !== null) {
      const visitInfo = document.getElementById("visitInfo");
      visitInfo.textContent = `Days since your last visit: ${daysSinceLastVisit}`;
    }
}
  
function saveVisitTimestamp() {
    const currentTimestamp = new Date().getTime();
    localStorage.setItem("lastVisitTimestamp", currentTimestamp);
}
  
// Call the necessary functions when the page loads
window.addEventListener("load", () => {
    displayVisitInfo();
    saveVisitTimestamp();
});