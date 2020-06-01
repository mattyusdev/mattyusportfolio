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
} from "../../styles/elements/homeElements";
import { ButtonMain } from "../../styles/globals/elements/buttonElements";
import { Link } from "react-router-dom";
import {
  CustomFade,
  CustomZoom,
  CustomBounce,
} from "../../styles/globals/animations";

export default function Home() {
  const timeStamp = new Date().getTime();

  return (
    <HomeBackground timeStamp={timeStamp}>
      <HomeHeader>
        <CustomFade direction="top" delay={300}>
          <IamHeader>
            I<IamComma>’</IamComma>m
          </IamHeader>
        </CustomFade>
        <CustomZoom delay={1000}>
          <MattyusHeader>
            <MattyusCurly>{"{"}</MattyusCurly>
            <MattyusHeaderText>
              Matt<LightFont>yus</LightFont>
            </MattyusHeaderText>
            <MattyusCurly>{"}"}</MattyusCurly>
          </MattyusHeader>
        </CustomZoom>
        <CustomZoom delay={1300}>
          <HomeHr />
        </CustomZoom>
        <CustomFade direction="bottom" delay={2000}>
          <WebHeader>
            WEB <LightFont>X</LightFont> FULL STACK <LightFont>X</LightFont>{" "}
            DESIGN
          </WebHeader>
        </CustomFade>
        <CustomBounce delay={2400}>
          <ButtonMain component={Link} to="/mywork" active={true}>
            MY WORK
          </ButtonMain>
        </CustomBounce>
      </HomeHeader>
    </HomeBackground>
  );
}
