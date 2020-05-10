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
import { CustomFade } from "../styles/globals/animations";

export default function MyWorkDesign() {
  return (
    <MyWorkBackground notMain={true}>
      <MyWorkHeader>
        <header>
          <CustomFade triggerOnce delay={1000} direction="top">
            <ButtonMain
              component={Link}
              to="/mywork/code"
              small={true}
              active={true}
            >
              VIEW CODE
            </ButtonMain>
          </CustomFade>

          <PageHeader myWork={true} text="MY DESIGN PROJECTS" />
        </header>
      </MyWorkHeader>
      <CustomFade delay={300} duration={300} triggerOnce direction="top">
        <MyWorkImagesRow>
          {designImages.map((i) => (
            <MyWorkImage data={i} key={i.img} />
          ))}
        </MyWorkImagesRow>
      </CustomFade>
    </MyWorkBackground>
  );
}
