main()

function main() {
  var timeframe = return_timeframe()
  console.log(SM_WT);
  console.log(SM_ST);


  var filtered_data_WT = filterData(timeframe, SM_WT)
  var filtered_data_ST = filterData(timeframe, SM_ST)

  var analyzed_data_WT = calc_average(filtered_data_WT)
  var analyzed_data_ST = calc_average(filtered_data_ST)

  console.log("analyzed_data_WT");
  console.log(analyzed_data_WT);
  console.log("analyzed_data_ST");
  console.log(analyzed_data_ST);


  //create_leafleatmap()
}

function return_timeframe() {
  var timeframe = {
    start: sessionStorage.getItem('Start'),
    ende: sessionStorage.getItem('Ende'),
  }
  return timeframe
}



function calc_average(elmt) {

  var sum_biomasse = 0
  var sum_wasserkraft = 0
  var sum_windoff = 0
  var sum_windon = 0

  var sum_photo = 0
  var sum_sonst_e_energ = 0
  var sum_kernenergie = 0
  var sum_braunkohle = 0

  var sum_steinkohle = 0
  var sum_erdgas = 0
  var sum_pumpspeicher = 0
  var sum_sonst_k_energ = 0

  console.log("elmt");
  console.log(elmt);

  for (var i = 0; i < elmt.length; i++) {

    sum_biomasse +=   parseFloat(elmt[i].biomasse.wert)
    sum_wasserkraft +=  parseFloat(elmt[i].wasserkraft.wert)
    sum_windoff +=  parseFloat(elmt[i].windoffshore.wert)
    sum_windon +=  parseFloat(elmt[i].windonshore.wert)

    sum_photo +=  parseFloat(elmt[i].photovoltaik.wert)
    sum_sonst_e_energ +=  parseFloat(elmt[i].sonst_e_energ.wert)
    sum_kernenergie +=  parseFloat(elmt[i].kernenergie.wert)
    sum_braunkohle +=  parseFloat(elmt[i].braunkohle.wert)

    sum_steinkohle +=  parseFloat(elmt[i].steinkohle.wert)
    sum_erdgas +=  parseFloat(elmt[i].erdgas.wert)
    sum_pumpspeicher +=  parseFloat(elmt[i].pumpspeicher.wert)
    sum_sonst_k_energ += parseFloat(elmt[i].sonst_k_energ.wert)
  }


  var result = {
  }
  result.av_biomasse = sum_biomasse / elmt.length
  result.av_wasserkraft = sum_wasserkraft / elmt.length
  result.av_windoff = sum_windoff / elmt.length
  result.av_windon = sum_windon / elmt.length

  result.av_photo = sum_photo / elmt.length
  result.av_sonst_e_energ = sum_sonst_e_energ / elmt.length
  result.av_kernenergie = sum_kernenergie / elmt.length
  result.av_braunkohle = sum_braunkohle / elmt.length

  result.av_Steinkohle = sum_steinkohle / elmt.length
  result.av_erdgas = sum_erdgas / elmt.length
  result.av_Pumpspeicher = sum_pumpspeicher / elmt.length
  result.av_sonst_k_energ = sum_sonst_k_energ / elmt.length


  return result
}




function filterData(tf, day) {
  var filtered_data = [];


  /**  console.log(tf);
   console.log(SM_WT);
   console.log(SM_ST);
   console.log(SM_ST.kategorien.kategorie.bausteine.baustein[0].werte)
   console.log(SM_ST.kategorien.kategorie.bausteine.baustein[0].werte)*/


  var werte_biomasse = day.kategorien.kategorie.bausteine.baustein[0].werte
  var werte_wasserkraft = day.kategorien.kategorie.bausteine.baustein[1].werte
  var werte_windoffshore = day.kategorien.kategorie.bausteine.baustein[2].werte
  var werte_windonshore = day.kategorien.kategorie.bausteine.baustein[3].werte

  var werte_photo = day.kategorien.kategorie.bausteine.baustein[4].werte
  var werte_sonst_e_energ = day.kategorien.kategorie.bausteine.baustein[5].werte
  var werte_kernenergie = day.kategorien.kategorie.bausteine.baustein[6].werte
  var werte_braunkohle = day.kategorien.kategorie.bausteine.baustein[7].werte

  var werte_steinkohle = day.kategorien.kategorie.bausteine.baustein[8].werte
  var werte_erdgas = day.kategorien.kategorie.bausteine.baustein[9].werte
  var werte_pumpspeicher = day.kategorien.kategorie.bausteine.baustein[10].werte
  var werte_sonst_k_energ = day.kategorien.kategorie.bausteine.baustein[11].werte

  var first_index = getArrayIndexFromBaustein(tf.start, werte_biomasse)
  var last_index = getArrayIndexFromBaustein(tf.ende, werte_biomasse)

  for (let i = first_index; i < last_index; i++) {
    var temp = {
    }
    temp.biomasse = werte_biomasse.wert_detail[i]
    temp.wasserkraft = werte_wasserkraft.wert_detail[i]
    temp.windonshore = werte_windonshore.wert_detail[i]
    temp.windoffshore = werte_windoffshore.wert_detail[i]

    temp.photovoltaik = werte_photo.wert_detail[i]
    temp.sonst_e_energ = werte_sonst_e_energ.wert_detail[i]
    temp.kernenergie = werte_kernenergie.wert_detail[i]
    temp.braunkohle = werte_braunkohle.wert_detail[i]

    temp.steinkohle = werte_steinkohle.wert_detail[i]
    temp.erdgas = werte_erdgas.wert_detail[i]
    temp.pumpspeicher = werte_pumpspeicher.wert_detail[i]
    temp.sonst_k_energ = werte_sonst_k_energ.wert_detail[i]


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



  }


}
