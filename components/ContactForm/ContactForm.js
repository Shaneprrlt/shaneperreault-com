import React, { useState } from "react";
import { FormWrapper, FormSection, Input, TextArea } from "./Styles";
import Button from "../Button/Button";

const FORM_ACTION = "https://formspree.io/shaneprrlt@gmail.com";
const FORM_METHOD = "post";

const ContactForm = () => {
  return (
    <FormWrapper>
      <form
        name="simple-contact-form"
        acceptCharset="utf-8"
        action={FORM_ACTION}
        method={FORM_METHOD}
      >
        <FormSection>
          <label>First and last name</label>
          <Input name="name" required />
        </FormSection>
        <FormSection>
          <label>Email address</label>
          <Input name="email" type="email" required />
        </FormSection>
        <FormSection>
          <label>Your message</label>
          <TextArea name="message" required />
        </FormSection>
        <FormSection>
          <Button type="submit">Send message</Button>
        </FormSection>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;
