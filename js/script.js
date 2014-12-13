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

  $('#searchAddress').keypress(function(e){
    geoSearch._onKeyUp(e);
    if(e.charCode==13) {
      $('#mask').fadeOut();
   	  $('#splash').fadeOut();
    }
  });
 

//L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);

 /*  pointToLayer: function (feature, latlng) {
				return L.Icon(latlng) {
				
					Icon: GetIcon(feature.properties.PCC)
				});
			}
 }).addTo(map);
 */
 
  


//function GetIcon(d){if(d != null) {myIcon}}



function bindPopups(feature, layer){
	//console.log(feature);
	layer.bindPopup(
		feature.properties.Site
		+ "<br/><strong>Main Contact Person:</strong> "
		+ feature.properties.Person
		+ "<br/><strong>Phone Number:</strong> "
		+ feature.properties.Phone
		+ "<br/><strong>Email:</strong> "
		+ feature.properties.Email
		+ "<br/><strong>Address:</strong> "
		+ feature.properties.Address
			+ "<br/><strong>Website:</strong> "

	);
}


/*$.getJSON('sites2.geojson', function(data){

	console.log(data);
	window.data = data;
	L.geoJson(data.features, {  //use leaflet's functionality to grab geoJSON features
		onEachFeature: bindPopups
	}).addTo(map);  //add to map
});*/

$.getJSON('sites2.geojson',function(data){
			console.log(data);
			window.data = data;
	var geojsonLayer = L.geoJson(data.features, {
		onEachFeature: bindPopups
	}).addTo(map);  
});

    //onEachFeature: makeMarkers,
   /* pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 4,
				
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8,
					fillColor: getColor(feature.properties.PCC)
				});
			}
  }).addTo(map);

	function getColor(d) {			return d == "null" ? '#218282' :
			       d == "PCC"  ? '#FF3300' :
			     
			       	                  '#eff3ff';
		

			   
		
		}











