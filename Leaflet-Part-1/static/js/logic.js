// create map
var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 11
});

//add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//load the GeoJSON data
var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

var geojson;

// Get the data with d3
d3.json(geoData).then(function(data) {
    console.log(data);



});