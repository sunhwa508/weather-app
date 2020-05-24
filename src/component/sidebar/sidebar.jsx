import React, { useState, useEffect } from "react";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from "../../firebase.utils";

const Menu = ({ toggle, theme }) => {
  let unsubscribeFromAuth = null;
  const [currentUser, setCurrentUser] = useState(null);
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
          {theme === "light" ? "✿" : "🌚"}
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

      {currentUser ? (
        <Link
          as="div"
          onClick={() => auth.signOut()}
          style={{ fontSize: "2rem" }}
          to="/"
        >
          <span role="img" aria-label="LOGIN">
            {theme === "light" ? "✿" : "🌚 "}
          </span>
          LOGOUT
        </Link>
      ) : (
        <Link to="/signin" style={{ fontSize: "2rem" }}>
          <span role="img" aria-label="LOGIN">
            {theme === "light" ? "✿" : "🌚 "}
          </span>
          LOGIN
        </Link>
      )}
    </StyledMenu>
  );
};

export default Menu;
