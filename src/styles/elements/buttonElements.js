import React from "react";
import styled, { css } from "styled-components";
import { Button } from "@material-ui/core";
import colors from "../globals/palette";
import { device } from "../globals/responsive";

export const ButtonCurly = styled.span`
  color: ${colors.secondary};
  font-size: 1.25rem;
  margin: 0 0.3rem;
  position: relative;
  opacity: 0;
  transition: 0.5s;

  ${(props) =>
    props.right &&
    css`
      right: -20px;
    `}

  ${(props) =>
    props.left &&
    css`
      right: 20px;
    `}
`;

const ButtonWithProps = ({ active, big, small, nav, ...otherProps }) => (
  <Button {...otherProps} />
);

export const ButtonMain = styled(ButtonWithProps)`
  && {
    font-weight: bold;
    color: #fff;
    margin: 0;
    letter-spacing: 2px;
    transition: 0.5s;
    font-size: 0.75rem;
    height: 3rem;
    line-height: 3rem;
    padding: 0 2rem;
    border-radius: 6.25rem;

    @media ${device.tablet} {
      font-size: 1rem;
    height: 3.75rem;
    line-height:  3.75rem;
    padding: 0 2.5rem;
    border-radius: 7.8rem;
        }

    ${(props) =>
      props.active
        ? css`
            background: linear-gradient(
              to right,
              ${colors.gradientOne},
              ${colors.gradientTwo}
            );

            &:hover {
              background: linear-gradient(
                to right,
                ${colors.gradientTwo},
                ${colors.gradientOne}
              );
              transform: scale(1.03);
            }
          `
        : css`
            background: transparent;

            &:hover {
              background: transparent;

              :hover ${ButtonCurly} {
                right: 0;
                opacity: 1;
              }
            }
          `}

    ${(props) =>
      props.big &&
      css`
        font-size: 0.9rem;
        height: 3.7rem;
        line-height: 3.7rem;
        padding: 0 1.8rem;
        border-radius: 8rem;

        @media ${device.tablet} {
          font-size: 1rem;
          height: 4.2rem;
          line-height: 4.2rem;
          padding: 0 2rem;
          border-radius: 7.8rem;
        }
      `}

    ${(props) =>
      props.small &&
      css`
        font-size: 0.5rem;
        height: 2rem;
        line-height: 2rem;
        padding: 0 1.3rem;
        border-radius: 3.1rem;

        @media ${device.tablet} {
          font-size: 0.9rem;
          height: 3.8rem;
          line-height: 3.8rem;
          padding: 0 2rem;
          border-radius: 7.8rem;
        }
      `}
      

      ${(props) =>
        props.nav &&
        css`
          @media ${device.tablet} {
            font-size: 2rem;
            padding: 4rem;
            width: 100%;
            border-radius: 0;

            &: hover {
              background: linear-gradient(
                to right,
                ${colors.gradientTwo},
                ${colors.gradientOne}
              );
              transform: scale(1.03);

              :hover ${ButtonCurly} {
                opacity: 0;
              }
            }
          }
        `}


  }`;
