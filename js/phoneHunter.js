const loadPhones = async (search) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data)
}
const displayPhone = phones => {
    const phoneDisplay = document.getElementById('phone-container')
    phoneDisplay.textContent = ``;
    //display 10 phone Only
    phones = phones.slice(0, 10);
    
    // display no phones found
    const nophone = document.getElementById('no-phone-found');
    if (phones.length === 0) {
        nophone.classList.remove('d-none')
    } else {
        nophone.classList.add('d-none')
    }

    //display all phone
    for (const phone of phones) {
        const displayPhone = document.createElement('div');
        displayPhone.classList.add('col');
        displayPhone.innerHTML = `
        <div class="card">
                 <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <h4>${phone.brand}</h4>
                <p class="card-text">${phone.slug}</p>
            </div>
            <button onclick="loadPhoneDetails()" type="button" class="btn btn-primary">Primary</button>
        </div>
        
        `;
        phoneDisplay.appendChild(displayPhone);
        
    }
    toggleSpinner(false);
}

document.getElementById('btn-search').addEventListener('click', function () {
    // Loading Toggle
    toggleSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
})

const toggleSpinner = isLoading => {
    const loaderSpinner = document.getElementById('spinnerBtn');
    if (isLoading) {
        loaderSpinner.classList.remove('d-none')
    } else {
        loaderSpinner.classList.add('d-none')
    }
}
const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json()
    console.log(data,data)
}
