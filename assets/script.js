$(document).ready(function () {
    dayjs.extend(window.dayjs_plugin_advancedFormat);
    // Wrap all code that interacts with the DOM in a call to jQuery to ensure that 
    // the code isn't run until the browser has finished rendering all the elementsin the html.is $() the call to jquery?
    $(function () {
        // let saveBtn = $(".saveBtn"). this was breaking the parentId variable
        //to get an element use #my+camelCase element name
        $(".saveBtn").click(function () {
            console.log("saveThis");//working (this.saveBtn is undefined, this.id adds nothing)
            let parentId = $(this).parent().attr("id");
            console.log(parentId);//comes back undefined if i make .saveBtn a variable. works fine as a class.
            // $(".description").append("<p>" + task + "</p>"); should be uneccesary with the textarea element?
            let description = $(".description");
            description.innerhtml = localStorage.getItem(parentId.description);

            $(function storeTasks() {
                localStorage.setItem(parentId, description.val);
                description = localStorage.getItem(parentId.description);
                console.log(localStorage.getItem(parentId.description));
                description.innerhtml = localStorage.getItem(parentId.description);
            });
        });
    });

    var today = dayjs();//displays the current time down to the second
    $('#currentDay').text(today.format('MMM D, YYYY Do'));

    var timeDisplayEl = $('#currentDay');
    function displayTime() {
        var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
        timeDisplayEl.text(rightNow);
    }
    displayTime();
    setInterval(displayTime, 1000);

    const hourRow = document.getElementsByClassName("hour");
    let currentHour = parseInt(today.format('H'));
    console.log(currentHour);//gives current hour. working fine.

    $(".time-block").each(function () {//do we need an interval function to be checking every minute

        var notTime = parseInt($(this).attr("id"));
        console.log(notTime);
        console.log(currentHour);
        if (notTime < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present")
            $(this).addClass("past");
        }
        else if (notTime == currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("past")
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past")
            $(this).addClass("future");
        }
    });
})