const API = `d08f838c0e642c739a81545443433a6a`

async function searchWeather(){
    const searchCity = document.getElementById("searchInput").value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API}&units=metric`

    const res = await fetch(url)
    const data = await res.json()
    displayData(data)
    console.log(data)
}

function setInnerText(id, text){
    document.getElementById(id).innerText = text
}

const displayData = (data) => {
    // document.getElementById("city").innerText = data.name;
    setInnerText("city", data.name)
    setInnerText("temp", data.main.temp)
    setInnerText("condition", data.weather[0].main)
    setInnerText("description", data.weather[0].description)

    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.getElementById("weather-icon").src = url
}

document.getElementById("search-btn").addEventListener("click", searchWeather)