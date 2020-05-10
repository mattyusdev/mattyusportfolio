import React from "react";
import {
  NavAppBar,
  NavLogo,
  NavLinksFrame,
  NavLinksLi,
  NavHamburger,
} from "../styles/elements/navElements";
import { ButtonMain, ButtonCurly } from "../styles/elements/buttonElements";
import { Link } from "react-router-dom";
import { RiMenu5Line, RiCloseLine } from "react-icons/ri";
import { CustomFade } from "../styles/globals/animations";

export default function Navbar({ location, setIsOpenNav, isOpenNav }) {
  return (
    <NavAppBar component="nav" active={location !== "/"}>
      <NavLogo component={Link} to="/" />

      <CustomFade duration={300}>
        <NavLinksFrame isOpenNav={isOpenNav}>
          <NavLinksLi>
            <ButtonMain
              nav={true}
              component={Link}
              to="/mywork"
              active={location.includes("/mywork")}
              onClick={() => setIsOpenNav(false)}
            >
              <ButtonCurly left={true}>{"{"}</ButtonCurly>
              MY WORK
              <ButtonCurly right={true}>{"}"}</ButtonCurly>
            </ButtonMain>
          </NavLinksLi>

          <NavLinksLi>
            <ButtonMain
              nav={true}
              component={Link}
              to="/about"
              active={location === "/about"}
              onClick={() => setIsOpenNav(false)}
            >
              <ButtonCurly left={true}>{"{"}</ButtonCurly>
              ABOUT ME
              <ButtonCurly right={true}>{"}"}</ButtonCurly>
            </ButtonMain>
          </NavLinksLi>

          <NavLinksLi>
            <ButtonMain
              nav={true}
              component={Link}
              to="/contact"
              active={location === "/contact"}
              onClick={() => setIsOpenNav(false)}
            >
              <ButtonCurly left={true}>{"{"}</ButtonCurly>
              GET IN TOUCH
              <ButtonCurly right={true}>{"}"}</ButtonCurly>
            </ButtonMain>
          </NavLinksLi>
        </NavLinksFrame>
      </CustomFade>

      <NavHamburger onClick={() => setIsOpenNav(!isOpenNav)}>
        {!isOpenNav ? (
          <RiMenu5Line />
        ) : (
          <CustomFade>
            <RiCloseLine />
          </CustomFade>
        )}
      </NavHamburger>
    </NavAppBar>
  );
}
