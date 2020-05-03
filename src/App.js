import React from "react";
import "./App.css";
import { Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation().pathname;

  return (
    <>
      <Navbar location={location} />

      <Route exact path="/" component={Home} />

      {location !== "/" ? <Footer /> : null}
    </>
  );
}

export default App;
