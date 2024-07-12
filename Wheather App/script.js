const api="4087bd9b8e051a7d277e5d0502cff861";
const weatherForm=document.querySelector(".weatherForm");
const cityInput=document.querySelector(".city")
const card=document.querySelector(".card");

async function dataFetch(){
    
    const city = cityInput.value.trim(); // Ensure to trim whitespace
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);

            displayError("Failed to retrieve weather data. Please try again later.");
        }
    } else {
        displayError("Please Enter A City!!");
    }
};
async function getWeatherData(city){

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    const res=await fetch(url);
if(!res.ok){
    throw new Error("Could not fetch Data");
}
return await res.json();
}

function displayWeatherInfo(data){
    const {name:city,
            main:{temp,humidity},
            weather:[{description, id}]}=data;
    card.textContent="";
    card.style.display="flex";    
    const cityDisplay=document.createElement("h1");    
    const tempDisplay=document.createElement("p");    
    const humidityDisplay=document.createElement("p");    
    const decribeDisplay=document.createElement("p");    
    const weatherEmoji=document.createElement("p");    

    cityDisplay.textContent=city;
    tempDisplay.textContent=`${(temp-273.15).toFixed(1)}°C`
    humidityDisplay.textContent=`Humidity: ${humidity}%`
    decribeDisplay.textContent=description;
    weatherEmoji.textContent=getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay")
    tempDisplay.classList.add("tempDisplay")
    humidityDisplay.classList.add("humidityDisplay")
    decribeDisplay.classList.add("decribeDisplay")
    weatherEmoji.classList.add("weatherEmoji")

    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    card.appendChild(humidityDisplay)
    card.appendChild(decribeDisplay)
    card.appendChild(weatherEmoji)
    
}

function getWeatherEmoji(id){
    switch(true){
        case (id>=200 && id<300):
            return"⚡";
        case (id>=300 && id<400):
            return"🌧️";
        case (id>=500 && id<600):
            return"🌧️";
        case (id>=600 && id<700):
            return"❄️";
        case (id>=700 && id<800):
            return"🌫️";
        case (id===800):
            return"☀️";
        case (id>=801 && id<810):
            return"☁️";
        default:
            return "🤔";
            
    }
}
function displayError(message){
    const errorDisplay=document.createElement("p");
    errorDisplay.textContent=message;
    errorDisplay.classList.add("errorDisplay")
    card.textContent="";
    card.style.display="flex";
    card.appendChild(errorDisplay);
}