function initMap() {
  var zymo = {lat: 44.519689, lng: -88.064122};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: zymo
      });
  var marker = new google.maps.Marker({
    position: zymo,
    map: map
  });
}

