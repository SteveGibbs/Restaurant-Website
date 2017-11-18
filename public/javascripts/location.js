/**
 * Created by carolineperier on 17/11/2017.
 */
/*
function initMap(){}


    window.initMap = function (){
        if ( mapInit || $("#map").length === 0 ) { return false; }
        var boogaloo = {lat: -34.20579, lng: 150.857358};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: boogaloo
        });
        var marker = new google.maps.Marker({
            position: boogaloo,
            map: map
        });
        mapInit = true;
    };

    var mapInit=false;
    mapInit = false;
    if ( $("#map").length !== 0 ) {
        window.initMap();
    }

*/

var map;
function initMap() {
    var restaurant = {lat: -33.8820446, lng: 151.27589480000006};
    map = new google.maps.Map(document.getElementById('map'), {
        center: restaurant,
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: restaurant,
        map: map
    });
}


