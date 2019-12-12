var search = document.getElementById("search");
search.addEventListener("keyup", e=> {
    if (e.keyCode === 13) {
        var getCityname = e.target.value;
    }
    getWeather(getCityname);
});

//events
function getWeather(getCityname) {
    // console.log(getCityname);
    const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${getCityname}&&mode=json&units=metric&APPID=9d3f42e839a146b0466a7b441775e883`;

    
    window.fetch(weatherApi).then(data => {
    data.json().then(weather => {
        
        var output="";
        console.log(weather);
        console.log(weather.coord.lon);
        console.log(weather.coord.lat);
       

        //array here
        var weatherData = weather.weather;
        for(let x of weatherData) {
            output +=`
            <div class="mt-4 weatherblock">
<div class="card-body1"> 
<h1>${weather.name} </h1>
<span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
<p><span>Timezone:</span>
<span class="time">${weather.timezone}</span>
<p><span>Humidity:</span>
<span class="time">${weather.main.humidity}</span>
<p><span>temp:</span>
<span class="temp">${weather.main.temp}&deg;c<span></p>

<span clss="des float-left" >${x.main}</span>
<span class="des1 float-right" >${x.description} </span>
</div>
            </div>` ;
document.getElementById("template").innerHTML=output;
            // console.log(x);
            // console.log(x.id);
            // console.log(x.main);
            // console.log(x.description);
            // console.log(x.icon);
        }
    })
    .catch(err => console.log(err));
})
.catch(err=> console.log(err));
};