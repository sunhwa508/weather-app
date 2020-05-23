import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import ScrollToTop from "./routeHooks";
import Main from "./page/main/main";
import Add from "./page/add/add";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Switch, Route } from "react-router-dom";
import Burger from "./component/burger/burger";
import Sidebar from "./component/sidebar/sidebar";
import CityDetail from "./component/citydetail/citydetail";
import Header from "./component/header/header";
import Detail from "./page/details/details";
import { useHistory } from "react-router-dom";

function App() {
  const [toggle, toggler] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => toggler(false));
  const history = useHistory();
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div ref={node}>
          <Burger toggle={toggle} toggler={toggler} />
          <Sidebar toggle={toggle} toggler={toggler} />
        </div>
        <ScrollToTop history={history} />
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
          <Route exact path="/:cityId">
            <CityDetail />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}
export default App;
