'use strict'

document.addEventListener("DOMContentLoaded", () =>{

const API_KEY = "3e49861dde05211685d4b7f258855a86"

let weatherButton = document.querySelector("#weatherButton")
let weatherInput = document.querySelector("#weatherInput")
let cityTitle = document.querySelector("#city")
let weatherDescription = document.querySelector("#weatherDescription")
let temperature = document.querySelector("#temperature")
let humidity = document.querySelector("#humidity")
let pressure = document.querySelector("#pressure")
let tempMax = document.querySelector("#tempMax")
let weatherImg = document.querySelector("#weatherImg")
let tempMin = document.querySelector("#tempMin")
let loader = document.querySelector("#loader")


async function getWeather() {

    let city = weatherInput.value

    loader.classList.remove("hide")

    try {    
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`);
        let data = await response.json();

        loader.classList.add("hide")

        if(response.ok) {
            showData(data)
        } else {
            throw new Error(data.message)
        }

    }catch(error){
        loader.classList.add("hide")
        if(error.message === "city not found") {
            alert("ЭЭ ТАКОГО ГОРОДА НЕТУ, ТЫ ЧЕ?")
        } else
         alert("ОШИБОЧКА")
}
}
 
function showData() {
    let icon = data.weather[0].icon
    
    weatherImg.src = ` https://openweathermap.org/img/wn/${icon}@4x.png`
    cityTitle.textContent = data.name;
    weatherDescription.textContent = data.weather[0].description;
    temperature.textContent = `Температура:  ${data.main.temp}°С`
     humidity.textContent = `Влажность:  ${data.main.humidity}`
    pressure.textContent = `Давление:  ${data.main.pressure}`
    tempMax.textContent = `Макс. температура:  ${data.main.temp_max}`
    tempMin.textContent = `Мин. температура:  ${data.main.temp_min}`
    console.log(data)
}

weatherButton.addEventListener("click", getWeather)
})