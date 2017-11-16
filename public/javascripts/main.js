console.log("hello world");

function navBarFunction() {
    var navigationBar = document.getElementById("myNavBar");
    var menuIcon = document.getElementById("menu-icon");
    console.log("Clicked!");
    if (navigationBar.className === "nav") {
        navigationBar.className += " responsive";
        menuIcon.className += " responsive";
    } else {
        navigationBar.className = "nav";
        menuIcon.className = "icon";
    }

}

function formResponse(){
    console.log("running");
    var name = document.getElementById("name").value;
    alert("Thanks "+ name + " for your enquiry.  Unfortunately the restaurant is fictitious and cannot receive any bookings.");
}

$(document).ready(function(){
    $('#nav-icon').click(function(){
        console.log("clicked");

        $(this).toggleClass('open responsive');

        var navigationBar = document.getElementById("myNavBar");
        if (navigationBar.className === "nav") {
            navigationBar.className += " responsive";
        } else {
            navigationBar.className = "nav";
        }
    });
});