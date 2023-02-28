$(document).ready(function () {
    dayjs.extend(window.dayjs_plugin_advancedFormat);

    $(function () {
        // let saveBtn = $(".saveBtn"). this was breaking the parentId variable
        //to get an element use #my+camelCase element name
        $(".saveBtn").click(function () {
            console.log("saveThis");//working (this.saveBtn is undefined, this.id adds nothing)
            let parentId = $(this).parent().attr("id");
            console.log(parentId);//comes back undefined if i make .saveBtn a variable. works fine as a class.
            // $(".description").append("<p>" + task + "</p>"); should be uneccesary with the textarea element?
            let description = $(this).siblings(".description").val();//the button is the sibling of description. We are targeting description when we press the button.

            $(function storeTasks() {//stores input in local storage
                localStorage.setItem(parentId, description);
                description = localStorage.getItem(parentId);
                console.log(localStorage.getItem(parentId));
                description.innerhtml = localStorage.getItem(parentId.description);
            });
        });
    });

    var today = dayjs();//displays the current time down to the second
    $('#currentDay').text(today.format('MMM D, YYYY Do'));

    var timeDisplayEl = $('#currentDay');
    function displayTime() {//this function displays the current time
        var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
        timeDisplayEl.text(rightNow);
    }
    displayTime();
    setInterval(displayTime, 1000);

    const hourRow = document.getElementsByClassName("hour");
    let currentHour = parseInt(today.format('H'));//shows only current hour as a number
    console.log(currentHour);//gives current hour. working fine.

    $(".time-block").each(function () {//do we need an interval function to be checking every minute

        var notTime = parseInt($(this).attr("id"));//gets the Id of the clicked element
        console.log(notTime);//time block number from the id
        console.log(currentHour);//the hour ( line 36)
        if (notTime < currentHour) {//if the block is less than the hour, the past class is applied and will be colored gray
            $(this).removeClass("future");
            $(this).removeClass("present")
            $(this).addClass("past");
        }
        else if (notTime == currentHour) {//if the time block number matches the current hour, that block will get the present class and show up red
            $(this).removeClass("future");
            $(this).removeClass("past")
            $(this).addClass("present");
        }
        else {//time blocks with an id number higher than the hour will be marked with the future class and will show up green
            $(this).removeClass("present");
            $(this).removeClass("past")
            $(this).addClass("future");
        }
    });
    $(".time-block").each(function () {//this one SHOWS saved local storage
        let blockText = parseInt($(this).attr("id"));
        let tasks = localStorage.getItem(blockText);
        let descriptionEl = $(this).children(".description");
        descriptionEl.text(tasks);
    });
});