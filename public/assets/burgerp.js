$(function(){
$(".create-form").on("submit",function(event){
    event.preventDefault();

    var newburger= {
        burger_name: $("#burgerinput").val().trim()
    };

    $.ajax("/api/burgers",{
        type: "POST",
        data: newburger
    }).then(function(){
        console.log("new burger type created");
        location.reload();
    });
});


$(".devoured").on("click",function(event){
    var id = $(this).data("id");
    
    $(".form-burger").hide();
    var newburgerstate={
        devoured: true
    };
    
    $.ajax("/api/burgers" +id,{
        type: "PUT",
        data: newburgerstate
    }).then(function(){
        console.log(" burger state "+ newburgerstate);
        location.reload();
    });


});

});