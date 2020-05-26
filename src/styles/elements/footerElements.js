import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
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
    z-index: 1;
    height: 104px;
    align-items: center;
    justify-content: center;

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

const IconButtonWithProps = React.forwardRef(
  ({ IconComponent, ...otherProps }, ref) => (
    <IconButton color="inherit" {...otherProps} ref={ref}>
      <IconComponent />
    </IconButton>
  )
);

export const SocialButton = styled(IconButtonWithProps)`
  && {
    border-radius: 50%;
    margin: 0 1rem;
    background: #fff;
    transition: 0.7s;
    padding: 0.7rem;

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
    font-size: 2rem;
  }
`;
