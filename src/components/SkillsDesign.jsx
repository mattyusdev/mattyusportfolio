import React from "react";
import {
  SkillsUl,
  SkillsLi,
  SkillsChip,
  SkillsText,
} from "../styles/elements/aboutElements";
import { CustomFade } from "../styles/globals/animations";
import { graphicData } from "../data/about/designAboutData";
import { TooltipIcon } from "../styles/globals/tooltipIcons";

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
            {graphicData.map(({ id, ...props }) => (
              <TooltipIcon {...props} key={id} />
            ))}
          </SkillsChip>
        </SkillsLi>
      </CustomFade>
    </SkillsUl>
  );
}
