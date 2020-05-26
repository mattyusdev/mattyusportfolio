import React from "react";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import colors from "./palette";
import styled, { css } from "styled-components";
import { device } from "./responsive";

const TooltipWithProps = (props) => (
  <Tooltip
    placement="top"
    TransitionComponent={Zoom}
    TransitionProps={{ timeout: 300 }}
    classes={{ popper: props.className, tooltip: "tooltip" }}
    {...props}
  />
);

export const CustomTooltip = styled(TooltipWithProps)`
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

export const CustomIconButton = styled(IconButtonWithProps)`
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

export const TooltipIcon = ({
  IconComponent,
  customColor,
  title,
  content,
  ...props
}) => (
  <CustomTooltip title={title} {...props}>
    <CustomIconButton content={content} customColor={customColor}>
      <IconComponent />
    </CustomIconButton>
  </CustomTooltip>
);
