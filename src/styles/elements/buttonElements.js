import React from "react";
import styled, { css } from "styled-components";
import { Button } from "@material-ui/core";
import colors from "../globals/palette";

export const ButtonCurly = styled.span`
  color: ${colors.secondary};
  font-size: 20px;
  margin: 0 5px;
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

const ButtonWithProps = ({ active, big, ...otherProps }) => (
  <Button {...otherProps} />
);

export const ButtonMain = styled(ButtonWithProps)`
  && {
    font-weight: bold;
    color: #fff;
    background: ${(props) =>
      !props.active
        ? "transparent"
        : "linear-gradient(to right, " +
          colors.gradientOne +
          " , " +
          colors.gradientTwo +
          ")"};
    margin: 0;
    letter-spacing: 2px;
    transition: 0.5s;

    ${(props) =>
      !props.big
        ? css`
            font-size: 12px;
            height: 48px;
            line-height: 48px;
            padding: 0 30px;
            border-radius: 100px;
          `
        : css`
            font-size: 15px;
            height: 62px;
            line-height: 62px;
            padding: 0 39px;
            border-radius: 130px;
          `}

    &:hover {
      ${(props) =>
        !props.active
          ? css`
              background: transparent;
            `
          : css`
              background: linear-gradient(
                to right,
                ${colors.gradientTwo},
                ${colors.gradientOne}
              );
              transform: scale(1.03);
            `}
    }

    ${(props) =>
      !props.active &&
      css`
        :hover ${ButtonCurly} {
          right: 0;
          opacity: 1;
        }
      `}
  }
`;
