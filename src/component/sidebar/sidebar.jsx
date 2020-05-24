import React from "react";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
const Menu = ({ toggle }) => {
  return (
    <StyledMenu toggle={toggle}>
      <Link to="/" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="HOME">
          ✿
        </span>
        HOME
      </Link>
      <Link to="/add" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="SEARCH">
          {" "}
          ✿
        </span>
        SEARCH
      </Link>
      <Link to="/detail" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="DETAIL">
          {" "}
          ✿
        </span>
        DETAIL
      </Link>
      <Link to="/" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="LOGIN">
          {" "}
          ✿
        </span>
        LOGIN
      </Link>
    </StyledMenu>
  );
};
export default Menu;
