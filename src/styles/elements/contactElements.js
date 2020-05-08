import React from "react";
import styled, { css } from "styled-components";
import colors from "../globals/palette";
import { TextField, InputAdornment } from "@material-ui/core";
import { Form } from "formik";

export const ContactBackground = styled.div`
  min-height: calc(100vh - 208px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContactRow = styled.div`
  height: calc(50vh - 104px);
  width: 100%;
  position: absolute;

  ${(props) =>
    props.top
      ? css`
          background: url("/Home_.jpg") no-repeat center;
          background-size: cover;
          top: 0;
        `
      : css`
          top: 50%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        `}
`;

export const ContactForm = styled(Form)`
  z-index: 1;
  height: 330px;
  width: 500px;
  border-radius: 80px;
  background: ${colors.background};
  text-align: center;
  padding: 50px 30px;

  && {
    button {
      margin: 60px;
    }
  }
`;

const CustomTextField = styled(TextField)`
  && {
    width: 85%;
    height: 60px;
    p {
      font-size: 12px;
    }
    * {
      color: #fff;
      margin: 2px 5px 3px 0;
      font-size: 15px;

      ${(props) =>
        props.error &&
        css`
          color: orangered;
        `}
    }
  }

  .MuiInput-underline:before {
    border-bottom: 2px solid #fff;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid ${colors.secondary};
    transition: 0.5s;
  }

  && .MuiInput-underline:after {
    ${(props) =>
      props.error
        ? css`
            border-bottom: 2px solid orangered;
          `
        : css`
            border-bottom: 2px solid ${colors.primary};
          `}
  }
`;

export const ContactField = ({ children, ...props }) => (
  <CustomTextField
    {...props}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">{children}</InputAdornment>
      ),
    }}
  />
);

export const ContactMail = styled.h4`
  text-align: center;
  display: flex;
  align-items: center;
  margin: 50px;
  letter-spacing: 2px;
  & > * {
    margin-right: 7px;
  }
`;
