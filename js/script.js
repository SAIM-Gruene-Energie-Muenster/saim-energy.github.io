main()

function main() {
  var attributes = "default"
  create_leafleatmap(attributes)
  //create_marker_for_ls()

}

function create_leafleatmap(attributes) {
 
   var map = L.map('map').setView([51.964068, 7.621971], 13);//7.5719975,51.9574469  51.957, -0.09

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

 var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// this is for red marker - currently unused since we weren't 100% sure whether those really are green energy
/*
var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
*/


  for (var i = 0; i < ladesaulen.length; i++) {

    if (ladesaulen[i].Ökostrom == "TRUE") {
      L.marker(change(return_coords(ladesaulen, i)), {icon: greenIcon}).addTo(map)
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
    } else {
      L.marker(change(return_coords(ladesaulen, i)), /*{icon: redIcon}*/).addTo(map)
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
    }  


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


function create_marker_for_ls(L) {
  for (var i = 0; i < 20; i++) {
    //for (var i = 0; i<20;i++){

    L.marker(change(return_coords(ladesaulen, i))).addTo(map) // [51.5, -0.09] change(convert_GJSON_to_Array(busstops,i))
      .bindPopup("Bezeichnung:  ")

    var marker = L.marker(change(return_coords(ladesaulen, i)));

    marker.bindPopup(View(event));

    // add marker
    markers.addLayer(marker);
  }
}


function return_coords(JSON_LS, i) {

  let arr = [1]

  let breitengrad_string = JSON_LS[i].Breitengrad
  let laengengrad_string = JSON_LS[i].Längengrad

  let breitengrad_without_kommata = replace_kommas_to_points(breitengrad_string)
  let laengengrad_without_kommata = replace_kommas_to_points(laengengrad_string)

  let breitengrad_float = parseFloat(breitengrad_without_kommata)
  let laengengrad_float = parseFloat(laengengrad_without_kommata)

  return [laengengrad_float, breitengrad_float]


}

function replace_kommas_to_points(Strg) {
  var temp = Strg.replace(",", ".")
  return temp

}

function change(array) {
  //  console.log("arrayohnewechsel"+array);
  var temp;
  temp = array[0];
  array[0] = array[1];
  array[1] = temp;

  //console.log("arraygewechselt"+array);
  return array;
}

function test() {
  console.log(strommix)
  console.log(ladesaulen);
}


function selectData() {
  console.log("button funktioniert");
  var anfangsdatum = document.getElementById("start_date")
  var enddatum = document.getElementById("end_date")
  console.log("A"+ anfangsdatum.value + "E"+ enddatum.value);
  console.log(anfangsdatum);



}


