import React from "react";
import styled, { css } from "styled-components";
import colors from "../globals/palette";

const PageHeaderFrame = styled.h1`
  text-align: center;
  margin: 55px 0 0 0;
  letter-spacing: 2px;
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
  margin: 20px auto 80px auto;
  width: 80px;
  border: 1.5px solid ${colors.primary};
`;

const PageHeader = (props) => (
  <>
    <PageHeaderFrame {...props}>
      <PageHeaderCurly left={true}>{"{"}</PageHeaderCurly>
      <PageHeaderText>{props.text}</PageHeaderText>
      <PageHeaderCurly right={true}>{"}"}</PageHeaderCurly>
    </PageHeaderFrame>
    <PageHeaderHr />
  </>
);

export default PageHeader;
