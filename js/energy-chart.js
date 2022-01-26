


var WT_xValues = ["Wasserkraft", "Photovoltaik", "Wind Offshore", "Wind Onshore"];
var WT_yValues = [sessionStorage.getItem("AD_WT.wasserkraft"), sessionStorage.getItem("AD_WT.photo"), sessionStorage.getItem("AD_WT.windoff"), sessionStorage.getItem("AD_WT.windon")];
var WT_barColors = ["green", "blue","gray","brown"];

var ST_xValues = ["Wasserkraft", "Photovoltaik", "Wind Offshore", "Wind Onshore"];
var ST_yValues = [sessionStorage.getItem("AD_ST.wasserkraft"), sessionStorage.getItem("AD_ST.photo"), sessionStorage.getItem("AD_ST.windoff"), sessionStorage.getItem("AD_ST.windon")];
var ST_barColors = ["green", "blue","gray","brown"];

// get Element by id ?????????
var winter_day = '2022-01-04'
var summer_day = '2022-05-23'

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
    legend: {display: false},
    title: {
      display: true,
      text: "Tagesdurchschnitte "+ winter_day + " in Megawatt:"
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
    legend: {display: false},
    title: {
      display: true,
      text: "Tagesdurchschnitte "+ summer_day + " in Megawatt:"
    }
  }
});