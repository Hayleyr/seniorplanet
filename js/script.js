var map = L.map('map')
	.setView([40.7109417, -74.0061738], 11);


//set up basemap tiles from mapbox
L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roadsg/x={x}&y={y}&z={z}', {
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






function makeMarkers(feature, layer){
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

	);
}


$.getJSON('sites2.geojson', function(data){
	//console.log(data);
	L.geoJson(data.features, {  //use leaflet's functionality to grab geoJSON features
		onEachFeature: makeMarkers
	}).addTo(map);  //add to map
});










