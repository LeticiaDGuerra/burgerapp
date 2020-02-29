// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-hung").on("click", function(event) {
    var id = $(this).data("id");
    var newhung = $(this).data("newhung");

    var newhungState = {
      eaten: newhung
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newhungState
    }).then(
      function() {
        console.log("changed hung to", newhung);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      eaten: $("[name=eaten]").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
