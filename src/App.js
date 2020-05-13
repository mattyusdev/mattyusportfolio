import React, { useState } from "react";
import "./App.css";
import { Route, useLocation, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyWork from "./components/MyWork";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import MyWorkDesign from "./components/MyWorkDesign";
import { GlobalStyle } from "./styles/globals/responsive";

function App() {
  const location = useLocation().pathname;

  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <>
      <GlobalStyle isHome={location === "/"} isOpenNav={isOpenNav} />
      <Navbar
        location={location}
        isOpenNav={isOpenNav}
        setIsOpenNav={setIsOpenNav}
      />

      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/mywork" component={MyWork} />
        <Route exact path="/mywork/design" component={MyWorkDesign} />

        <Route exact path="/about" component={AboutMe} />

        <Route exact path="/contact" component={Contact} />

        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>

      {location !== "/" ? <Footer /> : null}
    </>
  );
}

export default App;
