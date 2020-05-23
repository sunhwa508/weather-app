import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

function Animatedweather({ location }) {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "white",
    size: 100,
    animate: true,
  };

  console.log(location.weather[0].main);
  return (
    <>
      <h2>{location.name}</h2>
      {location.weather[0].main === "Clear" ? (
        <ReactAnimatedWeather
          icon={location.weather[0].main.toUpperCase() + "_DAY"}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      ) : null}
      {location.weather[0].main === "Mist" ||
      location.weather[0].main === "Smoke" ||
      location.weather[0].main === "Haze" ||
      location.weather[0].main === "Dust" ||
      location.weather[0].main === "Fog" ||
      location.weather[0].main === "Sand" ||
      location.weather[0].main === "Dust" ||
      location.weather[0].main === "Ash" ||
      location.weather[0].main === "Squall" ||
      location.weather[0].main === "Tornado" ? (
        <ReactAnimatedWeather
          icon="RAIN"
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      ) : null}

      {location.weather[0].main === "Snow" ? (
        <ReactAnimatedWeather
          icon="SNOW"
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      ) : null}

      {location.weather[0].main === "Thunderstorm" ? (
        <ReactAnimatedWeather
          icon="WIND"
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      ) : null}

      {location.weather[0].main === "Clouds" ? (
        <ReactAnimatedWeather
          icon="CLOUDY"
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      ) : null}
    </>
  );
}

export default Animatedweather;
