import React, { useState } from "react";
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
import Fade from "react-reveal/Fade";

export default function AboutMe() {
  const [isCode, setIsCode] = useState(true);

  return (
    <AboutBackground>
      <AboutRow background={true}>
        <AboutHeader>
          <PageHeader text="ABOUT ME" />

          <Fade top delay={500} duration={400}>
            <AboutInfo>
              Adsdsatur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </AboutInfo>
            <AboutInfo>
              I’ve used: NodeJS, React, MaterialUI(custom), Styled-Components,
              Formik and <AboutHeart>❤</AboutHeart> for this website.
            </AboutInfo>
          </Fade>
          <Fade top delay={800} duration={400}>
            <AboutImage src="/about_img.jpg" />
          </Fade>
        </AboutHeader>
      </AboutRow>

      <SkillsBackground>
        <Fade top delay={1300} duration={400}>
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
        </Fade>

        <SkillsMain>{isCode ? <SkillsCode /> : <SkillsDesign />}</SkillsMain>
      </SkillsBackground>
    </AboutBackground>
  );
}
