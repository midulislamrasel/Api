// cba96238748e17e2519174725c61b16c
const cty_Api = `cba96238748e17e2519174725c61b16c`
const loadWeather = (sears) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon=&appid=${cty_Api}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

loadWeather()