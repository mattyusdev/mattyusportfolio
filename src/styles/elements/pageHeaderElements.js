import React from "react";
import styled, { css } from "styled-components";
import colors from "../globals/palette";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const PageHeaderFrame = styled.h1`
  text-align: center;
  letter-spacing: 2px;

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
  font-size: 125%;
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
    <Fade top>
      <PageHeaderFrame {...props}>
        <PageHeaderCurly left={true}>{"{"}</PageHeaderCurly>
        <PageHeaderText>{props.text}</PageHeaderText>
        <PageHeaderCurly right={true}>{"}"}</PageHeaderCurly>
      </PageHeaderFrame>
    </Fade>
    <Bounce top>
      <PageHeaderHr myWork={props.myWork} />
    </Bounce>
  </>
);

export default PageHeader;
