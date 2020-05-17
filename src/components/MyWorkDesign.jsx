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
import { CustomFade, CustomBounce } from "../styles/globals/animations";
import useScrollTop from "../hooks/useScrollTop";
import { Helmet } from "react-helmet-async";

export default function MyWorkDesign() {
  useScrollTop();

  return (
    <MyWorkBackground notMain={true}>
      <Helmet>
        <title>Mattyus | My Design Projects</title>
      </Helmet>

      <MyWorkHeader>
        <header>
          <CustomBounce triggerOnce delay={700}>
            <ButtonMain
              component={Link}
              to="/mywork/code"
              small={true}
              active={true}
            >
              VIEW CODE
            </ButtonMain>
          </CustomBounce>

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
