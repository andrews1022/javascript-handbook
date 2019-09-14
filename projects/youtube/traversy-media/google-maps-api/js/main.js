function initMap() {
  // Map options
  const mapOptions = {
    center: { lat: 49.2827, lng: -123.1207 },
    zoom: 11
  };

  // New map of Vancouver
  const vancouverMap = new google.maps.Map(
    document.querySelector('#map'),
    mapOptions
  );

  // Add marker on Stanley Park
  const marker = new google.maps.Marker({
    position: { lat: 49.3043, lng: -123.1443 },
    map: vancouverMap
  });

  // Display information window
  const infoWindow = new google.maps.InfoWindow({
    content: `
    <div class="left">
      <h2>Stanley Park</h2>
      <p><span class="bold">Address</span>: Vancouver, BC V6G 1Z4</p>
      <p><span class="bold">Hours</span>: Open ⋅ Closes 5 p.m.</p>
    </div>
    `
  });

  // Event Listener for information window:
  marker.addListener('click', function display() {
    infoWindow.open(vancouverMap, marker);
  });
}

initMap();
