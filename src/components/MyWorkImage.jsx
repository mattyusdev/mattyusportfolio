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
import { Link } from "react-router-dom";

export default function MyWorkImage({ data }) {
  return (
    <MyWorkImageFrame>
      <MyWorkImageElement src={data.img} />
      <MyWorkImageOverlay top={data.top}>
        <MyWorkImageHeader>
          <MyWorkImageTitle>{data.title}</MyWorkImageTitle>
          <MyWorkImageHr />
          <MyWorkImageInfo>{data.info}</MyWorkImageInfo>
          {/* DESCRIPTION */}
          <ButtonMain active={true} small={true} component={Link} to="/asd">
            VIEW
          </ButtonMain>
        </MyWorkImageHeader>
      </MyWorkImageOverlay>
    </MyWorkImageFrame>
  );
}
