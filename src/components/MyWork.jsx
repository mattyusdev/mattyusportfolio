import React from "react";
import {
  MyWorkBackground,
  MyWorkColumn,
} from "../styles/elements/myWorkElements";
import { Link } from "react-router-dom";
import { ButtonMain, ButtonCurly } from "../styles/elements/buttonElements";
import { CustomBounce } from "../styles/globals/animations";
import { Helmet } from "react-helmet-async";

export default function MyWork() {
  return (
    <MyWorkBackground>
      <Helmet>
        <title>Mattyus | My Work</title>
      </Helmet>

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
