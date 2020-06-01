import React from "react";

import {
  SkillsLi,
  SkillsUl,
  SkillsChip,
  SkillsLight,
  SkillsText,
} from "../../styles/elements/aboutElements";

import { CustomFade } from "../../styles/globals/animations";
import {
  frontEndData,
  backEndData,
  gitData,
  cloudData,
} from "../../data/about/codeAboutData";
import { TooltipIcon } from "../../styles/globals/elements/tooltipIconsElements";

export default function SkillsCode() {
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
          <SkillsText>
            FRONT <SkillsLight>END</SkillsLight>
          </SkillsText>
          <SkillsChip>
            {frontEndData.map(({ id, ...props }) => (
              <TooltipIcon {...props} key={id} />
            ))}
          </SkillsChip>
        </SkillsLi>

        <SkillsLi>
          <SkillsText>
            BACK <SkillsLight>END</SkillsLight>
          </SkillsText>
          <SkillsChip>
            {backEndData.map(({ id, ...props }) => (
              <TooltipIcon {...props} key={id} />
            ))}
          </SkillsChip>
        </SkillsLi>

        <SkillsLi>
          <SkillsText>GIT</SkillsText>
          <SkillsChip>
            {gitData.map(({ id, ...props }) => (
              <TooltipIcon {...props} key={id} />
            ))}
          </SkillsChip>
        </SkillsLi>

        <SkillsLi>
          <SkillsText>CLOUD</SkillsText>
          <SkillsChip>
            {cloudData.map(({ id, ...props }) => (
              <TooltipIcon {...props} key={id} />
            ))}
          </SkillsChip>
        </SkillsLi>
      </CustomFade>
    </SkillsUl>
  );
}
