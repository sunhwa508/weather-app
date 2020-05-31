import React, { useState, useEffect, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import Main from "./page/main/main";
import Add from "./page/add/add";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { lightTheme, darkTheme } from "./theme";
import {
  Switch,
  Route,
  withRouter,
  useHistory,
  Redirect,
} from "react-router-dom";
import Burger from "./component/burger/burger";
import Sidebar from "./component/sidebar/sidebar";
import CityDetail from "./component/citydetail/citydetail";
import Header from "./component/header/header";
import Detail from "./page/details/details";
import LoginSignup from "./page/loginSignup/loginSignup";
import { auth, createUserProfileDocument } from "./firebase.utils";
import "./App.css";
function App() {
  const [toggle, toggler] = useState(false);
  const [path, setPath] = useState("/");
  const [theme, setModeTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);
  const node = useRef();
  useOnClickOutside(node, () => toggler(false));
  const history = useHistory();

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

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <button className="darkmode" onClick={toggleTheme}>
          {theme === "light" ? "🌛" : "🌞"}
        </button>
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
            {currentUser ? <Redirect exact to="/" /> : <LoginSignup />}
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
