import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { StyledDetail, StyledButton } from "./citydetail.styled";
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

  return (
    <>
      <StyledDetail>
        {card ? (
          <div>
            <h2>
              {card.name} IS {card.weather[0].main}
            </h2>

            <h3>
              <span> FEELS LIKE</span>
              <span> {card.main.feels_like} ℃</span>
            </h3>
            <h3>
              <span>MIN</span> <span>{card.main.temp_min} ℃</span>
            </h3>
            <h3>
              <span>MAX</span> <span>{card.main.temp_max} ℃</span>
            </h3>
            <h3>
              <span>HUMIDITY</span> <span>{card.main.humidity} ℃</span>
            </h3>
            <h3>
              <span>WIND SPEED</span> <span>{card.wind.speed}</span>
            </h3>
            <h3>
              <span>visibility</span> <span>{card.visibility}</span>{" "}
            </h3>
            <h3>
              <span>pressure</span> <span>{card.main.pressure}</span>{" "}
            </h3>
            <h3>
              <span>WIND </span>
              <span>{card.wind.deg}</span>{" "}
            </h3>
          </div>
        ) : (
          false
        )}
      </StyledDetail>
      <StyledButton>
        <button onClick={handleClick}>◀ back</button>
      </StyledButton>
    </>
  );
}
