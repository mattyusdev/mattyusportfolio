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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.background &&
    css`
      background: url("/mattyusbackground_noeffects.svg") no-repeat center fixed;
      background-size: cover;
    `}
`;

/////////////////////ABOUT

export const AboutInfo = styled.h4`
  width: 70%;
  margin: 1.5rem auto;
  text-align: center;
`;

export const AboutHeart = styled.span`
  color: crimson;
`;

export const AboutImageFrame = styled.div`
  margin: 5rem auto;
  position: relative;
  overflow: hidden;
  box-shadow: -2px 16px 44px -10px rgba(0, 0, 0, 0.62);

  &,
  > * {
    width: 13rem;
    border-radius: 50%;
    height: 100%;
  }

  :hover div {
    transform: translate(0, 0);
  }
`;

export const AboutImage = styled.img`
    display: block;
  /* border: 5px solid ${colors.tertiary}; */
`;

export const AboutImageOverlay = styled.div`
  background: linear-gradient(
    to right,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  position: absolute;
  transition: 0.4s;
  top: 0;
  left: 0;
  transform: translate(0, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutImageOverlayText = styled.h3`
  font-size: 1rem;
  text-align: center;
  width: 70%;
`;

/////////////////////SKILLS

export const SkillsBackground = styled.div`
  padding: 10px;
  min-height: 650px;

  @media ${device.laptop} {
    min-height: 600px;
  }
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
  ({ customColor, customIcon, content, ...otherProps }, ref) => (
    <IconButton color="inherit" {...otherProps} ref={ref} />
  )
);

export const SkillsIconButton = styled(IconButtonWithProps)`
  && {
    padding: 0.3rem;
    
    svg, .custom-icon::before {
      transition: 0.7s;
      font-size: 1.7rem;
    }

    &:hover {
      background: linear-gradient(
        to right,
        ${colors.gradientOne},
        ${colors.gradientTwo}
      );
    }

    &:hover svg, &:hover .custom-icon::before {
          color: #fff;
    }


    ${(props) =>
      props.customColor &&
      css`
        svg,
        .custom-icon::before {
          color: ${props.customColor};
        }
      `}

    ${(props) =>
      props.content &&
      css`
        .custom-icon:before {
            content: "${props.content}";
        }
      `}


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
