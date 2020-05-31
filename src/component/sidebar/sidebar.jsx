import React, { useState, useEffect } from "react";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.utils";
import { lightTheme, darkTheme } from "../../theme";
const Menu = ({ toggle, theme, currentUser }) => {
  const icon = theme === "light" ? lightTheme.icon : darkTheme.icon;

  return (
    <StyledMenu toggle={toggle}>
      <Link to="/" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="HOME">
          {icon}
        </span>
        HOME
      </Link>
      <Link to="/add" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="SEARCH">
          {icon}
        </span>
        SEARCH
      </Link>
      <Link to="/detail" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="DETAIL">
          {icon}
        </span>
        DETAIL
      </Link>

      {currentUser ? (
        <Link
          as="div"
          onClick={() => auth.signOut()}
          style={{ fontSize: "2rem" }}
          to="/"
        >
          <span role="img" aria-label="LOGIN">
            {icon}
          </span>
          LOGOUT
        </Link>
      ) : (
        <Link to="/signin" style={{ fontSize: "2rem" }}>
          <span role="img" aria-label="LOGIN">
            {icon}
          </span>
          LOGIN
        </Link>
      )}
    </StyledMenu>
  );
};

export default Menu;
