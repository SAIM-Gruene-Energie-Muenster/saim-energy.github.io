main()

function main() {
    filterData()
//create_leafleatmap()
}

function filterData() {
    var start = sessionStorage.getItem('Start');
    var ende = sessionStorage.getItem('Ende');
    console.log(start+ende);
    console.log();
}


function create_leafleatmap(attributes) {
 
    var map = L.map('map').setView([51.9574469, 7.5719975], 13);//7.5719975,51.9574469  51.957, -0.09
 
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);
 
   var LeafIcon = L.Icon.extend({
     options: {
       shadowUrl: '',
       iconSize: [19, 47.5],
       shadowSize: [50, 64],
       iconAnchor: [11, 47],
       shadowAnchor: [4, 62],
       popupAnchor: [-1.5, -38]
     }
   });
 
  // var markers = L.markerClusterGroup();
 
 
   for (var i = 0; i < ladesaulen.length; i++) {
 
 
     L.marker(change(return_coords(ladesaulen, i))).addTo(map)
       .bindPopup(
         "Betreiber:" + ladesaulen[i].Betreiber + '<br>' +
         "Adresse:" + ladesaulen[i].Adresse + '<br>' +
         "Postleitzahl und Ort:" + ladesaulen[i]["Postleitzahl Ort"] + '<br>' +
         "Inbetriebnahmedatum:" + ladesaulen[i].Inbetriebnahmedatum + '<br>' +
         "Anschussleistung [kW]:" + ladesaulen[i]["Anschlussleistung [kW]"] + '<br>' +
         "Art der Ladeeinrichtung" + ladesaulen[i]["Art der Ladeeinrichtung"] + '<br>' +
         "Anzahl Ladepunkte:" + ladesaulen[i]["Anzahl Ladepunkte"] + '<br>' +
         "Steckertypen" + ladesaulen[i].Steckertypen1 + '<br>' +
         "Attribut"+ attributes
       )
 
 
 /**     var marker = L.marker(change(return_coords(ladesaulen, i)));
 
     marker.bindPopup(
       "Betreiber:" + ladesaulen[i].Betreiber + '<br>' +
       "Adresse:" + ladesaulen[i].Adresse + '<br>' +
       "Postleitzahl und Ort:" + ladesaulen[i]["Postleitzahl Ort"] + '<br>' +
       "Inbetriebnahmedatum:" + ladesaulen[i].Inbetriebnahmedatum + '<br>' +
       "Anschussleistung [kW]:" + ladesaulen[i]["Anschlussleistung [kW]"] + '<br>' +
       "Art der Ladeeinrichtung" + ladesaulen[i]["Art der Ladeeinrichtung"] + '<br>' +
       "Anzahl Ladepunkte:" + ladesaulen[i]["Anzahl Ladepunkte"] + '<br>' +
       "Steckertypen" + ladesaulen[i].Steckertypen1);
 
     // add marker
     markers.addLayer(marker);*/
   }
 
 
   //this.map.addLayer(markers);
 }
 