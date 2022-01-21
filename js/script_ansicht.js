main()

function main() {
  var timeframe = return_timeframe()


  var filtered_data = filterData(timeframe)

  var analzyed_data = analzyed_data(filtered_data)

  console.log(Strommix);
  //create_leafleatmap()
}

function return_timeframe() {
  var timeframe = {
    start: sessionStorage.getItem('Start'),
    ende: sessionStorage.getItem('Ende'),
  }
  return timeframe
}

function analzyed_data(fd) {
 

}

function calc_average(array) {
  for (var i = 0; i < Math.floor(fd.length/4); i++) {
    var hour_av
    for(var j=0; j<3;j++){
      hour_av =+ fd[i+j].biomasse.wert
    }
    

  }
  
}




function filterData(tf) {
  var filtered_data = [];


  /**  console.log(tf);
   console.log(SM_WT);
   console.log(SM_ST);
   console.log(SM_ST.kategorien.kategorie.bausteine.baustein[0].werte)
   console.log(SM_ST.kategorien.kategorie.bausteine.baustein[0].werte)*/


  var werte_biomasse = SM_ST.kategorien.kategorie.bausteine.baustein[1].werte
  var werte_wasserkraft = SM_ST.kategorien.kategorie.bausteine.baustein[2].werte
  var werte_windoffshore = SM_ST.kategorien.kategorie.bausteine.baustein[3].werte
  var werte_windonshore = SM_ST.kategorien.kategorie.bausteine.baustein[4].werte

  var first_index = getArrayIndexFromBaustein(tf.start, werte_biomasse)
  var last_index = getArrayIndexFromBaustein(tf.ende, werte_biomasse)

  for (let i = first_index; i < last_index; i++) {
    var temp = {
    }
    temp.biomasse = werte_biomasse.wert_detail[i]
    temp.wasserkraft = werte_wasserkraft.wert_detail[i]
    temp.windonshore = werte_windonshore.wert_detail[i]
    temp.windoffshore = werte_windoffshore.wert_detail[i]
    filtered_data.push(temp)
  }
  //console.log("Filterdata");
  //console.log(filtered_data);
  return filtered_data




}

function getArrayIndexFromBaustein(search_value, werte_array) {
  console.log(search_value)
  console.log(werte_array)
  for (var i = 0; i < werte_array.wert_detail.length; i++) {
    if (search_value == werte_array.wert_detail[i].Uhrzeit) {
      return i

    }
  }


}

function getArrayindex(tf) {
  for (let index = 0; index < Strommix.kategorien.kategorie.bausteine.baustein_name.length; index++) {
    const element = array[index];

  }
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
        "Attribut" + attributes
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
