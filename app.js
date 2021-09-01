const apikey = "f55c0a172aa14d28ad9182838212805"
const url = (city) => `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`

async function getWeatherByCity(city) {
    const response = await fetch(url(city), { origin: "cors" })
    const respData = await response.json()

    console.log(respData);

    addWeatherToPage(respData)
}

function addWeatherToPage(data) {
    const temp = data.current.temp_c

    const weather = document.createElement("div")
    weather.classList.add("weather")

    weather.innerHTML = `${data.location.name}<h2><img src="${data.current.condition.icon}" alt="">${temp} °C<img src="${data.current.condition.icon}" alt=""></h2>
    <small>${data.current.condition.text}</small>`

    main.innerHTML = ""

    main.appendChild(weather)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const city = search.value;
    if (city) {
        getWeatherByCity(city);
    }
    search.value = ""
})