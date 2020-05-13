import React from "react";
import {
  SkillsUl,
  SkillsLi,
  SkillsChip,
  SkillsTooltip,
  SkillsIconButton,
  SkillsText,
} from "../styles/elements/aboutElements";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { CustomFade } from "../styles/globals/animations";

export default function SkillsDesign() {
  return (
    <SkillsUl>
      <CustomFade
        triggerOnce
        direction="left"
        cascade
        damping={0.2}
        fraction={0.6}
      >
        <SkillsLi>
          <SkillsText>GRAPHIC</SkillsText>
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
      </CustomFade>
    </SkillsUl>
  );
}
