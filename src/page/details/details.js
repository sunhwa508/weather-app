import React from "react";
import { DetailStyled } from "./details.styled";
import { connect } from "react-redux";
import WeatherCard from "../../component/weatherCard/weathercard";

function Detail({ location }) {
  console.log(location);

  return (
    <DetailStyled>
      {/* <h1>DETAIL</h1> */}
      {/* <button onClick={clickc}>click</button> */}
      {location.map((item) => (
        <WeatherCard location={item} isSaveCity={true} />
      ))}
      {/* <WeatherCard location={location} /> */}
    </DetailStyled>
  );
}

const mapStateToProps = (item) => {
  return {
    //location: [...location]
    location: [...item],
  };
};

// function mapStateToProps({ image, cart, heart }) {
//   return { image: [...image], cart: [...cart], heart: [...heart] };
// }
export default connect(mapStateToProps)(Detail);
