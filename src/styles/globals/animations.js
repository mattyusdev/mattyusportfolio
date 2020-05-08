import { keyframes } from "styled-components";

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
