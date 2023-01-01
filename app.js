// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
    key : "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather", 
}

const searchBox = document.getElementById('search-box');

searchBox.addEventListener("keypress",(event)=>{
    if(event.keyCode ==13){
        console.log(searchBox.value);
        getWeatherStatus(searchBox.value);
        document.querySelector('.weather-status').style.display = "block";
    }
})

function getWeatherStatus(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(wether =>{
        return wether.json();
    }).then(showWeatherStatus);
}

function showWeatherStatus(weather){
    console.log(weather);

    let city = document.getElementById("location");
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById("temp");
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let min_max_temp= document.getElementById("min-max");
    min_max_temp.innerHTML = `${Math.round(weather.main.temp_min)}&deg;C (min) / ${Math.round(weather.main.temp_max)}&deg;C (max)`;

    let weather_type = document.getElementById("weather");
    weather_type.innerHTML = `${weather.weather[0].main}`;   
    
    let date = document.getElementById("date");
    let todayDate = new Date();
    date.innerText = showDate(todayDate);

    if(weather_type.textContent=='Clear'){
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/u01ioCe6G8URG/giphy.gif')";
    }else if(weather_type.textContent=='Clouds'){
        document.body.style.backgroundImage = "url('https://www.bing.com/th/id/OGC.fe6f9bc13a043d420e2fec58ab2f8d1b?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f3o7rc6sa2RvKo8K5EI%2fgiphy.gif&ehk=AeiEdXjva%2b4s9NNNNF3rXzUDdEEUeGee2lZNpRSjXAk%3d')";
    }else if(weather_type.textContent=='Haze'){
        document.body.style.backgroundImage = "url('https://i.gifer.com/origin/e7/e746033a33e432549687bb84c8656379_w200.gif')";
    }else if(weather_type.textContent=='Rain'){
        document.body.style.backgroundImage = "url('https://giffiles.alphacoders.com/105/105408.gif')";
    }else if(weather_type.textContent=='Thunderstrom'){
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R.f56137f3cc45d924a1d913f19a0ccbe7?rik=LxvSyoIVa2vuUw&riu=http%3a%2f%2f24.media.tumblr.com%2f784d835da1022d699c93673ce600a079%2ftumblr_mpuzyz36Tx1sy1yolo1_500.gif&ehk=LZW8YHVIYHPfaABYIre3aKCO%2bpJm3QsYnQ%2fe5CdEIeQ%3d&risl=&pid=ImgRaw&r=0')";
    }else if(weather_type.textContent=='Snow'){
        document.body.style.backgroundImage = "url('https://3.bp.blogspot.com/-3BDD44LvN0I/VHHmImaQ2BI/AAAAAAAAMZg/Rr-OKNsC2Zc/s1600/SnowBeforeAndAfter%2B(2%2Bof%2B2)-SNOW.gif')";
    }else if(weather_type.textContent=='Mist'){
        document.body.style.backgroundImage = "url('https://i.gifer.com/origin/e7/e746033a33e432549687bb84c8656379_w200.gif')";
    }
}

function showDate(arg){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = arg.getFullYear();
    let day = days[arg.getDay()];
    let month = months[arg.getMonth()];
    let date = arg.getDate();

    return `${date} ${month} (${day}), ${year}`;
}