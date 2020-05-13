import React from "react";
import styled, { css } from "styled-components";
import { AppBar, Button } from "@material-ui/core";
import SvgLogo from "../../svg/SvgLogo";
import colors from "../globals/palette";
import { slideRight } from "../globals/animations";
import { device } from "../globals/responsive";

/////////////////////LOGO

const ButtonWithLogo = (props) => (
  <Button color="inherit" {...props}>
    <SvgLogo />
  </Button>
);

export const NavLogo = styled(ButtonWithLogo)`
  && {
    transition: 0.5s;
    border-radius: 50%;
    min-width: 3rem;
    line-height: 3rem;
    z-index: 6;

    &:hover {
      transform: scale(1.1);
    }

    svg {
      width: 3.125rem;
      line-height: 3.125rem;

      @media ${device.tablet} {
        width: 4.125rem;
        line-height: 4.125rem;
      }

      @media ${device.mobileM} {
        width: 5.125rem;
        line-height: 5.125rem;
      }
    }
  }
`;

/////////////////////BAR

const AppBarWithProps = ({ active, ...otherProps }) => (
  <AppBar {...otherProps} />
);

export const NavAppBar = styled(AppBarWithProps)`
  && {
    transition: 0.5s;
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    ${(props) =>
      props.active
        ? css`
            position: sticky;
            background: ${colors.background};
            padding: 20px 0;
            height: 104px;
            &::after {
              position: absolute;
              bottom: 0;
              left: 0;
              content: "";
              display: block;
              width: 100%;
              height: 2px;
              background: ${colors.primary};
              animation: ${slideRight} 1s;
            }
          `
        : css`
            position: absolute;
            background: transparent;
            padding: 30px 0;
            height: 115px;
          `}
  }

  @media ${device.laptop} {
    && {
      justify-content: space-between;
      padding: 20px 40px 20px 60px;
    }
  }

  @media ${device.laptopS} {
    && {
      padding: 20px 30px;
    }
  }
`;

export const NavLinksFrame = styled.ul`
  display: flex;
  list-style: none;

  @media ${device.tablet} {
    align-items: center;
    z-index: 5;
    justify-content: center;
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    background: ${colors.background};

    ${(props) =>
      !props.isOpenNav
        ? css`
            display: none;
          `
        : css`
            display: flex;
          `}
  }
`;

export const NavLinksLi = styled.li`
  @media ${device.tablet} {
    width: 100%;
  }
`;

/////////////////////HAMBURGER

const ButtonWithProps = ({ isOpenNav, ...props }) => <Button {...props} />;

export const NavHamburger = styled(ButtonWithProps)`
  && {
    display: none;
    z-index: 6;
    min-width: 3rem;
    transition: 0.5s;
    border-radius: 50%;

    > * {
      color: #fff;
      font-size: 2.8rem;
      line-height: 2.8rem;
    }

    @media ${device.tablet} {
      display: block;

      > * {
        font-size: 3.6rem;
        line-height: 3.6rem;
      }
    }

    @media ${device.mobileM} {
      font-size: 4.8rem;
      line-height: 4.8rem;
    }
  }
`;
