main()

function main() {
  create_leafleatmap()
  //create_marker_for_ls()

}

function create_leafleatmap() {
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

 

    for (var i = 0; i<ladesaulen.length;i++){
      //for (var i = 0; i<20;i++){
    
        L.marker(change(return_coords(ladesaulen,i))).addTo(map) // [51.5, -0.09] change(convert_GJSON_to_Array(busstops,i))
        .bindPopup("Betreiber:"+ ladesaulen[i].Betreiber +'<br>'+"Adresse:"+ ladesaulen[i].Adresse+'<br>'+"Postleitzahl und Ort:"+ladesaulen[i]["Postleitzahl Ort"] + '<br>' + "Inbetriebnahmedatum:"+ ladesaulen[i].Inbetriebnahmedatum+ '<br>' + "Anschussleistung [kW]:"+ladesaulen[i]["Anschlussleistung [kW]"]+ '<br>' + "Art der Ladeeinrichtung"+ ladesaulen[i]["Art der Ladeeinrichtung"]+ '<br>' +"Anzahl Ladepunkte:"+ladesaulen[i]["Anzahl Ladepunkte"]+ '<br>' +"Steckertypen"+ladesaulen[i].Steckertypen1)
      }
}


function create_marker_for_ls() {
      for (var i = 0; i<20;i++){
      //for (var i = 0; i<20;i++){
    
        L.marker(change(return_coords(ladesaulen,i))).addTo(map) // [51.5, -0.09] change(convert_GJSON_to_Array(busstops,i))
        .bindPopup("Bezeichnung:  ")
      }
}


function return_coords(JSON_LS,i){

 let arr = [1]
 
 let breitengrad_string = JSON_LS[i].Breitengrad
 let laengengrad_string = JSON_LS[i].Längengrad

 let breitengrad_without_kommata = replace_kommas_to_points(breitengrad_string)
 let laengengrad_without_kommata = replace_kommas_to_points(laengengrad_string)

 let breitengrad_float = parseFloat(breitengrad_without_kommata)
 let laengengrad_float = parseFloat(laengengrad_without_kommata)

 return [laengengrad_float,breitengrad_float]


}

function replace_kommas_to_points(Strg) {
  var temp = Strg.replace(",",".")
  return temp
  
}

function change(array){
  //  console.log("arrayohnewechsel"+array);
  var temp;
  temp=array[0];
  array[0]=array[1];
  array[1]=temp;

  //console.log("arraygewechselt"+array);
  return array;
}

function test() {
  console.log(strommix)
  console.log(ladesaulen);
}



