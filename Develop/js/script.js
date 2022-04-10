


setInterval(checkTime, 1000,);
function checkTime() {
    var dateToDisplay = moment();
    document.getElementById("currentDay").innerHTML = dateToDisplay;
    let timeBlocks = Array.from(document.getElementsByClassName("time-block"));


    for (let i = 9; i < (9 + timeBlocks.length); i++) {
        if (i < moment().format("H")) {
            timeBlocks[i - 9].querySelector("textarea").setAttribute("class", "past col-md-10 description");
        }
        if (i == moment().format("H")) {
            timeBlocks[i - 9].querySelector("textarea").setAttribute("class", "present col-md-10 description");
        }
        if (i > moment().format("H")) {
            timeBlocks[i - 9].querySelector("textarea").setAttribute("class", "future col-md-10 description");
        }

    };

    function save(button) {
        let saveText = button.previousElementSibling.value;
        let hour = button.parentElement.id
        localStorage.setItem(hour, saveText);
        console.log(button.parentElement.id);
 
   };

};