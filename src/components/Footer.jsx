import React from "react";
import {
  FooterAppBar,
  SocialButton,
  FooterToolBar,
} from "../styles/elements/footerElements";

import { FaInstagram, FaFacebookF, FaTwitter, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterAppBar>
      <FooterToolBar>
        <SocialButton component={Link} target="_blank" to="/someurl">
          <FaFacebookF />
        </SocialButton>

        <SocialButton component={Link} target="_blank" to="/someurl">
          <FaInstagram />
        </SocialButton>

        <SocialButton component={Link} target="_blank" to="/someurl">
          <FaTwitter />
        </SocialButton>

        <SocialButton component={Link} target="_blank" to="/someurl">
          <FaBehance />
        </SocialButton>
      </FooterToolBar>
    </FooterAppBar>
  );
}
