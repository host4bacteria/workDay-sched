
// Wrap all code that interacts with the DOM in a call to jQuery
$(function () {
  //Add a listener for click events on the save button.
  
  function saveText() {
    $(".saveBtn").on("click", function () {
      var txt = $(this).siblings(".description").val();
      var id = $(this).parent().attr("id");
      localStorage.setItem(id, txt);
    });
  }

  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.

  hourColor = () => {
    var currentHr = dayjs().hour(); // Changed to remove formating

    $(".time-block").each(function () {
      var tmBlockId = parseInt($(this).attr("id"));
      if (tmBlockId < currentHr) {
        $(this).addClass("past");
      } else if (tmBlockId === currentHr) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  };
  hourColor();

  //  Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  getText = () => {
    $(".time-block").each(function () {
      var id = $(this).attr("id");
      var text = localStorage.getItem(id);
      $(this).children(".description").val(text);
    });
  };

  // code to display the current date in the header of the page

  var showDate = () => {
    currentDate = dayjs().format("MM-DD-YYYY | hh:mm:ss");
    $(`#currentDay`).text(currentDate);
  };
  // updates date/time by second
  setInterval(showDate, 1000);

  clearAll = () => {
    localStorage.clear();
    window.location.reload();
  };

  saveText();
  getText();
});
