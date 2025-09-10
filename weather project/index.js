const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = "b61c2353fac0e66e28f79e5b0cde2515";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
         catch (error) {
            console.error(error);
            displayError(error);
        }

    } 
    else {
        displayError("Please enter a city name.");
    }
    
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(apiUrl);
    
   console.log(response);
    if (!response.ok) {
        throw new Error("City not found. Please check the name and try again.");
    }

    const data = await response.json();
    return data;
}

function displayWeatherInfo(data) {
            const { name:city,
                    main:{temp,humidity},
                    weather: [{description, id}]} = data;

   card.textContent = "";
   card.style.display = "flex";

   const cityDisplay = document.createElement("h1");
   const tempDisplay = document.createElement("p");
   const humidityDisplay = document.createElement("p");
   const descDisplay = document.createElement("p");
   const weatherEmoji = document.createElement("p");

   cityDisplay.textContent = city;
   tempDisplay.textContent = `Temperature: ${temp.toFixed(1)}°C`;
   humidityDisplay.textContent = `Humidity: ${humidity}%`;
   descDisplay.textContent = `Description: ${description}`;
   weatherEmoji.textContent = getWeatherEmoji(id);


   cityDisplay.classList.add("cityDisplay");
   tempDisplay.classList.add("tempDisplay");
   humidityDisplay.classList.add("humidityDisplay");
   descDisplay.classList.add("descDisplay");
   weatherEmoji.classList.add("weatherEmoji");

   card.appendChild(cityDisplay);
   card.appendChild(tempDisplay);
   card.appendChild(humidityDisplay);
   card.appendChild(descDisplay);
   card.appendChild(weatherEmoji);
    

}

function getWeatherEmoji(weather) {
    if (weather >= 200 && weather < 300) {
        return "⛈️"; // Thunderstorm
    } else if (weather >= 300 && weather < 500) {
        return "🌧️"; // Drizzle
    } else if (weather >= 500 && weather < 600) {
        return "🌧️"; // Rain
    } else if (weather >= 600 && weather < 700) {
        return "❄️"; // Snow
    } else if (weather >= 700 && weather < 800) {
        return "🌫️"; // Atmosphere
    } else if (weather === 800) {
        return "☀️"; // Clear
    } else if (weather > 800 && weather < 900) {
        return "☁️"; // Clouds
    } else {
        return "❓"; // Unknown weather
    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = ""; // fixed typo
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
