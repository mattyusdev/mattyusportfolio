import React from "react";
import { NavAppBar, NavSpacer } from "../styles/elements/navElements";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo";
import { ButtonMain } from "../styles/elements/buttonElements";

export default function Navbar() {
  return (
    <NavAppBar component="nav">
      <Toolbar>
        <Logo />
        <NavSpacer />
        <ButtonMain color="inherit">
          <span className="curly">{"{"}</span>
          MY WORK
          <span className="curly">{"}"}</span>
        </ButtonMain>
      </Toolbar>
    </NavAppBar>
  );
}
