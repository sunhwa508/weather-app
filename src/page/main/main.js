import React, { useState, useEffect } from "react";
import { Mainstyled } from "./main.style";
import WeatherCard from "../../component/weatherCard/weathercard";
import { auth } from "../../firebase.utils";
import { locationApi } from "../../api";
export default function Main() {
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [location, setLocation] = useState({});
  const [city, setCity] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSucces);
    locationApi.yourLocation(longitude, latitude);
    setLocation(locationApi.Location);
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
