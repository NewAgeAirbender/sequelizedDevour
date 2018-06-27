// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-done").on("click", function(event) {
      var id = $(this).data("id");
      var newDone = $(this).data("newdone");
  
      var newDoneState = {
        done: newDone
      };
  
      // Send the PUT request.
      $.ajax("/api/books/" + id, {
        type: "PUT",
        data: newDoneState
      }).then(
        function() {
          console.log("changed done to", newDone);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBook = {
        title: $("#ca").val().trim(),
        done: $("[name=done]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/books", {
        type: "POST",
        data: newBook
      }).then(
        function() {
          console.log("created new book");
          location.reload();
        }
      );
    });
  
    $(".delete-book").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/book/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted book", id);
          location.reload();
        }
      );
    });
  });
  