import React from "react";
import {
  FooterAppBar,
  SocialButton,
  FooterToolBar,
} from "../../styles/elements/footerElements";
import { footerIcons } from "../../data/footer/footerIconsData";

export default function Footer() {
  return (
    <FooterAppBar component="footer">
      <FooterToolBar>
        {footerIcons.map((i) => (
          <SocialButton
            key={i.id}
            IconComponent={i.IconComponent}
            component="a"
            target="_blank"
            href={i.url}
          />
        ))}
      </FooterToolBar>
    </FooterAppBar>
  );
}
