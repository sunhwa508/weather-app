import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledMain } from "./add.styled";
import WeatherCard from "../../component/weatherCard/weathercard";

export default function Add() {
  const [searched, setSearched] = useState("");
  const [input, setInput] = useState();

  const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather/",
    params: {
      appid: "c464608a0909ecb7b521f7e1cde53200",
      units: "metric",
    },
  });

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.which === 13) {
      api
        .get("/", {
          params: {
            q: input,
          },
        })
        .then((data) => {
          setSearched(data.data);
        })
        .catch((error) => {
          console.log("error");
          setSearched("");
        });
    }
  }

  return (
    <StyledMain>
      <h1>SEARCH CITY NAME</h1>
      <input
        type="text"
        id="city"
        placeholder="CITY NAME"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <label for="city"> </label>
      {searched.main && searched.main.temp ? (
        <WeatherCard location={searched} />
      ) : (
        false
      )}
    </StyledMain>
  );
}
