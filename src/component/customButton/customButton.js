import React from "react";
import { connect } from "react-redux";
import { addCart, removeCart } from "../../redux/action";
import "./custombtn.css";
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
        <button className="custombtn" {...props} onClick={handleRemove}>
          {children}
        </button>
      ) : (
        <button className="custombtn" {...props} onClick={handleSave}>
          {children}
        </button>
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
