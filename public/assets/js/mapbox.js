mapboxgl.accessToken = 'pk.eyJ1Ijoic3JvczI3IiwiYSI6ImNsZXlveXdjZDBqNGczeXFraWY1dXp6MzYifQ.PESgUxpygsjZL07JvQFxaQ';
var currentMarkers=[];
const locationMap = [];
const coordinates = document.getElementById('coordinates');
var response = '';
var dataGeoCoordinates = [];

const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-96, 37.8],
    zoom: 3
});
// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
);
const marker = new mapboxgl.Marker({
    color: '#3bb2d0',
    draggable: true,
});

map.on('click', (e) => {
    const lngLat = e.lngLat;
    marker.setLngLat([lngLat.lng, lngLat.lat]).addTo(map);
        position(lngLat.lng, lngLat.lat, marker);
});

marker.on('dragend', searchCoord);


function position(lng, lat, marker){
  // tmp marker
   currentMarkers.push(marker);

    if (currentMarkers.length === 2){
        max  = currentMarkers.length;
    currentMarkers[max].remove();
    }

    if(currentMarkers.length <= 2){
        fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/'+lng+','+lat+'.json?access_token='+mapboxgl.accessToken)
        .then(response => response.json())
        .then(data => {
            dataGeoCoordinates.push(data);
            document.getElementById('features').innerHTML = JSON.stringify(
                data,
                null,
                2
            );
        });
    }
}

function searchCoord(){
    const coord = marker.getLngLat();
    dataGeoCoordinates.length = 0;
    response = fetch(
    'https://api.mapbox.com/geocoding/v5/mapbox.places/'+coord.lng+','+coord.lat+'.json?access_token='+mapboxgl.accessToken
    )
    .then(response => response.json())
    .then(data => {
        coordinates.innerHTML = `Longitude: ${coord.lng}<br />Latitude: ${coord.lat} <br/>Direction: ${data.features[0].place_name}`;
        coordinates.style.display = 'block';
        data.features.forEach(element => {
            dataGeoCoordinates.push(JSON.stringify(
                [`${element.place_type[0]}`, element.text],
                null,
                2
            ));

        });

        document.getElementById('features').innerHTML = dataGeoCoordinates;
    });
}
