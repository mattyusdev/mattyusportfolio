import React from "react";
import styled, { css } from "styled-components";
import colors from "../globals/palette";
import { TextField, InputAdornment } from "@material-ui/core";
import { Form } from "formik";
import { device } from "../globals/responsive";

export const ContactBackground = styled.div`
  min-height: calc(100vh - 208px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: url("/svg/mattyusbackground_noeffects.svg") no-repeat center;
  background-size: cover;
`;

export const ContactRow = styled.div`
  height: calc(50vh - 104px);
  width: 100%;
  position: absolute;
  z-index: -1;

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
  height: 23rem;
  width: 30rem;
  border-radius: 5rem;
  background: ${colors.background};
  text-align: center;
  padding: 3rem 2rem;

  && {
    button {
      margin: 3.5rem;

      svg {
        margin: 3px;
      }

      @media ${device.tablet} {
        margin: 5rem;
      }
    }
  }

  @media ${device.tablet} {
    height: 28rem;
    width: 37rem;
    border-radius: 6rem;
    padding: 3.5rem 2.25rem;
  }

  @media ${device.mobileM} {
    height: 33rem;
    width: 37rem;
    border-radius: 6rem;
    padding: 3.5rem 2.25rem;
  }

  @media ${device.mobileS} {
    height: 34rem;
    width: 30rem;
    border-radius: 6rem;
    padding: 3.5rem 2.25rem;
  }
`;

const CustomTextField = styled(TextField)`
  && {
    width: 85%;
    height: 4rem;
    p {
      font-size: 1rem;
    }
    * {
      color: #fff;
      margin: 2px 5px 3px 0;
      font-size: 1rem;

      ${(props) =>
        props.error &&
        css`
          color: orangered;
        `}
    }
    @media ${device.tablet} {
      height: 5rem;
      p {
        font-size: 1.3rem;
      }
      * {
        font-size: 1.5rem;
      }
    }

    @media ${device.mobileM} {
      height: 6rem;
    }
  }

  .MuiInput-underline:before {
    border-bottom: 1px solid #fff;
  }

  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid ${colors.secondary};
    transition: 0.5s;
  }

  && .MuiInput-underline:after {
    ${(props) =>
      props.error
        ? css`
            border-bottom: 1px solid orangered;
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

export const ContactErrorMessage = styled.h4`
  color: orangered;
  margin: 0;
`;

export const ContactSent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  svg {
    font-size: 3rem;
    color: ${colors.primary};
  }

  span {
    color: ${colors.secondary};
  }
`;

export const ContactSvgSpinner = styled.object`
  height: 4rem;
`;

export const ContactMail = styled.h4`
  text-align: center;
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin: 4rem;
  letter-spacing: 2px;
  & > * {
    margin-right: 7px;
  }
`;
