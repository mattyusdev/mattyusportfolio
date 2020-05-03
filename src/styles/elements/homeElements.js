import styled from "styled-components";
import colors from "../globals/palette";
import { expand } from "../globals/animations";

/////////////////////BACKGROUND

export const HomeBackground = styled.div`
  background: url("/Home_.jpg") no-repeat center fixed;
  height: 100vh;
  width: 100vw;
  background-size: cover;
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
  line-height: 80px;
  letter-spacing: 3px;
  margin: 0 0 40px 0;
`;

export const MattyusCurly = styled.span`
  font-size: 120px;
  font-weight: 400;
  margin: 10px;
  color: ${colors.secondary};
`;

////////////Hr

export const HomeHr = styled.hr`
  border: 1.5px solid ${colors.primary};
  width: 350px;
  animation: ${expand} 1s ease-in-out;
`;

////////////Web Fullstack Design

export const WebHeader = styled.h3`
  font-size: 25px;
  letter-spacing: 5px;
  margin: 20px 0;
`;
