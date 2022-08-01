// Todays date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function() {
    // saveBtn click listener
    $(".saveButton").on("click", function() {
        // get text from the textarea field
        var text = $(this).siblings(".textarea").val();
        var time = $(this).parent().attr("id");

        // save text in local storage
        localStorage.setItem(time, text);
    })

    function planner() {
        // determine current time
        var currentTime = moment().hour();
        console.log(currentTime)

        // loop through time options
        $(".row").each(function() {
            var workShift = parseInt($(this).attr("id").split("hour")[1]);
            console.log(workShift)

            if (workShift === currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else if (workShift < currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    // retrieve data from local storage
    $("#hour09 .textarea").val(localStorage.getItem("hour09"));
    $("#hour10 .textarea").val(localStorage.getItem("hour10"));
    $("#hour11 .textarea").val(localStorage.getItem("hour11"));
    $("#hour12 .textarea").val(localStorage.getItem("hour12"));
    $("#hour01 .textarea").val(localStorage.getItem("hour01"));
    $("#hour02 .textarea").val(localStorage.getItem("hour02"));
    $("#hour03 .textarea").val(localStorage.getItem("hour03"));
    $("#hour04 .textarea").val(localStorage.getItem("hour04"));
    $("#hour05 .textarea").val(localStorage.getItem("hour05"));

    planner();
})