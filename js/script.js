var map = L.map('map')
	.setView([40.7109417, -74.0061738], 11);


//set up basemap tiles from mapbox
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

	var geoSearch = new L.Control.GeoSearch({
    provider: new L.GeoSearch.Provider.Google(),
    showMarker: true,

  }).addTo(map);

  $( "#skip" ).click(function() {
      getSites();
  $( "#mask" ).fadeOut( "slow", function() {
    // Animation complete.
  });
});
$( "#skip" ).click(function() {
    getSites();
  $( "#splash" ).fadeOut( "slow", function() {
    // Animation complete.
  });
});

  $('#searchAddress').keypress(function(e){
    geoSearch._onKeyUp(e);
    if(e.charCode==13) {
      getSites();
      $('#mask').fadeOut();
   	  $('#splash').fadeOut();
    }
  });
 

  






function bindPopups(feature, layer){
	console.log('binding + popup');
	layer.bindPopup(
		feature.properties.Site
		+ "<br/><br/><strong>Main Contact Person:</strong> "
		+ feature.properties.Person
		+ "<br/><strong>Phone Number:</strong> "
		+ feature.properties.Phone
		+ "<br/><strong>Email:</strong> "
		+ feature.properties.Email
		+ "<br/><strong>Address:</strong> "
		+ feature.properties.Address
		//	+ "<br/><strong>Website:</strong> "
		//	+ feature.properties.Website
			//		+ "<br/><strong>Courses Offered:</strong> "
			//			+ feature.properties.Courses
								+ "<br/><strong>Council District:</strong> "
									+ feature.properties.CD
                  + "<br/><strong>Public Computer Center?:</strong> "
                  + feature.properties.PCC

	);
}




$.getJSON('councilDistv2.geojson',function(data){
			console.log(data);
			window.data = data;
	var geojsonLayer = L.geoJson(data.features, {
		style: {
			weight: 2,
				opacity: .5,
				color: 'orange',
				dashArray: '3',
				fillColor: 'white',
				fillOpacity: .01,
				label: "${getLabel}"
				
    }, 


 onEachFeature: 

               function (feature, layer) {
                 layer.on('mouseover', function(e){
                  distNum = feature.properties.CounDist;
                  $('#sidebar').text ('Council District Number: ' + distNum);

                 }); 
                 layer.on('mouseout', function(e){
                
                  $('#sidebar').text ('Hover over a district!');

                 }); 


                      
               }



   
	
	});
  
   
  geojsonLayer.addTo(map);  
});






function getSites () {
$.getJSON('sites2.geojson',function(data){
       console.log(data);

       var geojsonMarkerOptions = {
               radius: 8,
               fillColor: "#ff7800",
               color: "#000",
               weight: 1,
               opacity: 1,
               fillOpacity: 0.8
       };


       var geojsonLayer = L.geoJson(data.features, {
       onEachFeature: bindPopups,

               pointToLayer: function (feature, latlng) {
                 console.log(feature);
                       if (feature.properties.PCC == "PCC") { geojsonMarkerOptions.fillColor = "#575757"; return L.circleMarker(latlng, geojsonMarkerOptions); }
                       if (feature.properties.PCC == null) { geojsonMarkerOptions.fillColor = "#e3312b"; return L.circleMarker(latlng, geojsonMarkerOptions); }
               }

       }).addTo(map);  
});
}












		
	














