import React from "react";
import styled, { css, keyframes } from "styled-components";
import { AppBar, Button } from "@material-ui/core";
import SvgLogo from "../../svg/SvgLogo";
import colors from "../globals/palette";
import { expand } from "../globals/animations";

/////////////////////LOGO

export const ButtonWithLogo = (props) => (
  <Button color="primary" {...props}>
    <SvgLogo width="50" />
  </Button>
);

export const NavLogo = styled(ButtonWithLogo)`
  && {
    transition: 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

/////////////////////BAR

export const AppBarWithProps = ({ active, ...otherProps }) => (
  <AppBar {...otherProps} />
);

export const NavAppBar = styled(AppBarWithProps)`
  && {
    transition: 0.5s;
    box-shadow: none;

    ${(props) =>
      props.active
        ? css`
            position: fixed;
            background: ${colors.background};
            padding: 20px 100px;
            &:after {
              position: absolute;
              bottom: 0;
              left: 0;
              content: "";
              display: block;
              width: 100%;
              height: 2px;
              background: ${colors.primary};
              animation: ${expand} 0.3s linear;
            }
          `
        : css`
            position: absolute;
            background: transparent;
            padding: 30px 100px;
          `}
  }
`;

export const NavSpacer = styled.span`
  flex-grow: 1;
`;
