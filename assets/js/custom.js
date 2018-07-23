(function () {
//    var getPos = function (pos) {        
//        var mapLink = document.querySelector('#mapLink');
//        var latlon = pos.coords.latitude + ',' + pos.coords.longitude;
//        var position1 = pos.coords.latitude;
//        var position2 = pos.coords.longitude;
//        var url = 'https://www.google.de/maps/@' + latlon + ',14z';        
//        mapLink.href = url;
//        mapLink.innerText = url;
//        getPosition(position1, position2);
//        
//        
//    };
    var googleMap = document.querySelector('#googleMap');
    var btnHome = document.querySelector('#btnHome');    
    var btnWeingut = document.querySelector('#btnWeingut');
    var btnChateau = document.querySelector('#btnChateau');    
    var getPosition = function(){
        console.log(navigator);
        if (navigator.geolocation) {
            //getCurrentPosition erwartet eine Callback-Funktion
            navigator.geolocation.getPosition(initMap);          
        }          
    };     
    var initMap = function(pos){ 
        var myPosHome = new google.maps.LatLng(this.getAttribute('data-lat'), this.getAttribute('data-lng'));
        var opts ={
          zoom:14,          
          streetViewControl:false,
          center:myPosHome
        };
        //ruft eine neue Map auf, erstellt sie und speichert sie in der id googleMap
        var map1 = new google.maps.Map(googleMap, opts);
        var image2 ='assets/images/cat.png';
        var image3 ='assets/images/monster.png';
        var image4 ='assets/imgages/icke.jpg'
        var iconPath='https://maps.google.com/mapfiles/kml/shapes/library_maps.png';
        //erstellt einen neuen Marker ...
        
        var icon = {
            url:iconPath,//url
            scaledSize:new google.maps.Size(50,50)//Größe
        } 
        
        var markerHome = new google.maps.Marker({
            position:otherPosition,
            icon:image4,
            map:map1,
            title:"Home is where the heart is"
        });
        var contentString1='<div><h1>Hier wohn icke!</div>';
        var infowindow1 =  new google.maps.InfoWindow({
            content:contentString1
        });
         
         
         
        markerHome.addListener('click', function(){
            infowindow1.open(map1, markerHome)
        });
        markerHome.addListener('mouseout', function(){
            infowindow1.close(map1, markerHome);
        });
        btnHome.addEventListener('click', markerHome);
        
    };
    var otherPosition = {
        lat : btnHome.getAttribute('data-lat'),
        lng : btnHome.getAttribute('data-lng'),
        iconPath:'assets/images/bird.png'
    }
    //Benutzung des Google-Objekts aus der index.html und lädt mit addDomListener das Objekt
    btnHome.addEventListener('click',google.maps.event.addDomListener(window,'load', getPosition));    
})();