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
          margin: 1rem 0 0 0;
        `
      : css`
          margin: 4rem 0 0 0;
        `}
`;

const PageHeaderText = styled.span``;

const PageHeaderCurly = styled.span`
  color: ${colors.secondary};
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0 0.1rem;
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
  width: 5rem;
  border: 1.5px solid ${colors.primary};

  @media ${device.tablet} {
    border-width: 1px;
  }

  ${(props) =>
    props.myWork
      ? css`
          margin: 1.3rem auto 1.3rem auto;
        `
      : css`
          margin: 1.3rem auto 5.5rem auto;
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
