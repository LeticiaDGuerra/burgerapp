// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-Hung").on("click", function(event) {
    const id = $(this).data("id");
    const newHung = $(this).data("newHung");

    const newHungState = {
      Hungy: newHung
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newHungState
    }).then(
      function() {
        console.log("changed Hung to", newHung);
        // Reload the page to get the updated list
        loburgerion.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newburger = {
      name: $("#ca").val().trim(),
      hungry: $("[name=hungry]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        loburgerion.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        loburgerion.reload();
      }
    );
  });
});
