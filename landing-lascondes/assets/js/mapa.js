
      //setear mapa, centro y zoom
      var mymap = L.map('mapita').setView([-33.408783, -70.567070], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZGFvcnRlZ2EiLCJhIjoiY2p0NzJpb2szMG5uNjQ0b210bHRxeW9qeSJ9.NVkofS7Un_KdALLrXiWJOw'
      }).addTo(mymap);

      //añadir icono personalizado
      var greenIcon = L.icon({
        iconUrl: 'assets/img/marcador.svg',
        //shadowUrl: 'leaf-shadow.png',
        iconSize:     [60, 120], // size of the icon
        //shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });

      //añadir marcadores
      var marker1 = L.marker([-33.408783, -70.567070], {icon: greenIcon}).addTo(mymap);
      var marker2 = L.marker([-33.407783, -70.557070], {icon: greenIcon}).addTo(mymap);

      marker1.bindPopup("<b>Punto 1</b><br>Dirección: ");
      marker2.bindPopup("<b>Punto 2</b><br>Dirección: ");
