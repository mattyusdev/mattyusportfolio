import styled from "styled-components";
import { Button } from "@material-ui/core";
import colors from "../globals/palette";

export const ButtonCurly = styled.span`
  color: ${colors.secondary};
  font-size: 20px;
  margin: 0 5px;
  opacity: 0;
  transition: 0.5s;
`;

export const ButtonMain = styled(Button)`
  && {
    height: 48px;
    line-height: 48px;
    padding: 0 50px;
    border-radius: 100px;
    font-weight: bold;
    color: #fff;
    background: tomato;
    font-family: "Gill Sans MT";
    margin: 0 24px;
    font-size: 14px;

    :hover {
      background: blue;
    }

    .curly {
      color: ${colors.secondary};
      font-size: 20px;
      margin: 0 5px;
      opacity: 0;
      transition: 0.5s;
    }

    :hover .curly {
      margin: 0 5px;
      opacity: 1;
    }
  }
`;
