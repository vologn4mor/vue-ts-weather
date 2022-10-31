import axios from "axios"

const apiKey = "4ec1d69e6b54279e05388b915da5b11c";

export const axiosGetData = async (cityName: string) => {
        var result = {};
        await axios
        .get(`https://api.openweathermap.org/data/2.5/find?q=${cityName}&type=like&lang=ru&APPID=${apiKey}`)
        .then(res => {
            result = {
                id: Date.now(),
                cityName,
                temp: Math.round(res.data.list[0].main.temp - 273) + "°C",
                description: res.data.list[0].weather[0].description,
                iconUrl: "https://openweathermap.org/img/w/" + res.data.list[0].weather[0].icon + ".png"
            }
        })
        .catch(e => {
            console.log(e)
            throw new Error("Город указан не верно")
        })
        return result;
}