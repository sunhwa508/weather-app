import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { StyledDetail } from "./citydetail.styled";
export default function CityDetail() {
  const [card, setCard] = useState();
  const history = useHistory();
  const { cityId } = useParams();
  const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather/",
    params: {
      appid: "c464608a0909ecb7b521f7e1cde53200",
      units: "metric",
    },
  });

  function handleClick() {
    history.go(-1);
  }

  useEffect(() => {
    api
      .get("/", {
        params: {
          id: cityId,
        },
      })
      .then((data) => {
        setCard(data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  console.log(card);
  return (
    <StyledDetail>
      {card ? (
        <div>
          <h2>{card.name} Detail</h2>
          <h3>FEELS LIKE {card.main.feels_like} ℃</h3>
          <h3>MIN {card.main.temp_min} ℃</h3>
          <h3>MAX {card.main.temp_max} ℃</h3>
          <h3>HUMIDITY {card.main.humidity} g/m3 </h3>
          <h3>WIND SPEED {card.wind.speed}</h3>
          <h3>WIND DEG {card.wind.deg} deg</h3>
        </div>
      ) : (
        false
      )}
      <button onClick={handleClick}>◀ back</button>
    </StyledDetail>
  );
}
