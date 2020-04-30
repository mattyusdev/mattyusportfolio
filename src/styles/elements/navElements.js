import styled from "styled-components";
import { AppBar } from "@material-ui/core";

export const NavAppBar = styled(AppBar)`
  && {
    position: absolute;
    box-shadow: none;
    background-color: transparent;
    padding: 20px 50px;
  }
`;

export const NavSpacer = styled.span`
  flex-grow: 1;
`;
