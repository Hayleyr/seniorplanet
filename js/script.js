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
var info = L.control();

		info.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'info');
			this.update();
			return this._div;
		};

		info.update = function (props) {
			this._div.innerHTML = '<h6>(roll over the map)</h6>'
			 	+ '<h4>number of centers per council district</h4>' + (props ? 
				'<b><h1>' + props.pedestrians2_Crashes + '</h1></b><br />'
				+ props.pedestrians2_Borough + ' '
				+ props.pedestrians2_Date + ' '
				: ' ')
					+ '<h4>number of centers per council district</h4>' ;
		};

		info.addTo(map);



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

	);
}




$.getJSON('sites2.geojson',function(data){
			console.log(data);
			window.data = data;
	var geojsonLayer = L.geoJson(data.features, {
		onEachFeature: bindPopups
	}).addTo(map);  
});

$.getJSON('Untitled.geojson',function(data){
			console.log(data);
			window.data = data;
	var geojsonLayer = L.geoJson(data.features, {
	
	}).addTo(map);  
});


   


/*function helloThere (feature,layer){
	bindPopups(feature, layer);
	
	addMarkers (feature,layer);
}

var marker = {
		radius: 4,
				
		color: "#000",
		weight: 1,
				
		fillOpacity: 0.8,
		fillColor: 'red'
}
function addMarkers (feature, latlng){ 
	console.log(data);

	return L.circleMarker(latlng, marker).addTo(map);
}
	


	/*	return L.circleMarker(latlng, {
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
		
}*/

 





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




*/







