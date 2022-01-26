


var xValues = ["Wasserkraft", "Photovoltaik", "Wind Offshore", "Wind Onshore"];
var yValues = [sessionStorage.getItem("AD_WT.wasserkraft"), sessionStorage.getItem("AD_WT.photo"), sessionStorage.getItem("AD_WT.windoff"), sessionStorage.getItem("AD_WT.windon")];
var barColors = ["green", "blue","gray","brown"];

// get Element by id ?????????
var winter_day = '2022-01-04'
var summer_day = '2022-05-23'

new Chart("winterchart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
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