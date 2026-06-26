const searchBtn = document.getElementById("searchBtn");

const cityInput = document.getElementById("cityInput");

const loading = document.getElementById("loading");

const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", getWeather);

async function getWeather(){

    const city = cityInput.value.trim();

    if(city===""){

        alert("Please enter a city name.");

        return;

    }

    loading.innerText="Loading Weather...";

    weatherResult.innerHTML="";

    const apiKey="8e87fa9db0db57d577b02d74f82d0008";

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response=await fetch(url);

        if(!response.ok){

            throw new Error("City Not Found");

        }

        const data=await response.json();

        loading.innerText="";

        weatherResult.innerHTML=`

        <h2>${data.name}</h2>

        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

        <h2>${data.main.temp} °C</h2>

        <p><strong>Condition:</strong> ${data.weather[0].main}</p>

        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>

        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>

        `;

    }

    catch(error){

        loading.innerText="";

        weatherResult.innerHTML="<h2>City Not Found</h2>";

        console.log(error);

    }

}