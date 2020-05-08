import React from "react";
import {
  HomeBackground,
  HomeHeader,
  IamHeader,
  IamComma,
  MattyusHeader,
  LightFont,
  HomeHr,
  MattyusCurly,
  WebHeader,
  MattyusHeaderText,
} from "../styles/elements/homeElements";
import { ButtonMain } from "../styles/elements/buttonElements";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

export default function Home() {
  return (
    <HomeBackground>
      <HomeHeader>
        <Fade top>
          <IamHeader>
            I<IamComma>’</IamComma>m
          </IamHeader>
        </Fade>
        <Fade delay={500}>
          <MattyusHeader>
            <MattyusCurly>{"{"}</MattyusCurly>
            <MattyusHeaderText>
              Matt<LightFont>yus</LightFont>
            </MattyusHeaderText>
            <MattyusCurly>{"}"}</MattyusCurly>
          </MattyusHeader>
        </Fade>
        <Fade delay={1500}>
          <HomeHr />
        </Fade>
        <Fade delay={1500}>
          <WebHeader>
            WEB <LightFont>X</LightFont> FULLSTACK <LightFont>X</LightFont>{" "}
            DESIGN
          </WebHeader>
        </Fade>
        <Fade top delay={1900}>
          <ButtonMain component={Link} to="/mywork" active={true}>
            MY WORK
          </ButtonMain>
        </Fade>
      </HomeHeader>
    </HomeBackground>
  );
}
