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

// pre load images to improve responsiveness
var preloadImages =[
    '../images/bar_960_720.jpg',
    '../images/barrel_960_720.jpg',
    '../images/beer_960_720.jpg',
    '../images/beetroot_960_720.jpg',
    '../images/concert.jpg',
    '../images/concert2.jpg',
    '../images/concert3.jpg',
    '../images/corner_960_720.jpg',
    '../images/dessert_960_720.jpg',
    '../images/fish_960_720.jpg',
    '../images/food.png',
    '../images/pancake_960_720.jpg',
    '../images/pancakes-large.jpg',
    '../images/sardines_960_720.jpg',
    '../images/steaktwo_960_720.jpg',
    '../images/table_960_720.jpg',
    '../images/tiramisu_960_720.jpg'
];
for (var i = 0; i < preloadImages.length; ++i) {
    console.log("images preloaded");
    var img = new Image();  //creates a new HTMLImageElement equivalent to document.createElement('img');
    img.src = preloadImages[i];
    //console.log(preloadImages[i]);
    //console.log(img);
}

//From Codepen by Captain Anonymous

var images = document.querySelectorAll('.parallax__image');

function setTopOffset(image) {
    var imageHeight = image.offsetHeight;
    var containerHeight = image.parentNode.offsetHeight;
    var pageHeight = document.documentElement.clientHeight;
    var imageDistance = imageHeight - containerHeight;
    var containerTop = image.parentNode.getBoundingClientRect().top;
    var distancePercent = 0;
    var offsetTop = 0;

    if (containerTop >= pageHeight) {
        distancePercent = 0;
    } else if (containerTop <= -containerHeight) {
        distancePercent = 1;
    } else {
        distancePercent = (containerTop + containerHeight) / (pageHeight + containerHeight);
    }

    offsetTop = distancePercent * imageDistance * -1;
    image.style.WebkitTransform = 'translate3d(0,' + offsetTop + 'px, 0)';
}

function updateImages() {
    [].forEach.call(images, setTopOffset);
}

function animate() {
    requestAnimationFrame(animate);
    updateImages();
}

animate();




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