var map = L.map('map').setView([51.9574469,7.5719975], 13);//7.5719975,51.9574469  51.957, -0.09

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var LeafIcon = L.Icon.extend({
    options: {
    shadowUrl: '',
    iconSize:     [19, 47.5],
    shadowSize:   [50, 64],
    iconAnchor:   [11, 47],
    shadowAnchor: [4, 62],
    popupAnchor:  [-1.5, -38]
    }
    });