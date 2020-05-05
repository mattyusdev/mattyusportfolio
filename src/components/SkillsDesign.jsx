import React from "react";
import {
  SkillsUl,
  SkillsLi,
  SkillsChip,
  SkillsTooltip,
  SkillsIconButton,
} from "../styles/elements/aboutElements";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";

export default function SkillsDesign() {
  return (
    <SkillsUl>
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
    </SkillsUl>
  );
}
