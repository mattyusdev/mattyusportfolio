import React from "react";
import { MyWorkRow, MyWorkColumn } from "../styles/elements/myWorkElements";
import { Link } from "react-router-dom";
import { ButtonMain } from "../styles/elements/buttonElements";

export default function MyWork() {
  return (
    <MyWorkRow>
      <MyWorkColumn>
        <ButtonMain active={true} big={true} component={Link} to="/mywork/code">
          VIEW CODE
        </ButtonMain>
      </MyWorkColumn>
      <MyWorkColumn background={true}>
        <ButtonMain
          active={true}
          big={true}
          component={Link}
          to="/mywork/design"
        >
          VIEW DESIGN
        </ButtonMain>
      </MyWorkColumn>
    </MyWorkRow>
  );
}
