var xValues = ["Biomasse", "Wasserkraft", "Wind Offshore", "Wind Onshore"];
var yValues = [11, 234, 44, 24];
var barColors = ["green", "blue","gray","brown"];

// get Element by id ?????????
var day = '2020-02-03'

new Chart("myChart", {
  type: "bar",
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
      text: "Tagesdurchschnitte "+ day + " in Megawatt:"
    }
  }
});