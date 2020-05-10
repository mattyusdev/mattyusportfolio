import React from "react";

import {
  SkillsLi,
  SkillsUl,
  SkillsChip,
  SkillsIconButton,
  SkillsTooltip,
  SkillsLight,
} from "../styles/elements/aboutElements";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDigitalOcean,
} from "react-icons/fa";
import { DiMongodb, DiHeroku, DiMysql } from "react-icons/di";
import { CustomFade } from "../styles/globals/animations";

export default function SkillsCode() {
  return (
    <SkillsUl>
      <CustomFade
        triggerOnce
        direction="left"
        cascade
        damping={0.2}
        fraction={1}
      >
        <SkillsLi>
          FRONT <SkillsLight>END</SkillsLight>
          <SkillsChip>
            <SkillsTooltip title="HTML5">
              <SkillsIconButton customColor="#e55328">
                <FaHtml5 />
              </SkillsIconButton>
            </SkillsTooltip>

            <SkillsTooltip title="CSS3">
              <SkillsIconButton customColor="#0067b3">
                <FaCss3Alt />
              </SkillsIconButton>
            </SkillsTooltip>

            <SkillsTooltip title="SASS">
              <SkillsIconButton customColor="#cc6699">
                <FaSass />
              </SkillsIconButton>
            </SkillsTooltip>

            <SkillsTooltip title="JavaScript">
              <SkillsIconButton customColor="#f0db4f">
                <FaJs />
              </SkillsIconButton>
            </SkillsTooltip>

            <SkillsTooltip title="React">
              <SkillsIconButton customColor="#31b7d2">
                <FaReact />
              </SkillsIconButton>
            </SkillsTooltip>

            <SkillsTooltip title="Angular">
              <SkillsIconButton customColor="#dd0330">
                <FaAngular />
              </SkillsIconButton>
            </SkillsTooltip>
          </SkillsChip>
        </SkillsLi>

        <SkillsLi>
          BACK <SkillsLight>END</SkillsLight>
          <SkillsChip>
            <SkillsTooltip title="NodeJS">
              <SkillsIconButton customColor="#77ab43">
                <FaNodeJs />
              </SkillsIconButton>
            </SkillsTooltip>

            <SkillsTooltip title="MongoDB">
              <SkillsIconButton customColor="#48ab4c">
                <DiMongodb />
              </SkillsIconButton>
            </SkillsTooltip>

            <SkillsTooltip title="SQL">
              <SkillsIconButton customColor="#26557c">
                <DiMysql />
              </SkillsIconButton>
            </SkillsTooltip>
          </SkillsChip>
        </SkillsLi>

        <SkillsLi>
          GIT
          <SkillsChip>
            <SkillsTooltip title="GIT">
              <SkillsIconButton customColor="#f05033">
                <FaGitAlt />
              </SkillsIconButton>
            </SkillsTooltip>

            <SkillsTooltip title="GitHub">
              <SkillsIconButton customColor="#6a6a6a">
                <FaGithub />
              </SkillsIconButton>
            </SkillsTooltip>
          </SkillsChip>
        </SkillsLi>

        <SkillsLi>
          CLOUD
          <SkillsChip>
            <SkillsTooltip title="Heroku">
              <SkillsIconButton customColor="#8062a7">
                <DiHeroku />
              </SkillsIconButton>
            </SkillsTooltip>

            <SkillsTooltip title="DigitalOcean">
              <SkillsIconButton customColor="#0080ff">
                <FaDigitalOcean />
              </SkillsIconButton>
            </SkillsTooltip>
          </SkillsChip>
        </SkillsLi>
      </CustomFade>
    </SkillsUl>
  );
}
