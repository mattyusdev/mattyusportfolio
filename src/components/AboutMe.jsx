import React, { useState } from "react";
import {
  AboutBackground,
  SkillsBackground,
  AboutInfo,
  AboutHeart,
  AboutImage,
  SkillsHeader,
  SkillsMain,
  AboutRow,
} from "../styles/elements/aboutElements";
import PageHeader from "../styles/elements/pageHeaderElements";
import { ButtonMain, ButtonCurly } from "../styles/elements/buttonElements";
import SkillsCode from "./SkillsCode";
import SkillsDesign from "./SkillsDesign";
import { CustomFade, CustomBounce } from "../styles/globals/animations";
import useScrollTop from "../hooks/useScrollTop";

export default function AboutMe() {
  const [isCode, setIsCode] = useState(true);

  useScrollTop();

  return (
    <AboutBackground>
      <AboutRow background={true}>
        <PageHeader text="ABOUT ME" />
        <CustomFade triggerOnce direction="top" cascade>
          <AboutInfo>
            Adsdsatur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </AboutInfo>
          <AboutInfo>
            I’ve used: NodeJS, React, Formik, Material-UI(custom),
            Styled-Components, React-Awesome-Reveal and{" "}
            <AboutHeart>❤</AboutHeart> for this website.
          </AboutInfo>
          <AboutImage src="/about_img.jpg" />
        </CustomFade>
      </AboutRow>

      <SkillsBackground>
        <SkillsHeader>
          <CustomBounce triggerOnce>
            <ButtonMain
              active={isCode}
              big={true}
              onClick={() => setIsCode(true)}
            >
              {" "}
              <ButtonCurly left={true}>{"{"}</ButtonCurly>
              VIEW CODE
              <ButtonCurly right={true}>{"}"}</ButtonCurly>
            </ButtonMain>
          </CustomBounce>
          <CustomBounce triggerOnce>
            <ButtonMain
              active={!isCode}
              big={true}
              onClick={() => setIsCode(false)}
            >
              {" "}
              <ButtonCurly left={true}>{"{"}</ButtonCurly>
              DESIGN TECH'S
              <ButtonCurly right={true}>{"}"}</ButtonCurly>
            </ButtonMain>
          </CustomBounce>
        </SkillsHeader>

        <SkillsMain>{isCode ? <SkillsCode /> : <SkillsDesign />}</SkillsMain>
      </SkillsBackground>
    </AboutBackground>
  );
}
