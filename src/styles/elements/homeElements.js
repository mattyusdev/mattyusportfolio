import styled, { css } from "styled-components";
import colors from "../globals/palette";
import { device } from "../globals/responsive";

/////////////////////BACKGROUND

export const HomeBackground = styled.div`
  ${(props) =>
    props.timeStamp &&
    css`
      background: url("/mattyusbackground_effects.svg?${props.timeStamp}") no-repeat center
        fixed;
    `}

  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/////////////////////HEADER

export const LightFont = styled.span`
  font-weight: 400;
`;

export const HomeHeader = styled.header`
  text-align: center;
`;

////////////I'm

export const IamHeader = styled.h2`
  font-size: 5rem;
  margin: 0;
  letter-spacing: 0.06rem;
`;

export const IamComma = styled.span`
  color: ${colors.primary};
`;

////////////Mattyus

export const MattyusHeader = styled.h1`
  font-size: 6.8rem;
  line-height: 6rem;
  letter-spacing: 0.18rem;
  margin: 0 0 2.5rem 0;
`;

export const MattyusHeaderText = styled.span`
  animation-delay: 0.5s;
`;

export const MattyusCurly = styled.span`
  font-size: 7.5rem;
  font-weight: 400;
  margin: 1.25rem;
  color: ${colors.secondary};
`;

////////////Hr

export const HomeHr = styled.hr`
  border: 1.5px solid ${colors.primary};
  width: 18.75rem;
`;

////////////Web Fullstack Design

export const WebHeader = styled.h3`
  font-size: 1.55rem;
  letter-spacing: 0.3rem;
  margin: 1.25rem 0;

  @media ${device.tablet} {
    font-size: 1.7rem;
    letter-spacing: 0.4rem;
    margin: 1.3rem 0;
  }
`;
