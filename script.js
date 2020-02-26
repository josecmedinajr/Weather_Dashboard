// updates date and time dynamically using the moment.js function
var update = function() {
    document.getElementById("datetime")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// JQuery getJSON function to get data from openweathermap.org (Miami) with my API: 3cdcca706cc22e516be1f657eb0929a4
var city = "Miami"

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=3cdcca706cc22e516be1f657eb0929a4",function(data){
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temperature = Math.floor(data.main.temp);
    var weatherCondition = data.weather[0].main

    $(".weather-icon").attr("src", icon);
    $(".temperature").append(temperature);
    $(".weather-condition").append(weatherCondition);
});