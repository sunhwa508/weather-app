import React from "react";
import { ButtonDetail } from "./customButton.styled";
import { connect } from "react-redux";
import { addCart, removeCart } from "../../redux/action";

function Button({ addCart, location, cart, children, isSaveCity, ...props }) {
  function handleSave(event) {
    event.stopPropagation();
    event.persist();

    addCart(location);
  }

  function handleRemove(event) {
    event.stopPropagation();
    event.persist();
    removeCart(location);
  }

  return (
    <>
      {isSaveCity ? (
        <ButtonDetail {...props} onClick={handleRemove}>
          {children}
        </ButtonDetail>
      ) : (
        <ButtonDetail {...props} onClick={handleSave}>
          {children}
        </ButtonDetail>
      )}
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addCart: (location) => dispatch(addCart(location)),
    removeCart: (location) => dispatch(removeCart(location)),
  };
}

export default connect(null, mapDispatchToProps)(Button);
