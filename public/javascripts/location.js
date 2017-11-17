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
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}


