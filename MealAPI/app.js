let searchBtn = document.getElementById("basic-addon2")

async function fetchMeal() {
    let searchMeal = document.getElementById("searchInput")

    const url = `https://themealdb.com/api/json/v1/1/search.php?s=${searchMeal.value}`
    console.log(url)

    searchMeal.value = ""

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displaySearchMeal(data))
    const res = await fetch(url) 
    const data = await res.json()
    displaySearchMeal(data)
}

function displaySearchMeal(meals) {
    let allMeals = meals.meals
    let results = document.querySelector(".results")
    results.textContent = ""
    document.querySelector(".details").textContent = ""
    

    for (let meal of allMeals) {
        results.innerHTML += `
        <div class="col">
        <div class="card">
            <img src=${meal.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 90)}....</p>
                <button onclick="loadDetails('${meal.idMeal}')" class="btn btn-danger">View Details</button>
            </div>
        </div>
        </div>
        `
    }
}

{/* <h4>${meal.idMeal}</h4> */ }

function loadDetails(mealId) {
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]))
}

function displayDetails(meal) {
    let details = document.querySelector(".details")
    details.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <p>${meal.strInstructions}</p>
        <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
    </iframe>
    `
}


searchBtn.addEventListener("click", fetchMeal)