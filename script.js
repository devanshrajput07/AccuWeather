const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4a2a61946emshbe7d97aa6ffaacdp11aa12jsn70bf173705ee',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
}

const getWeather = (city) => {
    cityName.innerHTML = city.toUpperCase()
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            temph.innerHTML = response.temp
            humidityh.innerHTML = response.humidity
            wind_speedh.innerHTML = response.wind_speed
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
        })
        .catch(err => console.error(err))
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather('Delhi')

const updateCommonPlacesInfo = () => {
    const commonPlaces = ['Dehradun', 'Lucknow', 'Rajasthan', 'Kolkata', 'Mumbai', 'Hyderabad'];
    commonPlaces.forEach(place => {
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${place}`, options)
            .then(response => response.json())
            .then(response => {
                document.getElementById(`${place.toLowerCase()}-temp`).textContent = response.temp;
                document.getElementById(`${place.toLowerCase()}-max-temp`).textContent = response.max_temp;
                document.getElementById(`${place.toLowerCase()}-min-temp`).textContent = response.min_temp;
                document.getElementById(`${place.toLowerCase()}-humidity`).textContent = response.humidity;
                document.getElementById(`${place.toLowerCase()}-sunrise`).textContent = response.sunrise;
                document.getElementById(`${place.toLowerCase()}-sunset`).textContent = response.sunset;
                document.getElementById(`${place.toLowerCase()}-wind-deg`).textContent = response.wind_degrees;
                document.getElementById(`${place.toLowerCase()}-wind-speed`).textContent = response.wind_speed;
                document.getElementById(`${place.toLowerCase()}-cloud-pct`).textContent = response.cloud_pct;
                document.getElementById(`${place.toLowerCase()}-feels-like`).textContent = response.feels_like;
            })
            .catch(err => console.error(err))
    })
}

updateCommonPlacesInfo();