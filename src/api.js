import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather/",
  params: {
    appid: "c464608a0909ecb7b521f7e1cde53200",
    units: "metric",
  },
});

export const locationApi = {
  yourLocation: (longitude, latitude) =>
    api
      .get("/", {
        params: {
          lat: latitude,
          lon: longitude,
        },
      })

      .then((data) => {
        const Location = data.data;
      })

      .catch((error) => {
        console.log("error");
      }),
};
