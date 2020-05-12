import React from "react";
import styled, { keyframes } from "styled-components";
import { Fade, Zoom, Bounce } from "react-awesome-reveal";

export const slideRight = keyframes`
  0% {
            transform: scaleX(0);
            transform-origin: 0% 100%;
  }
  100% {
            transform: scaleX(1);
            transform-origin: 0% 100%;
  }
`;

export const slideLeft = keyframes`
  0% {
            transform: scaleX(0);
            transform-origin: 100% 0% ;
  }
  100% {
            transform: scaleX(1);
            transform-origin: 100% 0% ;
  }
`;

export const slideDown = keyframes`
    0% {
            transform: scaleY(0);
            transform-origin: 100% 0% ;
  }
  100% {
            transform: scaleY(1);
            transform-origin: 100% 0% ;
  }
`;

export const width = keyframes`
0% {
  width: 0;
}
100% {
  width: 100;
}
`;

export const CustomFade = styled(Fade)`
  && > * {
    opacity: 0;
  }
`;

export const CustomZoom = ({ children, ...props }) => (
  <Zoom {...props}>
    <CustomFade triggerOnce>{children}</CustomFade>
  </Zoom>
);

export const CustomBounce = ({ children, ...props }) => (
  <Bounce {...props}>
    <CustomFade triggerOnce>{children}</CustomFade>
  </Bounce>
);
