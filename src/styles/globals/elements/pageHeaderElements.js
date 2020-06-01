import React from "react";
import styled, { css } from "styled-components";
import colors from "../palette";
import { CustomZoom } from "../animations";
import { device } from "../responsive";

const PageHeaderFrame = styled.h1`
  text-align: center;
  letter-spacing: 2px;
  font-size: 2rem;
  margin: 4rem 0 0 0;

  ${(props) =>
    props.myWork &&
    css`
      margin: 1rem 0 0 0;
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
  margin: 1.3rem auto 4rem auto;

  @media ${device.tablet} {
    border-width: 1px;
  }

  ${(props) =>
    props.myWork &&
    css`
      margin: 1.3rem auto 1.3rem auto;
    `}
`;

const PageHeader = ({ myWork, ...props }) => (
  <>
    <CustomZoom triggerOnce>
      <PageHeaderFrame {...props} myWork={myWork}>
        <PageHeaderCurly left={true}>{"{"}</PageHeaderCurly>
        <PageHeaderText>{props.text}</PageHeaderText>
        <PageHeaderCurly right={true}>{"}"}</PageHeaderCurly>
      </PageHeaderFrame>
    </CustomZoom>
    <CustomZoom triggerOnce delay={300}>
      <PageHeaderHr myWork={myWork} />
    </CustomZoom>
  </>
);

export default PageHeader;
