import React from "react";
import {
  MyWorkImageFrame,
  MyWorkImageElement,
  MyWorkImageOverlay,
  MyWorkImageTitle,
  MyWorkImageHeader,
  MyWorkImageHr,
  MyWorkImageInfo,
} from "../styles/elements/myWorkElements";
import { ButtonMain } from "../styles/elements/buttonElements";
import {
  SkillsIconButton,
  SkillsTooltip,
} from "../styles/elements/aboutElements";
import { TooltipIcon, CustomIconButton } from "../styles/globals/tooltipIcons";
import { FaGithub, FaBehance } from "react-icons/fa";

export default function MyWorkImage({ data, code }) {
  return (
    <MyWorkImageFrame code={code}>
      <MyWorkImageElement src={data.img} alt={data.alt} />
      <MyWorkImageOverlay top={data.top}>
        <MyWorkImageHeader>
          <MyWorkImageTitle>{data.title}</MyWorkImageTitle>
          {code &&
            data.tech.map(({ id, ...props }) => (
              <TooltipIcon key={id} {...props} />
            ))}
          <MyWorkImageHr />
          <MyWorkImageInfo code={code}>{data.info}</MyWorkImageInfo>

          {data.url && (
            <ButtonMain
              active={true}
              small={true}
              component="a"
              href={data.url}
              target="_blank"
            >
              {code ? "DEMO" : "VIEW"}
            </ButtonMain>
          )}

          {data.github && (
            <ButtonMain
              active={false}
              small={true}
              component="a"
              href={data.github}
              target="_blank"
            >
              <FaGithub />
            </ButtonMain>
          )}

          {data.behance && (
            <ButtonMain
              active={false}
              small={true}
              component="a"
              href={data.behance}
              target="_blank"
            >
              <FaBehance />
            </ButtonMain>
          )}
        </MyWorkImageHeader>
      </MyWorkImageOverlay>
    </MyWorkImageFrame>
  );
}
