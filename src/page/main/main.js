import React, { useState, useEffect } from "react";
import { Mainstyled } from "./main.style";
import axios from "axios";
import WeatherCard from "../../component/weatherCard/weathercard";
import { auth } from "../../firebase.utils";
export default function Main() {
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [location, setLocation] = useState({});
  const [city, setCity] = useState();

  const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather/",
    params: {
      appid: "c464608a0909ecb7b521f7e1cde53200",
      units: "metric",
    },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSucces);
    api
      .get("/", {
        params: {
          lat: latitude,
          lon: longitude,
        },
      })
      .then((data) => {
        setLocation(data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, [latitude, longitude]);

  function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setlatitude(latitude);
    setlongitude(longitude);
  }
  return (
    <>
      {auth.currentUser ? (
        <Mainstyled>
          {auth.currentUser.email.slice(0, auth.currentUser.email.indexOf("@"))}
          님의 <br />
          Weather forecast
        </Mainstyled>
      ) : (
        <Mainstyled>로그인을 해주세요</Mainstyled>
      )}

      {/* <h1 style={{ color: "#f67280" }}>TODAY'S WEATHER</h1> */}
      {location.main && location.main.temp && latitude && longitude ? (
        <WeatherCard location={location} city={city} />
      ) : (
        false
      )}
    </>
  );
}
