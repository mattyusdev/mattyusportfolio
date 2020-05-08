import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import colors from "../globals/palette";
import { slideLeft } from "../globals/animations";

/////////////////////APP BAR

const AppBarWithProps = ({ show, ...otherProps }) => <AppBar {...otherProps} />;

export const FooterAppBar = styled(AppBarWithProps)`
  && {
    transition: 0.5s;
    box-shadow: none;
    position: relative;
    background: ${colors.background};
    padding: 20px 0;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background: ${colors.secondary};
      animation: ${slideLeft} 1s;
    }
  }
`;

/////////////////////TOOL BAR

export const FooterToolBar = styled(Toolbar)`
  justify-content: center;
`;

/////////////////////SOCIAL

const CustomButton = (props) => <Button color="inherit" {...props}></Button>;

export const SocialButton = styled(CustomButton)`
  && {
    border-radius: 50%;
    min-height: 45px;
    min-width: 45px;
    margin: 0 15px;
    background: #fff;
    transition: 0.7s;

    &:hover {
      background: linear-gradient(
        to right,
        ${colors.gradientOne},
        ${colors.gradientTwo}
      );
      svg {
        color: #fff;
      }
    }
  }

  & svg {
    color: ${colors.background};
    transition: 0.7s;
    font-size: 30px;
  }
`;
