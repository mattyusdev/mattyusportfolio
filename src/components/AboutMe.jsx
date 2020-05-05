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
} from "../styles/elements/aboutElements";
import PageHeader from "../styles/elements/pageHeaderElements";
import { ButtonMain, ButtonCurly } from "../styles/elements/buttonElements";
import SkillsCode from "./SkillsCode";
import SkillsDesign from "./SkillsDesign";

export default function AboutMe() {
  const [isCode, setIsCode] = useState(true);

  return (
    <>
      <AboutBackground>
        <AboutHeader>
          <PageHeader text="ABOUT ME" />
          <AboutInfo>
            Adsdsatur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </AboutInfo>
          <AboutInfo>
            I’ve used: NodeJS, React, Redux and <AboutHeart>❤</AboutHeart> for
            this website.
          </AboutInfo>
          <AboutImage src="/about_img.jpg" />
        </AboutHeader>
      </AboutBackground>

      <SkillsBackground>
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

        <SkillsMain>{isCode ? <SkillsCode /> : <SkillsDesign />}</SkillsMain>
      </SkillsBackground>
    </>
  );
}
