


setInterval(checkTime,1000);
function checkTime() {
    var dateToDisplay = moment();
   document.getElementById("currentDay").innerHTML= dateToDisplay;

//    if (time < hour) {


//    }
}


 
function save(button) {
    let saveText = button.previousElementSibling.value;
    let hour = button.parentElement.id
    localStorage.setItem(hour, saveText);
 console.log(button.parentElement.id);


};
