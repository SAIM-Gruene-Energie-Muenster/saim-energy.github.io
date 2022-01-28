


var WT_xValues = [
  "Wasserkraft",
  "Photovoltaik",
  "Wind Offshore",
  "Wind Onshore",

  "Biomasse",
  "Sonstige erneuerbare Energie",
  "Kernenergie",
  "Braunkohle",

  "Steinkohle",
  "Erdgas",
  "Pumpspeicher",
  "Sonstige konventionelle Energie"
];


var WT_yValues = [
  sessionStorage.getItem("AD_WT.wasserkraft"),
  sessionStorage.getItem("AD_WT.photo"),
  sessionStorage.getItem("AD_WT.windoff"),
  sessionStorage.getItem("AD_WT.windon"),

  sessionStorage.getItem("AD_WT.biomasse"),
  sessionStorage.getItem("AD_WT.sonst_e_energ"),
  sessionStorage.getItem("AD_WT.kernenergie"),
  sessionStorage.getItem("AD_WT.braunkohle"),

  sessionStorage.getItem("AD_WT.steinkohle"),
  sessionStorage.getItem("AD_WT.erdgas"),
  sessionStorage.getItem("AD_WT.pumpspeicher"),
  sessionStorage.getItem("AD_WT.sonst_k_energ")


];
var WT_barColors = [
  "blue", "yellow", "lightblue", "pink",
  "green", "red", "orange", "brown",
  "gray", "darkgreen", "purple", "darkblue"];



var ST_xValues = [
  "Wasserkraft",
  "Photovoltaik",
  "Wind Offshore",
  "Wind Onshore",

  "Biomasse",
  "Sonstige erneuerbare Energie",
  "Kernenergie",
  "Braunkohle",

  "Steinkohle",
  "Erdgas",
  "Pumpspeicher",
  "Sonstige konventionelle Energie"


];
var ST_yValues = [
  sessionStorage.getItem("AD_ST.wasserkraft"),
  sessionStorage.getItem("AD_ST.photo"),
  sessionStorage.getItem("AD_ST.windoff"),
  sessionStorage.getItem("AD_ST.windon"),

  sessionStorage.getItem("AD_ST.biomasse"),
  sessionStorage.getItem("AD_ST.sonst_e_energ"),
  sessionStorage.getItem("AD_ST.kernenergie"),
  sessionStorage.getItem("AD_ST.braunkohle"),

  sessionStorage.getItem("AD_ST.steinkohle"),
  sessionStorage.getItem("AD_ST.erdgas"),
  sessionStorage.getItem("AD_ST.pumpspeicher"),
  sessionStorage.getItem("AD_ST.sonst_k_energ")

];
var ST_barColors = [
  "blue", "yellow", "lightblue", "pink",
  "green", "red", "orange", "brown",
  "gray", "darkgreen", "purple", "darkblue"];

// get Element by id ?????????

var winter_day = '04.01.2022 ' + sessionStorage.getItem("Start") + '-' + sessionStorage.getItem("Ende") + " Uhr"
var summer_day = '23.05.2021 ' + sessionStorage.getItem("Start") + '-' + sessionStorage.getItem("Ende") + " Uhr"

new Chart("winterchart", {
  type: "pie",
  data: {
    labels: WT_xValues,
    datasets: [{
      backgroundColor: WT_barColors,
      data: WT_yValues
    }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Tagesdurchschnitte " + winter_day + " in Megawatt (gerundet):"
    }
  }
});

new Chart("summerchart", {
  type: "pie",
  data: {
    labels: ST_xValues,
    datasets: [{
      backgroundColor: ST_barColors,
      data: ST_yValues
    }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Tagesdurchschnitte " + summer_day + " in Megawatt (gerundet):"
    }
  }
});