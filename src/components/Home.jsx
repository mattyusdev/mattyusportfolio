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
} from "../styles/elements/homeElements";
import { ButtonMain } from "../styles/elements/buttonElements";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <HomeBackground>
      <HomeHeader>
        <IamHeader>
          I<IamComma>’</IamComma>m
        </IamHeader>
        <MattyusHeader>
          <MattyusCurly>{"{"}</MattyusCurly>
          Matt<LightFont>yus</LightFont>
          <MattyusCurly>{"}"}</MattyusCurly>
        </MattyusHeader>
        <HomeHr />
        <WebHeader>
          WEB <LightFont>X</LightFont> FULLSTACK <LightFont>X</LightFont> DESIGN
        </WebHeader>
        <ButtonMain component={Link} to="/mywork" active={true}>
          MY WORK
        </ButtonMain>
      </HomeHeader>
    </HomeBackground>
  );
}
