
let timeBlocks = Array.from(document.getElementsByClassName("time-block"));

function save(button) {
    let saveText = button.previousElementSibling.value;
    let hour = button.parentElement.id
    localStorage.setItem(hour, saveText);
};

setInterval(checkTime, 1000,);
function checkTime() {
    var dateToDisplay = moment();
    document.getElementById("currentDay").innerHTML = dateToDisplay;



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
};

for (i = 9; i < (9 + timeBlocks.length); i++) {
    timeBlocks[i - 9].querySelector("textarea").value = localStorage.getItem(`hour-${i}`);
   

}



