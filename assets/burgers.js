$(function() {

    // submit burger POST
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: false
        };
    
        //send POST request
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger");
            location.reload();
        });// ajax ends
    }); //submit burger ends

    // devour burger PUT
    $(".devburger").on("click", function(event) {
        var id = $(this).data("burgerid");
        var devoured = $(this).data("devoured");

        var eaten = {
            devoured: devoured
        };

        //send PUT request
        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(function() {
            console.log("burger has ben eaten: " + eaten);
            location.reload();
        }); // ajax ends
    }); // devour burger ends
    
    });// function ends