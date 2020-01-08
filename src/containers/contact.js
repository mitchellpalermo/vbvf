import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../css/contact.scss";

export default function Contact() {
  const checkBox = {
    margin: "5px;"
  };
  return (
    <div className="contact-container">
      <h3>Have a question? Need prayer?</h3>
      <h1>Contact Us</h1>

      <Form name="contact" data-netlify="true">
        <FormGroup>
          <FormGroup>
            <Input type="text" placeholder="Name"></Input>
          </FormGroup>
          <FormGroup>
            <Input name="email" type="email" placeholder="Email"></Input>
          </FormGroup>
          <FormGroup>
            <Input type="text" placeholder="Phone"></Input>
          </FormGroup>
        </FormGroup>
        <div className="text-center">
          <legend>How should we contact you?</legend>
          <FormGroup className="checkbox-container">
            <Label inline style={checkBox}>
              <Input type="checkbox" />
              Phone
            </Label>
            <Label>
              <Input style={checkBox} type="checkbox" />
              Email
            </Label>
          </FormGroup>
        </div>
        <FormGroup>
          <Input type="textarea" rows="10" cols="50" placeholder="Message" />
        </FormGroup>
        <div className="text-right">
          <Button outline large white>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
