$(document).ready(function(){
    function myFunction() {
        document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
    }

    function init_map(){
        var myOptions = {zoom:14,center:new google.maps.LatLng(19.8761653,75.3433139),mapTypeId: google.maps.MapTypeId.ROADMAP};
        map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
        marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(19.8761653, 75.3433139)});
        infowindow = new google.maps.InfoWindow({content:"<b>mit collage aurangabad</b><br/><br/> aurangabad" });
        google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);
        });
        infowindow.open(map,marker);
    }

    //google.maps.event.addDomListener(window, 'load', init_map);
    init_map();

});