const API_KEY = "be552a1edcbd40b2aa461638260804";

const cityInput = document.querySelector(".weather-input input");
const temperatureEl = document.querySelector(".weather-rain .degree");
const cityEl = document.querySelector(".weather-rain .city");
const humidityEl = document.querySelector(".humidity .percent");
const precipitationEl = document.querySelector(".precipitation .percent");
const windEl = document.querySelector(".speed .percent");
const button = document.querySelector(".btn");
const messageEl = document.querySelector(".msg");
const outputEl = document.querySelector(".weather-output");
const iconEl = document.querySelector(".weather-rain img");

const setMessage = (text) => {
    messageEl.textContent = text || "";
};

const setOutputVisible = (visible) => {
    outputEl.style.display = visible ? "block" : "none";
};

const iconForConditionCode = (code) => {
    if (code === 1000) return "images/clear.png";
    if ([1003, 1006, 1009].includes(code)) return "images/cloud.png";
    if ([1030, 1135, 1147].includes(code)) return "images/mist.png";
    if ([1150, 1153, 1168, 1171].includes(code)) return "images/drizzle.png";

    if (
        [
            1063, 1072, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240,
            1243, 1246,
        ].includes(code)
    ) {
        return "images/rain.png";
    }

    if (
        [
            1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222,
            1225, 1255, 1258,
        ].includes(code)
    ) {
        return "images/snow.png";
    }

    return "images/cloud.png";
};

const weatherApp = async (name) => {
    const query = (name || "").trim();
    if (!query) {
        setOutputVisible(false);
        setMessage("Enter a city name.");
        return;
    }

    setMessage("");

    let res;
    try {
        res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(
                query
            )}`
        );
    } catch {
        setOutputVisible(false);
        setMessage("Network error. Check your connection and try again.");
        return;
    }

    let data;
    try {
        data = await res.json();
    } catch {
        setOutputVisible(false);
        setMessage("Unexpected response from weather service.");
        return;
    }

    if (!res.ok || data?.error) {
        setOutputVisible(false);
        setMessage(data?.error?.message || "City not found.");
        return;
    }

    temperatureEl.textContent = `${Math.round(data.current.feelslike_c)}°C`;
    cityEl.textContent = data.location.name;
    humidityEl.textContent = `${data.current.humidity}%`;
    precipitationEl.textContent = `${data.current.precip_mm} mm`;
    windEl.textContent = `${data.current.wind_kph} km/h`;
    iconEl.src = iconForConditionCode(data.current.condition.code);

    setOutputVisible(true);
};

button.addEventListener("click", (e) => {
    e.preventDefault();
    weatherApp(cityInput.value);
});

cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") weatherApp(cityInput.value);
});
