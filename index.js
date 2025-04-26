// This is the JavaScript code for the index.html file
// This code handles the functionality of a navigation menu toggle
$(".nav-toggle").click(function(){
    if ($(".nav-toggle").attr("src") === "assets/menu.svg") {
    $(".nav-toggle").attr("src","assets/menuactive.svg")
    $(".navitems").css("display","flex")}
    else {
        $(".nav-toggle").attr("src","assets/menu.svg")
        $(".navitems").css("display","none")
    }
  // hide nav menu after option selection
  $(".navbtn").click(function(){
    $(".navitems").css("display","none")});
  

  });
