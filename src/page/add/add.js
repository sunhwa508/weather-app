import React, { useState, useEffect } from "react";
import { StyledMain } from "./add.styled";
import WeatherCard from "../../component/weatherCard/weathercard";
import { searchApi } from "../../api";

export default function Add() {
  const [searched, setSearched] = useState("");
  const [input, setInput] = useState();

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.which === 13) {
      searchApi
        .searchedApi(input)
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
