import React from "react";
import {
  ContactBackground,
  ContactMail,
} from "../styles/elements/contactElements";
import PageHeader from "../styles/elements/pageHeaderElements";
import { AiOutlineMail } from "react-icons/ai";
import Form from "./Form";
import useScrollTop from "../hooks/useScrollTop";

export default function Contact() {
  useScrollTop();

  return (
    <>
      <ContactBackground>
        <PageHeader text="GET IN TOUCH" />

        <Form />

        <ContactMail>
          <AiOutlineMail />
          matan@mattyus.com
        </ContactMail>
      </ContactBackground>
    </>
  );
}
