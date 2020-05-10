import React, { useState, useEffect } from "react";
import {
  AboutBackground,
  SkillsBackground,
  AboutHeader,
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
import { CustomFade } from "../styles/globals/animations";

export default function AboutMe() {
  const [isCode, setIsCode] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AboutBackground>
      <AboutRow background={true}>
        <AboutHeader>
          <PageHeader text="ABOUT ME" />
          <CustomFade triggerOnce direction="top" cascade fraction={1}>
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
        </AboutHeader>
      </AboutRow>

      <SkillsBackground>
        <CustomFade triggerOnce direction="top" fraction={1}>
          <SkillsHeader>
            <ButtonMain
              active={isCode}
              big={true}
              onClick={() => setIsCode(true)}
            >
              {" "}
              <ButtonCurly left={true}>{"{"}</ButtonCurly>
              CODE TECH'S
              <ButtonCurly right={true}>{"}"}</ButtonCurly>
            </ButtonMain>

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
          </SkillsHeader>
        </CustomFade>

        <SkillsMain>{isCode ? <SkillsCode /> : <SkillsDesign />}</SkillsMain>
      </SkillsBackground>
    </AboutBackground>
  );
}
