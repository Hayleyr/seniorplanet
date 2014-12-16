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
 /* var myIcon = L.icon({
    iconUrl: 'img/computers.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [32, 37], // size of the icon
    shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
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
		+ "<br/><br/><strong>Main Contact Person:</strong> "
		+ feature.properties.Person
		+ "<br/><strong>Phone Number:</strong> "
		+ feature.properties.Phone
		+ "<br/><strong>Email:</strong> "
		+ feature.properties.Email
		+ "<br/><strong>Address:</strong> "
		+ feature.properties.Address
			+ "<br/><strong>Website:</strong> "
			+ feature.properties.Website
					+ "<br/><strong>Courses Offered:</strong> "
						+ feature.properties.Courses
								+ "<br/><strong>Council District:</strong> "
									+ feature.properties.CD

	);
}



// function onEachFeature(feature, layer) {
// 			layer.on({
// 				mouseover: highlightFeature,
// 				mouseout: resetHighlight,
// 				click: zoomToFeature
// 			});
// 		}

$.getJSON('sites2.geojson',function(data){
			console.log(data);
			window.data = data;
	var geojsonLayer = L.geoJson(data.features, {
		
		onEachFeature: bindPopups,
		 pointToLayer: function (feature, latlng) 
 
      if (feature.property.PCC == "PCC") { geoJsonMarkerOptions.color = "#575757"; return L.circleMarker(latlng, geojsonMarkerOptions); }
      if (feature.property.PCC == "null") { geoJsonMarkerOptions.color = "#e3312b"; return L.circleMarker(latlng, geojsonMarkerOptions); }
      
   }
	}).addTo(map);  
});

// geojson = L.geoJson('councilDistv1.geojson' {
// 			style: style,
// 			onEachFeature: onEachFeature
// 		}).addTo(map);

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
   
	
	}).addTo(map);  
});











		
	













