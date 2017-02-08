
$(document).ready(function(){

$("#container").css("background-color", "black").css("color", "lightBlue");
$("#intro").html("This should be changed!");
$(".content p").css("font-size", "30px").css("color", "white");
$("#intro").empty();

$("container").append("<p>").append("THIS IS NEW");

var newP = $("<p>");
newP.css("font-size", "24px").append("<strong>").append("THIS IS NEW");
newP.html("")
});
