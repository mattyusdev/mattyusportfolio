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
import { NavLink } from "react-router-dom";

export default function MyWorkImage({ data }) {
  return (
    <MyWorkImageFrame>
      <MyWorkImageElement src={data.img} alt={data.alt} />
      <MyWorkImageOverlay top={data.top}>
        <MyWorkImageHeader>
          <MyWorkImageTitle>{data.title}</MyWorkImageTitle>
          <MyWorkImageHr />
          <MyWorkImageInfo>{data.info}</MyWorkImageInfo>
          {/* DESCRIPTION */}
          {!data.urlDisabled ? (
            <ButtonMain
              active={true}
              small={true}
              component="a"
              href={data.url}
              target="_blank"
            >
              VIEW
            </ButtonMain>
          ) : null}
        </MyWorkImageHeader>
      </MyWorkImageOverlay>
    </MyWorkImageFrame>
  );
}
