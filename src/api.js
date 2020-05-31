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
    api.get("/", {
      params: {
        lat: latitude,
        lon: longitude,
      },
    }),
};

export const searchApi = {
  searchedApi: (input) =>
    api.get("/", {
      params: {
        q: input,
      },
    }),
};

export const detailApi = {
  detailApi: (cityId) =>
    api.get("/", {
      params: {
        id: cityId,
      },
    }),
};
