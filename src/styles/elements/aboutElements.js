import React from "react";
import styled, { css } from "styled-components";
import colors from "../globals/palette";
import { Tooltip, Zoom, IconButton } from "@material-ui/core";
import { device } from "../globals/responsive";

/////////////////////BACKGROUND

export const AboutBackground = styled.div`
  min-height: calc(100vh - 208px);
  overflow: auto;
`;

export const AboutRow = styled.div`
  min-height: calc(100vh - 104px);
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.background &&
    css`
      background: url("/Home_.jpg") no-repeat center fixed;
      background-size: cover;
    `}
`;

/////////////////////ABOUT

export const AboutHeader = styled.header`
  height: 100%;
`;

export const AboutInfo = styled.h4`
  width: 70%;
  margin: 1.5rem auto;
  text-align: center;
`;

export const AboutHeart = styled.span`
  color: crimson;
`;

export const AboutImage = styled.img`
  width: 13rem;
  border-radius: 50%;
  /* border: 5px solid ${colors.tertiary}; */
  box-shadow: -2px 16px 44px -10px rgba(0, 0, 0, 0.62);
  display: block;
  margin: 5rem auto;
`;

/////////////////////SKILLS

export const SkillsBackground = styled.div`
  min-height: calc(80vh - 104px);
`;

export const SkillsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5rem 0;

  @media ${device.mobileL} {
    justify-content: space-around;
  }
`;

export const SkillsMain = styled.main`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

/////////////////////SKILLS UL

export const SkillsUl = styled.ul`
  display: inline-block;
  padding: 0;
`;

export const SkillsLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;

  @media ${device.tablet} {
    flex-direction: column;
    margin: 1rem 0;
    font-size: 2rem;
  }

  @media ${device.mobileM} {
    font-size: 2rem;
    margin: 2rem 0;
  }
`;

export const SkillsText = styled.span`
  @media ${device.tablet} {
    margin: 1rem 0;
  }
`;

export const SkillsLight = styled.span`
  font-weight: 400;
  margin-left: 1rem;
`;

export const SkillsChip = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.background};
  padding: 0.3rem 1.5rem;
  border-radius: 2.5rem;
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

      @media ${device.tablet} {
        margin: 0.8rem;
      }

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
    font-size: 1.7rem;
    padding: 0.3rem;
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

    @media ${device.tablet} {
      font-size: 2rem;
      padding: 0.6rem;
    }

    @media ${device.mobileM} {
      font-size: 2rem;
      padding: 1rem;
    }
  }
`;
