import React from "react";
import { HeaderDetail } from "./header.styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/" style={{ color: "black" }}>
      <HeaderDetail>
        <h1>WEATHER"S"</h1>
      </HeaderDetail>
    </Link>
  );
};

export default Header;
