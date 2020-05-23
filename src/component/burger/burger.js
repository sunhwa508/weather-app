import React from "react";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ toggle, toggler }) => {
  return (
    <StyledBurger toggle={toggle} onClick={() => toggler(!toggle)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
