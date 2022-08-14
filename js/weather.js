API_KEY="37ac5875b3b90eb189f6d8ba05ad702d";






function geoSuccess (position){
    const lat = position.coords.latitude;
    const log =position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=>response.json()).then(data=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        weather.innerText=`Weather : ${data.weather[0].main} temp : ${data.main.temp}`;
        city.innerText=`지역 : ${data.name}`;
    });
}

function geoFailure(){
    alert("Can't find your location!!");
}
navigator.geolocation.getCurrentPosition(geoSuccess,geoFailure);