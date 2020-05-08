import React from "react";
import { NavAppBar, NavSpacer, NavLogo } from "../styles/elements/navElements";
import Toolbar from "@material-ui/core/Toolbar";
import { ButtonMain, ButtonCurly } from "../styles/elements/buttonElements";
import { Link } from "react-router-dom";

export default function Navbar({ location }) {
  return (
    <NavAppBar component="nav" active={location !== "/"}>
      <Toolbar>
        <NavLogo component={Link} to="/" />

        <NavSpacer />

        <ButtonMain
          component={Link}
          to="/mywork"
          active={location.includes("/mywork")}
        >
          <ButtonCurly left={true}>{"{"}</ButtonCurly>
          MY WORK
          <ButtonCurly right={true}>{"}"}</ButtonCurly>
        </ButtonMain>

        <ButtonMain component={Link} to="/about" active={location === "/about"}>
          <ButtonCurly left={true}>{"{"}</ButtonCurly>
          ABOUT ME
          <ButtonCurly right={true}>{"}"}</ButtonCurly>
        </ButtonMain>

        <ButtonMain
          component={Link}
          to="/contact"
          active={location === "/contact"}
        >
          <ButtonCurly left={true}>{"{"}</ButtonCurly>
          GET IN TOUCH
          <ButtonCurly right={true}>{"}"}</ButtonCurly>
        </ButtonMain>
      </Toolbar>
    </NavAppBar>
  );
}
