import React from "react";
import {
  MyWorkBackground,
  MyWorkColumn,
} from "../styles/elements/myWorkElements";
import { Link } from "react-router-dom";
import { ButtonMain } from "../styles/elements/buttonElements";
import { CustomFade } from "../styles/globals/animations";

export default function MyWork() {
  return (
    <MyWorkBackground>
      <MyWorkColumn>
        <CustomFade direction="top">
          <ButtonMain
            style={{ opacity: 0 }}
            active={true}
            big={true}
            component={Link}
            to="/mywork/code"
          >
            VIEW CODE
          </ButtonMain>
        </CustomFade>
      </MyWorkColumn>
      <MyWorkColumn background={true}>
        <CustomFade direction="top">
          <ButtonMain
            style={{ opacity: 0 }}
            active={true}
            big={true}
            component={Link}
            to="/mywork/design"
          >
            VIEW DESIGN
          </ButtonMain>
        </CustomFade>
      </MyWorkColumn>
    </MyWorkBackground>
  );
}
