import React from "react";
import styled, { css } from "styled-components";
import { AppBar, Button } from "@material-ui/core";
import SvgLogo from "../../svg/SvgLogo";
import colors from "../globals/palette";
import { slideRight } from "../globals/animations";

/////////////////////LOGO

const ButtonWithLogo = (props) => (
  <Button color="inherit" {...props}>
    <SvgLogo width="50" />
  </Button>
);

export const NavLogo = styled(ButtonWithLogo)`
  && {
    transition: 0.5s;
    border-radius: 50%;
    min-width: 50px;

    &:hover {
      transform: scale(1.1);
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

    ${(props) =>
      props.active
        ? css`
            position: sticky;
            background: ${colors.background};
            padding: 20px 120px 20px 200px;
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
            padding: 30px 100px 20px 180px;
          `}
  }
`;

export const NavSpacer = styled.span`
  flex-grow: 1;
`;
