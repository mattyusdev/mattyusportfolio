import styled, { css } from "styled-components";
import colors from "../globals/palette";
import { slideRight } from "../globals/animations";

export const MyWorkBackground = styled.main`
  min-height: calc(100vh - 208px);
  /* animation: ${slideRight} 0.3s ease-in; */

  ${(props) =>
    props.notMain
      ? css`
          display: block;
          background: ${colors.background};
        `
      : css`
          display: flex;
        `}

  width: 100%;
`;

export const MyWorkColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.background &&
    css`
      background: url("/Home_.jpg") no-repeat center;
      background-size: cover;
    `}
`;

export const MyWorkHeader = styled.div`
  text-align: center;
  width: 100%;
  height: 250px;
  background: url("/Home_.jpg") no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyWorkImagesRow = styled.main`
  display: flex;
  flex-wrap: wrap;
`;

export const MyWorkImageFrame = styled.div`
  display: flex;
  width: 25%;
  position: relative;

  &:hover {
    > * {
      height: 100%;
      & > * {
        opacity: 1;
        z-index: 0;
      }
    }
  }
`;

export const MyWorkImageElement = styled.img`
  width: 100%;
`;

export const MyWorkImageOverlay = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 0;
  transition: 0.4s;
  background: rgba(4, 3, 47, 0.97);
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.top
      ? css`
          top: 0;
        `
      : css`
          bottom: 0;
        `}

  div {
    text-align: center;
  }
`;

export const MyWorkImageHeader = styled.div`
  opacity: 0;
  transition: 0.7s;
  z-index: -1;
`;

export const MyWorkImageTitle = styled.h2`
  letter-spacing: 2px;
`;

export const MyWorkImageHr = styled.hr`
  width: 50px;
  border: 1.5px solid ${colors.primary};
`;

export const MyWorkImageInfo = styled.h3`
  letter-spacing: 3px;
  font-weight: 400;
  opacity: 0.6;
`;
