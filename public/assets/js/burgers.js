
$(function() {
  $("#change-hung").on("click", function(event) {
    var id = $(this).data("id");
    var newhung = $(this).data("newhung");

    var newhungState = {
      eaten: newhung
    };


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newhungState
    }).then(
      function() {
        console.log("changed hung to", newhung);

        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      eaten: $("[name=eaten]").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
      
        location.reload();
      }
    );
  });
});
