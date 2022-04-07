setInterval(checkTime,1000);
function checkTime() {
    var dateToDisplay = moment().weekday(4);
   document.getElementById("currentDay").innerHTML= dateToDisplay;
   //if statement to check the time and if past the hr id then needs to change to past. //
   //If not past needs to change to present. If future needs to change to future//
   
}
