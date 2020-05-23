import React from "react";
import { ButtonDetail } from "./customButton.styled";
import { connect } from "react-redux";
import { addCart } from "../../redux/action";

function Button({ addCart, location, cart }) {
  function handleSave(event) {
    event.stopPropagation();
    event.persist();

    addCart(location);
  }

  return <ButtonDetail onClick={handleSave}>SAVE</ButtonDetail>;
}

function mapDispatchToProps(dispatch) {
  return {
    addCart: (location) => dispatch(addCart(location)),
  };
}

export default connect(null, mapDispatchToProps)(Button);
