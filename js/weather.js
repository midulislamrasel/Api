// cba96238748e17e2519174725c61b16c
const cty_Api = `cba96238748e17e2519174725c61b16c`
const loadWeather = search => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${cty_Api}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperatures(data))
}

const displayTemperatures = cityName => {
    // const searchCity = document.getElementById('temperatures');
    // searchCity.innerText = cityName.main.temp;
    setInnerTextById('temperatures',cityName.main.temp)
    setInnerTextById('clouds',cityName.weather[0].main)
}
const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id)
    temperature.innerText =text
}

document.getElementById('search-btn').addEventListener('click', function () {
    searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city_name').innerText = city;
    loadWeather(city)
})

// loadWeather('Dhaka');