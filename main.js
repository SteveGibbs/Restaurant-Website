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

