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
    var btnHome = document.querySelector('#btnHome');
    
    var btnWeingut = document.querySelector('#btnWeingut');
    var btnChateau = document.querySelector('#btnChateau');    
    var googleMap = document.querySelector('#googleMap');
    var getPosition = function(){
        console.log(navigator);
        if (navigator.geolocation) {
            //getCurrentPosition erwartet eine Callback-Funktion
            navigator.geolocation.getCurrentPosition(initMap);          
        }          
    };     
    var initMap = function(pos){ 
        var myPos=new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        var myPos2=new google.maps.LatLng(pos.coords.latitude+0.008, pos.coords.longitude-0.003);
        var myPos3=new google.maps.LatLng(pos.coords.latitude+0.004, pos.coords.longitude+0.004);
        var myPosHome = new google.maps.LatLng(otherPosition.lat, otherPosition.lng);
        
        var opts ={
          zoom:14,          
          streetViewControl:false,
          center:myPos
        };
        
        var optsHome ={
          zoom:14,          
          streetViewControl:false,
          center:myPosHome
        };
        //ruft eine neue Map auf, erstellt sie und speichert sie in der id googleMap
        var map1 = new google.maps.Map(googleMap, opts);
        var map2 = new google.maps.Map(googleMap, optsHome);
        var image ='assets/images/images.png';
        var image2 ='assets/images/cat.png';
        var image3 ='assets/images/monster.png';
        var image4 ='assets/imgages/icke.jpg'
        var iconPath='https://maps.google.com/mapfiles/kml/shapes/library_maps.png';
        //erstellt einen neuen Marker ...
        var marker1 = new google.maps.Marker({
            position:myPos,
            icon:image2,
            map:map1,
            draggable:true,
            animation:google.maps.Animation.DROP,
            title:"hier liege ich und kann nicht (mehr) anders!"
            
        });
        var icon = {
            url:iconPath,//url
            scaledSize:new google.maps.Size(50,50)//Größe
        }
        var marker2 = new google.maps.Marker({
            position:myPos2,
            icon:icon,
            map:map1,
            draggable:true,
            animation:google.maps.Animation.DROP,
            title:"und hier ist meine Katze - und liest, schluck!"
            
        });
        var marker3 = new google.maps.Marker({
            position:myPos3,
            icon:image3,
            map:map1,
            draggable:true,
            title:"uuuuuahhh!"            
        });
        var markerHome = new google.maps.Marker({
            position:otherPosition,
            icon:image4,
            map:map2,
            title:"Home is where the heart is"
        });
        var contentString1='<div><h2>Hallöchen</h2><hr>'+
                '<p>Ick brauch einfach mal n Päuschen, schnurr!</p>'+
                '</div>'; 
        var contentString3='<div><h1>UUUAAAAH!</div>'; 
        var contentString4='<div><h1>Hier wohn icke!</div>';
        var infowindow1 = new google.maps.InfoWindow({
            content:contentString1
        });
        var infowindow3 = new google.maps.InfoWindow({
            content:contentString3
        });
        var infowindow4 = new google.maps.InfoWindow({
            content:contentString4
        });
        marker1.addListener('click', function(){
            infowindow1.open(map1, marker1);
        });  
        marker1.addListener('mouseout', function(){
            infowindow1.close(map1, marker1);
        }); 
        marker3.addListener('click', function(){
            infowindow3.open(map1, marker3);
        });  
        marker3.addListener('mouseout', function(){
            infowindow3.close(map1, marker3);
        }); 
        markerHome.addListener('click', function(){
            infowindow4.open(map2, markerHome)
        });
        btnHome.addEventListener('click', markerHome);
        
    };
    var otherPosition = {
        lat : btnHome.getAttribute('data-lat'),
        lng : btnHome.getAttribute('data-lng'),
        iconPath:'assets/images/bird.png'
    }
    //Benutzung des Google-Objekts aus der index.html und lädt mit addDomListener das Objekt
    google.maps.event.addDomListener(window,'load', getPosition);    
})();