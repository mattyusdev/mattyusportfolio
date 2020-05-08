import React from "react";
import {
  SkillsUl,
  SkillsLi,
  SkillsChip,
  SkillsTooltip,
  SkillsIconButton,
} from "../styles/elements/aboutElements";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import Fade from "react-reveal/Fade";

export default function SkillsDesign() {
  return (
    <SkillsUl>
      <Fade left duration={300} delay={100}>
        <SkillsLi>
          GRAPHIC
          <SkillsChip>
            <SkillsTooltip title="Photoshop">
              <SkillsIconButton customColor="#5aa4c5">
                <DiPhotoshop />
              </SkillsIconButton>
            </SkillsTooltip>

            <SkillsTooltip title="Illustrator">
              <SkillsIconButton customColor="#ffaf42">
                <DiIllustrator />
              </SkillsIconButton>
            </SkillsTooltip>
          </SkillsChip>
        </SkillsLi>
      </Fade>
    </SkillsUl>
  );
}
