import React from "react";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
const Menu = ({ toggle, theme }) => {
  console.log(theme);
  return (
    <StyledMenu toggle={toggle}>
      <Link to="/" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="HOME">
          {theme === "light" ? "✿" : "🌚 "}
        </span>
        HOME
      </Link>
      <Link to="/add" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="SEARCH">
          {theme === "light" ? "✿" : "🌚 "}
        </span>
        SEARCH
      </Link>
      <Link to="/detail" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="DETAIL">
          {theme === "light" ? "✿" : "🌚 "}
        </span>
        DETAIL
      </Link>
      <Link to="/signin" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="LOGIN">
          {theme === "light" ? "✿" : "🌚 "}
        </span>
        LOGIN
      </Link>
    </StyledMenu>
  );
};
export default Menu;
