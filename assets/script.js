$(document).ready(function() {
dayjs.extend(window.dayjs_plugin_advancedFormat);
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that 
// the code isn't run until the browser has finished rendering all the elementsin the html.is $() the call to jquery?
$(function () {
    // TODO: Add a listener for click events on the save button. 
    //This code should use the id in the containing time-block as a key to save the user input in
    // local storage. 
    //HINT: What does `this` reference in the click listener time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
    //'this' needs to target the id of the parent element
    
    let saveBtn = $(".saveBtn").parent();
    let task = $("#myTextArea").val();//to get an element use #my+camelCase element name
    $(saveBtn).click(function(){
        console.log("saveThis");//working (this.saveBtn is undefined, this.id adds nothing)
        $(".description").append("<p>"+ this.task + "</p>");//how to get 'this' to be the hour id
    })
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
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

$(".time-block").each(function(){//do we need an interval function to be checking every minute

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