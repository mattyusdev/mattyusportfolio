import React from "react";
import {
  ContactBackground,
  ContactMail,
} from "../../styles/elements/contactElements";
import PageHeader from "../../styles/globals/elements/pageHeaderElements";
import { AiOutlineMail } from "react-icons/ai";
import Form from "./Form";
import useScrollTop from "../../hooks/useScrollTop";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  useScrollTop();

  return (
    <>
      <Helmet>
        <title>Mattyus | Get In Touch</title>
      </Helmet>

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
