import styled, { css } from "styled-components";
import colors from "../globals/palette";
import { device } from "../globals/responsive";

export const MyWorkBackground = styled.main`
  min-height: calc(100vh - 208px);
  width: 100%;

  ${(props) =>
    props.notMain
      ? css`
          display: block;
          background: ${colors.background};
        `
      : css`
          display: flex;
          @media ${device.mobileL} {
            flex-direction: column-reverse;
          }
        `}
`;

export const MyWorkColumn = styled.div`
  height: calc(100vh - 208px);
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    height: calc(50vh - 104px);
    width: 100%;
  }

  ${(props) =>
    props.background
      ? css`
          background: url("/svg/mattyusbackground_noeffects.svg") no-repeat
            center;
          background-size: cover;
        `
      : css`
          background: ${colors.tertiary};
        `}
`;

export const MyWorkHeader = styled.div`
  text-align: center;
  width: 100%;
  height: 40vh;
  background: url("/svg/mattyusbackground_noeffects.svg") no-repeat center;
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
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.code
      ? css`
          width: calc(100% / 3);
        `
      : css`
          width: 25%;
        `}


  @media ${device.laptopS} {
    width: 50%;
  }

  @media ${device.mobileL} {
    width: 100%;
  }

  &:hover {
    > * {
      transform: translate(0, 0);
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
  height: 100%;
  transition: 0.4s;
  background: rgba(4, 3, 47, 0.97);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${(props) =>
    props.top
      ? css`
          transform: translate(0, -100%);
        `
      : css`
          transform: translate(0, 100%);
        `}

  div {
    text-align: center;
  }
`;

export const MyWorkImageHeader = styled.div`
  /* opacity: 1; */
  transition: 0.7s;
  /* z-index: 1; */
`;

export const MyWorkImageTitle = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 2px;

  @media ${device.tablet} {
    font-size: 2rem;
  }

  @media ${device.mobileS} {
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`;

export const MyWorkImageHr = styled.hr`
  width: 3.2rem;

  @media ${device.tablet} {
    width: 4rem;
  }
  border: 1.5px solid ${colors.primary};
`;

export const MyWorkImageInfo = styled.h3`
  font-size: 0.8rem;
  letter-spacing: 3px;
  font-weight: 400;
  opacity: 0.6;
  margin: 1rem auto;

  ${(props) =>
    props.code &&
    css`
      width: 60%;
    `}

  @media ${device.tablet} {
    font-size: 1.2rem;
  }

  @media ${device.mobileS} {
    font-size: 1rem;
  }
`;
