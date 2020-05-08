import styled from "styled-components";
import colors from "../globals/palette";
import { slideDown, width } from "../globals/animations";

/////////////////////BACKGROUND

export const HomeBackground = styled.div`
  background: url("/Home_.jpg") no-repeat center fixed;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideDown} 0.3s ease-in;
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
  font-size: 60px;
  margin: 0;
  letter-spacing: 1px;
`;

export const IamComma = styled.span`
  color: ${colors.primary};
`;

////////////Mattyus

export const MattyusHeader = styled.h1`
  font-size: 110px;
  line-height: 90px;
  letter-spacing: 3px;
  margin: 0 0 40px 0;
`;

export const MattyusHeaderText = styled.span`
  animation-delay: 0.5s;
`;

export const MattyusCurly = styled.span`
  font-size: 120px;
  font-weight: 400;
  margin: 20px;
  color: ${colors.secondary};
`;

////////////Hr

export const HomeHr = styled.hr`
  border: 1.5px solid ${colors.primary};
  width: 300px;
  animation: ${width} 1s ease-in-out;
  animation-delay: 1.5s;
`;

////////////Web Fullstack Design

export const WebHeader = styled.h3`
  font-size: 25px;
  letter-spacing: 5px;
  margin: 20px 0;
`;
