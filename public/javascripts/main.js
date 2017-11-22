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

// Acknowledge Codepen example by Captain Anonymous

var images = document.querySelectorAll('.parallax__image');

function setTopOffset(image) {
    var imageHeight = image.offsetHeight; //measure of an elements CSS height including border and padding and horizontal scrollbar.
    var containerHeight = image.parentNode.offsetHeight;
    var pageHeight = document.documentElement.clientHeight; //viewable height of an element including padding but not the border or scrollbar
    var imageDistance = imageHeight - containerHeight;
    var containerTop = image.parentNode.getBoundingClientRect().top;
    //Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
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
    //Array put on page to give access to array prototypes such as forEach.
    // ForEach is a function which takes a function as an input.
    //.call is a prototype which functions have.  It will replace this with the argument we have passed it - namely setTopOffset.
    // ie it will update images with the setTopOffset value.
}

function animate() {
    requestAnimationFrame(animate); //tell browser that we wish to perform an animation and request browser to call a specified function to update an animation before the next repaint.
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