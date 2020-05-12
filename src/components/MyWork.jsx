import React from "react";
import {
  MyWorkBackground,
  MyWorkColumn,
} from "../styles/elements/myWorkElements";
import { Link } from "react-router-dom";
import { ButtonMain, ButtonCurly } from "../styles/elements/buttonElements";
import { CustomBounce } from "../styles/globals/animations";

export default function MyWork() {
  return (
    <MyWorkBackground>
      <MyWorkColumn>
        <CustomBounce>
          <ButtonMain
            active={true}
            big={true}
            component={Link}
            to="/mywork/code"
          >
            <ButtonCurly left={true}>{"{"}</ButtonCurly>
            VIEW CODE
            <ButtonCurly right={true}>{"}"}</ButtonCurly>
          </ButtonMain>
        </CustomBounce>
      </MyWorkColumn>
      <MyWorkColumn background={true}>
        <CustomBounce>
          <ButtonMain
            active={true}
            big={true}
            component={Link}
            to="/mywork/design"
          >
            <ButtonCurly left={true}>{"{"}</ButtonCurly>
            VIEW DESIGN
            <ButtonCurly right={true}>{"}"}</ButtonCurly>
          </ButtonMain>
        </CustomBounce>
      </MyWorkColumn>
    </MyWorkBackground>
  );
}
