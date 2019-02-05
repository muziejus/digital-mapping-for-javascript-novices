let map = L.map("map"); // initialize the map
L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}", {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> — Map data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: "abcd",
      minZoom: 0,
      maxZoom: 20,
      ext: "png"
  }).addTo(map); // set the tileLayer and add it to the map.

places.forEach(function(location){
  let color ;
  if(location.mentions === 2){
    color = "green" ;
  } else {
    color = "red" ;
  }
  let options = { color: color, fillColor: color } ;
  L.circleMarker(location.coords, options)
    .bindPopup(`<h3>This place is ${location.name}</h3>`)
    .addTo(map) ;
}) ;
map.fitBounds([[23, -125], [50, -65]]) ;
