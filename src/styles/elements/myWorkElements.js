import styled, { css } from "styled-components";

export const MyWorkRow = styled.main`
  min-height: calc(100vh - 104px);
  display: flex;
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
      background: url("/Home_.jpg") no-repeat center fixed;
      background-size: cover;
    `}
`;
