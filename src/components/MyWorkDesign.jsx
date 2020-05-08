import React from "react";
import {
  MyWorkBackground,
  MyWorkHeader,
  MyWorkImagesRow,
} from "../styles/elements/myWorkElements";
import PageHeader from "../styles/elements/pageHeaderElements";
import { ButtonMain } from "../styles/elements/buttonElements";
import { Link } from "react-router-dom";
import MyWorkImage from "./MyWorkImage";
import designImages from "../data/designImages";
import Zoom from "react-reveal/Zoom";

export default function MyWorkDesign() {
  return (
    <Zoom duration={500}>
      <MyWorkBackground notMain={true}>
        <MyWorkHeader>
          <header>
            <ButtonMain
              component={Link}
              to="/mywork/code"
              small={true}
              active={true}
            >
              VIEW CODE
            </ButtonMain>

            <PageHeader myWork={true} text="MY DESIGN PROJECTS" />
          </header>
        </MyWorkHeader>
        <MyWorkImagesRow>
          {designImages.map((i) => (
            <MyWorkImage data={i} key={i.img} />
          ))}
        </MyWorkImagesRow>
      </MyWorkBackground>
    </Zoom>
  );
}
