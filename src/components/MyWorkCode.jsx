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
import { CustomFade, CustomBounce } from "../styles/globals/animations";
import useScrollTop from "../hooks/useScrollTop";
import { Helmet } from "react-helmet-async";
import codeWorkData from "../data/mywork/codeWorkData";

export default function MyWorkCode() {
  useScrollTop();

  return (
    <MyWorkBackground notMain={true}>
      <Helmet>
        <title>Mattyus | My Code Projects</title>
      </Helmet>

      <MyWorkHeader>
        <header>
          <CustomBounce triggerOnce delay={700}>
            <ButtonMain
              component={Link}
              to="/mywork/design"
              small={true}
              active={true}
            >
              VIEW DESIGN
            </ButtonMain>
          </CustomBounce>

          <PageHeader myWork={true} text="MY CODE PROJECTS" />
        </header>
      </MyWorkHeader>
      <CustomFade delay={300} duration={300} triggerOnce direction="top">
        <MyWorkImagesRow>
          {codeWorkData.map((i) => (
            <MyWorkImage data={i} code={true} key={i.id} />
          ))}
        </MyWorkImagesRow>
      </CustomFade>
    </MyWorkBackground>
  );
}
