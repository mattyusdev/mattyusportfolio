import React from "react";
import {
  ContactBackground,
  ContactRow,
  ContactForm,
  ContactMail,
  ContactTextField,
} from "../styles/elements/contactElements";
import PageHeader from "../styles/elements/pageHeaderElements";
import { AiOutlineMail } from "react-icons/ai";
import Form from "./Form";
import { CustomFade } from "../styles/globals/animations";

export default function Contact() {
  return (
    <>
      <ContactBackground>
        <ContactRow top={true}>
          <PageHeader text="GET IN TOUCH" />
        </ContactRow>

        <Form />

        <ContactRow>
          <ContactMail>
            <AiOutlineMail />
            matan@mattyus.com
          </ContactMail>
        </ContactRow>
      </ContactBackground>
    </>
  );
}
