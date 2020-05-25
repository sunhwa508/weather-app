import firebase from "firebase/app";
import styled from "styled-components";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import React, { useState, useEffect, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import Main from "./page/main/main";
import Add from "./page/add/add";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { burgertheme, lightTheme, darkTheme } from "./theme";
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import Burger from "./component/burger/burger";
import Sidebar from "./component/sidebar/sidebar";
import CityDetail from "./component/citydetail/citydetail";
import Header from "./component/header/header";
import Detail from "./page/details/details";
import LoginSignup from "./page/loginSignup/loginSignup";
import { auth, createUserProfileDocument } from "./firebase.utils";

function App() {
  const [toggle, toggler] = useState(false);
  const [path, setPath] = useState("/");
  const [theme, setModeTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);
  const node = useRef();
  useOnClickOutside(node, () => toggler(false));
  const history = useHistory();

  let unsubscribeFromAuth = null;

  //Github provider
  const GithubProvider = new firebase.auth.GithubAuthProvider();

  function githubSignin() {
    console.log(auth);
    firebase
      .auth()
      .signInWithPopup(GithubProvider)

      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log(token);
        console.log(user);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error.code);
        console.log(error.message);
      });
  }

  function githubSignout() {
    firebase
      .auth()
      .signOut()

      .then(
        function () {
          console.log("Signout successful!");
        },
        function (error) {
          console.log("Signout failed");
        }
      );
  }

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
  }, [currentUser]);

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setModeTheme("dark");
      // otherwise, it should be light
    } else {
      setModeTheme("light");
    }
  };

  useEffect(() => {
    setPath((prev) => {
      if (prev !== history.location.pathname) {
        toggler(false);
      }
      return history.location.pathname;
    });
  }, [history.location.pathname]);

  const Btnstyle = styled.button`
    font-size: 2rem;
    background-color: white;
    border: none;
    position: fixed;
    top: 2%;
    right: 5%;
    z-index: 3;
    cursor: pointer;
  `;
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <button onclick={GithubProvider}>Github Signin</button>
        <button onclick="githubSignout()">Github Signout</button>
        <Btnstyle onClick={toggleTheme}>
          {theme === "light" ? "🌛" : "🌞"}
        </Btnstyle>
        <div ref={node}>
          <Burger toggle={toggle} toggler={toggler} />
          <Sidebar
            currentUser={currentUser}
            toggle={toggle}
            toggler={toggler}
            theme={theme}
          />
        </div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
          <Route exact path="/signin">
            <LoginSignup />
          </Route>
          <Route exact path="/:cityId">
            <CityDetail />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}
export default withRouter(App);
