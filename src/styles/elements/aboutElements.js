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
  min-height: calc(45vh - 52px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.background &&
    css`
      background: url("/svg/mattyusbackground_noeffects.svg") no-repeat center;
      background-size: cover;
    `}

  ${(props) =>
    props.info &&
    css`
      min-height: calc(55vh - 52px);
      background: ${colors.tertiary};
    `}
`;

/////////////////////ABOUT

export const AboutInfo = styled.h4`
  width: 95%;
  margin: 2rem auto;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.5rem;
  letter-spacing: 1px;

  ${(props) =>
    props.top &&
    css`
      font-size: 1.7rem;
      margin: 4rem auto 7rem auto;
    `};

  ${(props) =>
    props.bottom &&
    css`
      font-size: 0.8rem;
      margin: 3rem auto;
      width: 60%;

      @media ${device.mobileL} {
        && {
          font-size: 1.1rem;
          width: 70%;
        }
      }
    `};

  @media ${device.mobileL} {
    width: 85%;

    font-size: 1.3rem;
    line-height: 1.7rem;
  }
`;

export const AboutInfoColor = styled.span`
  ${(props) =>
    props.primary &&
    css`
      color: ${colors.primary};
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: ${colors.secondary};
    `}
`;

export const AboutHeart = styled.span`
  color: crimson;
`;

/////////////////////SKILLS

export const SkillsBackground = styled.div`
  padding: 10px;
  min-height: 650px;
  background: ${colors.quaternary};

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
