import React from "react";
import { Formik, Field, useField } from "formik";
import * as Yup from "yup";

import { ContactForm, ContactField } from "../styles/elements/contactElements";
import { ButtonMain } from "../styles/elements/buttonElements";

import { BsPerson, BsPencilSquare } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { CustomFade, CustomBounce } from "../styles/globals/animations";
import { FaRegPaperPlane } from "react-icons/fa";

const initial = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const formSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required.")
    .min(2, "Name must be atleast 2 characters."),
  email: Yup.string()
    .required("Email is required.")
    .email("Email is not valid."),
  subject: Yup.string()
    .required("Subject is required.")
    .min(2, "Subject must be atleast 2 characters."),
  message: Yup.string()
    .required("Message is required.")
    .min(6, "Message must be atleast 6 characters."),
});

export default function Form() {
  return (
    <Formik
      initialValues={initial}
      onSubmit={formSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched }) => (
        <CustomFade>
          <ContactForm>
            <CustomFade cascade duration={700} damping={0.4} direction="left">
              <Field
                name="name"
                placeholder="Name..."
                as={ContactField}
                error={errors.name && touched.name ? true : false}
                helperText={errors.name && touched.name ? errors.name : null}
              >
                <BsPerson />
              </Field>

              <Field
                type="email"
                name="email"
                placeholder="Email..."
                as={ContactField}
                error={errors.email && touched.email ? true : false}
                helperText={errors.email && touched.email ? errors.email : null}
              >
                <AiOutlineMail />
              </Field>

              <Field
                name="subject"
                placeholder="Subject..."
                as={ContactField}
                error={errors.subject && touched.subject ? true : false}
                helperText={
                  errors.subject && touched.subject ? errors.subject : null
                }
              >
                <BsPencilSquare />
              </Field>

              <Field
                multiline
                rowsMax={3}
                name="message"
                placeholder="Message..."
                as={ContactField}
                error={errors.message && touched.message ? true : false}
                helperText={
                  errors.message && touched.message ? errors.message : null
                }
              >
                <RiMessage2Line />
              </Field>
            </CustomFade>

            <CustomBounce delay={1200}>
              <ButtonMain type="submit" active={true}>
                SEND
                <FaRegPaperPlane />
              </ButtonMain>
            </CustomBounce>
          </ContactForm>
        </CustomFade>
      )}
    </Formik>
  );
}
