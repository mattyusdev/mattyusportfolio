import React, { useState } from "react";
import {
  AboutBackground,
  SkillsBackground,
  AboutInfo,
  AboutHeart,
  SkillsHeader,
  SkillsMain,
  AboutRow,
  AboutInfoColor,
} from "../../styles/elements/aboutElements";
import PageHeader from "../../styles/globals/elements/pageHeaderElements";
import {
  ButtonMain,
  ButtonCurly,
} from "../../styles/globals/elements/buttonElements";
import SkillsCode from "./SkillsCode";
import SkillsDesign from "./SkillsDesign";
import { CustomFade, CustomBounce } from "../../styles/globals/animations";
import useScrollTop from "../../hooks/useScrollTop";
import { Helmet } from "react-helmet-async";

export default function AboutMe() {
  const [isCode, setIsCode] = useState(true);

  useScrollTop();

  return (
    <AboutBackground>
      <Helmet>
        <title>Mattyus | About Me</title>
      </Helmet>

      <AboutRow background={true}>
        <PageHeader text="ABOUT ME" aboutMe={true} />
      </AboutRow>

      <AboutRow info={true}>
        <CustomFade triggerOnce direction="top" cascade>
          <AboutInfo>
            In <AboutInfoColor primary={true}>2015</AboutInfoColor> I've began
            my journey as graphic designer, I wasn't satisfied since I can't
            build an app that actually works.
          </AboutInfo>
          <AboutInfo>
            In <AboutInfoColor secondary={true}>2019</AboutInfoColor> I've
            started to learn full stack web development and instantly fell in
            love with it.
          </AboutInfo>
          <AboutInfo bottom={true}>
            I’ve used: NodeJS, React, Formik & Yup, Material-UI,
            Styled-Components, React-Awesome-Reveal, React Icons, IcoMoon, React
            Helmet and <AboutHeart>❤</AboutHeart> for this website.
          </AboutInfo>
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
              CODE TECH'S
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
