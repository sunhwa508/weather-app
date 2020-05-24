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
function App() {
  const [toggle, toggler] = useState(false);
  const [path, setPath] = useState("/");
  const [theme, setModeTheme] = useState("light");

  const node = useRef();
  useOnClickOutside(node, () => toggler(false));
  const history = useHistory();

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
        <Btnstyle onClick={toggleTheme}>
          {theme === "light" ? "🌛" : "🌞"}
        </Btnstyle>
        <div ref={node}>
          <Burger toggle={toggle} toggler={toggler} />
          <Sidebar toggle={toggle} toggler={toggler} theme={theme} />
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
