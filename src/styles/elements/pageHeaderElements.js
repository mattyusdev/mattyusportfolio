import React from "react";
import styled, { css } from "styled-components";
import colors from "../globals/palette";
import { CustomZoom } from "../globals/animations";
import { device } from "../globals/responsive";

const PageHeaderFrame = styled.h1`
  text-align: center;
  letter-spacing: 2px;
  font-size: 2rem;

  ${(props) =>
    props.myWork
      ? css`
          margin: 20px 0 0 0;
        `
      : css`
          margin: 55px 0 0 0;
        `}
`;

const PageHeaderText = styled.span``;

const PageHeaderCurly = styled.span`
  color: ${colors.secondary};
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0 5px;
  position: relative;

  ${(props) =>
    props.right &&
    css`
      right: -10px;
    `}

  ${(props) =>
    props.left &&
    css`
      right: 10px;
    `}
`;

const PageHeaderHr = styled.hr`
  width: 80px;
  border: 1.5px solid ${colors.primary};

  @media ${device.tablet} {
    border-width: 1px;
  }

  ${(props) =>
    props.myWork
      ? css`
          margin: 20px auto 20px auto;
        `
      : css`
          margin: 20px auto 80px auto;
        `}
`;

const PageHeader = (props) => (
  <>
    <CustomZoom triggerOnce>
      <PageHeaderFrame {...props}>
        <PageHeaderCurly left={true}>{"{"}</PageHeaderCurly>
        <PageHeaderText>{props.text}</PageHeaderText>
        <PageHeaderCurly right={true}>{"}"}</PageHeaderCurly>
      </PageHeaderFrame>
    </CustomZoom>
    <CustomZoom triggerOnce delay={300}>
      <PageHeaderHr myWork={props.myWork} />
    </CustomZoom>
  </>
);

export default PageHeader;
