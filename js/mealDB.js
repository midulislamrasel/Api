const mealDB = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDB(data.meals))
}

const displayMealDB = mealList => {
    // console.log(meal);
    const mealDBDisplay = document.getElementById('mealDB')
    mealDBDisplay.innerHTML = ``;
    /* mealList.forEach(meal => {
        
    }) */

    for (const meal  of mealList) {
        const displayMeal = document.createElement('div')
        displayMeal.classList.add('col')
        displayMeal.innerHTML = `
                    <div class="card h-100">
                        <img src="${meal.strMealThumb}">
                        <div class="card-body">
                            <h5 class="card-title">Meal Name : ${meal.strMeal}</h5>
                            <p class="card-text"> Meal Details : ${meal.strInstructions.slice(0,200)}</p>
                        </div>
                    </div>
        `;
        mealDBDisplay.appendChild(displayMeal)
    }
}

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    mealDB(searchText)
    searchField.value = '';
}
// mealDB('a');