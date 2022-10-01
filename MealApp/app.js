let mealBtn = document.getElementById("searchBtn")

function fetchMeal() {
    let searchMeal = document.getElementById("searchInput")
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal.value}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchMeal(data))
}

function displaySearchMeal(meals) {
    let allMeal = meals.meals
    let searchResult = document.getElementById("search-result")

    for (let meal of allMeal) {
        searchResult.innerHTML += `
        <div class="col">
            <div class="card">
                <img src=${meal.strMealThumb} class="card-img-top" alt="..." >
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 90)} ...</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#exampleModal" onclick="loadDetails('${meal.idMeal}')">
                        View
                    </button>
                </div>
            </div>
        </div>
        `
    }
}

// data-bs-toggle="modal"  data-bs-target="#exampleModal" 

function loadDetails(mealID) {
    console.log(mealID)
    let url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.meals[0]))
}

function displayData(data) {
    
}

mealBtn.addEventListener("click", fetchMeal)