import React from "react";
import {
  MyWorkBackground,
  MyWorkColumn,
} from "../styles/elements/myWorkElements";
import { Link } from "react-router-dom";
import { ButtonMain, ButtonCurly } from "../styles/elements/buttonElements";
import { CustomFade } from "../styles/globals/animations";

export default function MyWork() {
  return (
    <MyWorkBackground>
      <MyWorkColumn>
        <CustomFade direction="top">
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
        </CustomFade>
      </MyWorkColumn>
      <MyWorkColumn background={true}>
        <CustomFade direction="top">
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
        </CustomFade>
      </MyWorkColumn>
    </MyWorkBackground>
  );
}
