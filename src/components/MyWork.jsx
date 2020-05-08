import React from "react";
import {
  MyWorkBackground,
  MyWorkColumn,
} from "../styles/elements/myWorkElements";
import { Link } from "react-router-dom";
import { ButtonMain } from "../styles/elements/buttonElements";
import Fade from "react-reveal/Fade";

export default function MyWork() {
  return (
    <MyWorkBackground>
      <MyWorkColumn>
        <Fade top>
          <ButtonMain
            active={true}
            big={true}
            component={Link}
            to="/mywork/code"
          >
            VIEW CODE
          </ButtonMain>
        </Fade>
      </MyWorkColumn>
      <MyWorkColumn background={true}>
        <Fade top>
          <ButtonMain
            active={true}
            big={true}
            component={Link}
            to="/mywork/design"
          >
            VIEW DESIGN
          </ButtonMain>
        </Fade>
      </MyWorkColumn>
    </MyWorkBackground>
  );
}
