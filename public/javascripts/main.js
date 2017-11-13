console.log("what is going on");

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

var x = $('div#nav-icon');
x.onclick = function(){
    console.log("clickety click");
};

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