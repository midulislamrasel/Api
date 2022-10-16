const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    /* for (const country of countries) {
        console.log(country)
    } */
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name : ${country.name.common}</h3>
            <img src="${country.flags.png}" alt="Flags">
            <p>Area : ${country.area}</p>
            <p>Capital : ${country.capital}</p>
            <button onclick = "displayCountryDetail('${country.cca2}')"> Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}
const displayCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountriesDetails(data[0]))
}
const displayCountriesDetails = country =>  {
    const countryDetails = document.getElementById('countryDetails');
    countryDetails.innerHTML = `
    <h3>Name : ${country.name.common}</h3>
    <p>population : ${country.population}</p>
    <p>startOfWeek : ${country.startOfWeek}</p>

    `
}

loadCountries()