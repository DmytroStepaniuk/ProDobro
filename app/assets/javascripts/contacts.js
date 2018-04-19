var geocoder;
var coords;
var map;
var marker;
function initMap() {
  if (coords===undefined){setCoords()}
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15
  });
  map.visualRefresh = true;
  geocoder = new google.maps.Geocoder();
  setMarker(geocoder, map);
  var input = document.getElementById('searchTextField');
  new google.maps.places.Autocomplete(input);
}

function setMarker(geocoder, map) {
  geocoder.geocode({'location': coords}, function(results, status) {
    if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
        marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        draggable: true,
        title: "Drag me!"
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function ChangeAddress(){
  var geocoder = new google.maps.Geocoder();
  var address = $('#searchTextField').val();

  geocoder.geocode( { 'address': address}, function(results, status) {

  if (status == google.maps.GeocoderStatus.OK) {
      $('#contact_address_attributes_latitude').val(results[0].geometry.location.lat());
      $('#contact_address_attributes_longitude').val(results[0].geometry.location.lng());
      setCoords();
      moveMarker(coords);
      }
  });
}

function setCoords(){
  coords = { lat: parseFloat($('#contact_address_attributes_latitude').val()),
             lng: parseFloat($('#contact_address_attributes_longitude').val())
             };
}

function moveMarker(newLatLng) {
    marker.setPosition(newLatLng);
    map.setCenter(newLatLng);
}
$('button').click(()=>{ ChangeAddress();});
