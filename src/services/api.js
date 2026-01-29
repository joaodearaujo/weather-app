
const api_Key = import.meta.env.VITE_WEATHER_API_KEY;
const baseURL_Location = "http://api.openweathermap.org/geo/1.0/direct";
const baseURL_Weather = "https://api.openweathermap.org/data/3.0/onecall";

export const fetchCompleteWeather = async (cityName) => {
    try {
        const geoResponse = await fetch(`${baseURL_Location}?q=${cityName}&limit=1&appid=${api_Key}`);
        
        const [geoData] = await geoResponse.json(); // geoData está dentro de uma par de chaves porque é uma atalho para selecionar somente o primeiro objeto do array entregue pela API.

        if (!geoData) return null;

        const weatherResponse = await fetch(`${baseURL_Weather}?lat=${geoData.lat}&lon=${geoData.lon}&units=metric&exclude=minutely&appid=${api_Key}`);
        const weatherData = await weatherResponse.json();

        return {
            ...weatherData,
            cityName: geoData.name,
        }

    } catch (error) {
        console.error("Erro no fluxo de API:", error);
    }
}