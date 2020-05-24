import React, { useEffect } from "react";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "../../firebase.utils";
import { setCurrentUser } from "../../redux/action";

const Menu = ({ setCurrentUser, currentUser, toggle, theme }) => {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      console.log(currentUser);
      setCurrentUser(userAuth);
    });

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <StyledMenu toggle={toggle}>
      <Link to="/" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="HOME">
          {currentUser.length === 1 ? "✿" : "🌚"}
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

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
}

const mapStateToProps = (user) => {
  return {
    currentUser: user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
