
function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(43.6532, -79.3832),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}



function displayForm() {

    var outputA = document.getElementById("latS").value;
    var outputB = document.getElementById("lonS").value;
    var outputC = document.getElementById("latE").value;
    var outputD = document.getElementById("lonE").value;

    if (outputA == null || outputB == "" || outputC == "" || outputD == "")
    {
        alert("At least one of the field is empty");
        return false;
    }
    else
    {
        alert("Latitude Starting Point: " + outputA + " Longtitude Starting Point: " + outputB + "\n" 
            + "Latitude Ending Point: " + outputC + " Longtitude Ending Point: " + outputD);
        var startA = { lat: outputA, lng: outputB };
        var endA = { lat: outputC, lng: outputD };

        var mapProp = {
            center: new google.maps.LatLng(outputA, outputB),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        addMarker(startA, map);
        addMarker(endA, map);
    }
}

// Adds a marker to the map.
function addMarker(location, map) {
    var myLatlng = new google.maps.LatLng(location.lat, location.lng);
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);