    // submit burger POST
    $(".newBurger").on("submit", function(event) {
        event.preventDefault();

        var input = $("[name=burger_name]").val().trim();
        var newBurger = {
            burger_name: input
        };
    
        //send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(result) {
            console.log("created new burger " + result);
            location.reload();
        });// ajax ends
    }); //submit burger ends

    // devour burger PUT
    $(".burgerAvailable").on("click", function(event) {
        var id = $(this).data("id");
        var newState = {
            devoured: true
        };

        //send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            console.log("burger has ben eaten: " + newState);
            location.reload();
        }); // ajax ends
    }); // devour burger ends