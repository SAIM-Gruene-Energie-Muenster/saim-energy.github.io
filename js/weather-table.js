/*
try {
    console.log(api_key);
} catch (error) {
    console.error("no api key available");
}
if(api_key != ''){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Muenster,DE&appid=' + api_key,
//        'http://history.openweathermap.org/data/2.5/history/city?q=Munchen,DE&appid='+api_key,
        type: "GET",
        dataType: "JSON",
        success: function(data){
            console.log(data)
            console.log(data.wind);
            console.log(data.wind.gust);
            get_icon(data)
            create_weather_table(data)        
        }
    })
}else console.log("Ups - api_key is empty");


function get_icon(input_data) {
    var iconcode = input_data.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon').attr('src', iconurl);
}


function create_weather_table(input_data) {
    input_data
    // document.getElementById("weather_data").innerHTML = ' <a href="http://openweathermap.org/img/wn/10d@2x.png"></a>';
    console.log("http://openweathermap.org/img/wn/10d@2x.png");
    var table = document.getElementById("weather_table")
    var row = table.insertRow()
    row.insertCell().innerHTML = input_data.weather[0].description
    row.insertCell().innerHTML = input_data.clouds.all
    row.insertCell().innerHTML = input_data.wind.deg
    if (typeof(input_data.wind.gust) === "gust") {
        row.insertCell().innerHTML = input_data.wind.gust
    } else row.insertCell().innerHTML = "N.N."
    row.insertCell().innerHTML = input_data.wind.speed
    return -1
}


*/