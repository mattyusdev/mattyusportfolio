import React from "react";
import styled, { css } from "styled-components";
import colors from "../globals/palette";
import { Tooltip, Zoom, IconButton } from "@material-ui/core";
import { expand } from "../globals/animations";

/////////////////////BACKGROUND

export const AboutBackground = styled.div`
  height: 650px;
  background: url("/Home_.jpg") no-repeat center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/////////////////////ABOUT

export const AboutHeader = styled.header`
  width: 40%;
  height: 100%;
`;

export const AboutInfo = styled.h4`
  text-align: center;
`;

export const AboutHeart = styled.span`
  color: crimson;
`;

export const AboutImage = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 4px solid #190d56;
  /* box-shadow: -2px 16px 44px -10px rgba(0,0,0,0.62); */
  display: block;
  margin: 70px auto;
`;

/////////////////////SKILLS

export const SkillsBackground = styled.div`
  height: 650px;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
  }
`;

export const SkillsHeader = styled.div`
  && > * {
    margin: 0 90px;
  }
`;

export const SkillsMain = styled.main`
  padding: 30px;
`;

/////////////////////SKILLS UL

export const SkillsUl = styled.ul`
  display: inline-block;
  animation: ${expand} 1s ease-in;
`;

export const SkillsLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 14px 0;
  font-size: 24px;
  font-weight: bold;
`;

export const SkillsLight = styled.span`
  font-weight: 400;
  margin-left: 13px;
`;

export const SkillsChip = styled.div`
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.background};
  padding: 5px 20px;
  border-radius: 40px;
`;

/////////////////////ICONS

const TooltipWithProps = (props) => (
  <Tooltip
    placement="top"
    TransitionComponent={Zoom}
    TransitionProps={{ timeout: 300 }}
    classes={{ popper: props.className, tooltip: "tooltip" }}
    {...props}
  />
);

export const SkillsTooltip = styled(TooltipWithProps)`
  && {
    & .tooltip {
      background: linear-gradient(
        to right,
        ${colors.gradientOne},
        ${colors.gradientTwo}
      );
      padding: 10px 30px;
      font-weight: bold;
      font-size: 14px;
      border-radius: 40px;

      & > * {
        color: ${colors.gradientTwo};
      }
    }
  }
`;

const IconButtonWithProps = React.forwardRef(
  ({ customColor, ...otherProps }, ref) => (
    <IconButton color="inherit" {...otherProps} ref={ref} />
  )
);

export const SkillsIconButton = styled(IconButtonWithProps)`
  && {
    font-size: 25px;
    padding: 5px;
    transition: 0.4s;

    &:hover {
      background: linear-gradient(
        to right,
        ${colors.gradientOne},
        ${colors.gradientTwo}
      );
    }

    svg {
      transition: 0.4s;

      ${(props) =>
        props.customColor
          ? css`
              color: ${props.customColor};
            `
          : css`
              color: #fff;
            `}
    }

    &:hover svg {
      color: #fff;
    }
  }
`;
