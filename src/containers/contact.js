import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../css/contact.scss";

export default function Contact() {
  const checkBox = {
    margin: "5px;",
  };
  return (
    <div className="contact-container">
      <h3>Have a question? Need prayer?</h3>
      <h1>Contact Us</h1>
      <Form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <FormGroup>
          <FormGroup>
            <Input name="name" type="text" placeholder="Name"></Input>
          </FormGroup>
          <FormGroup>
            <Input name="email" type="email" placeholder="Email"></Input>
          </FormGroup>
          <FormGroup>
            <Input name="phone_number" type="text" placeholder="Phone"></Input>
          </FormGroup>
        </FormGroup>
        <div className="text-center">
          <legend>How should we contact you?</legend>
          <FormGroup className="checkbox-container">
            <Label inline style={checkBox}>
              <Input name="phone_checkbox" type="checkbox" />
              Phone
            </Label>
            <Label>
              <Input name="email_checkbox" type="checkbox" />
              Email
            </Label>
          </FormGroup>
        </div>
        <FormGroup>
          <Input type="textarea" rows="10" cols="50" placeholder="Message" />
        </FormGroup>
        <div className="text-right">
          <Button outline large white type="submit">
            Submit
          </Button>
        </div>
      </Form>

      <div className="contact-info-container">
        <div className="contact-info">
          <h4>Email</h4>
          <p>
            <a href="mailto:info@vbvf.org">info@vbvf.org</a>
          </p>
        </div>
        <div className="contact-info">
          <h4>Mailing Address</h4>
          <p>814 Arion Parkway, #410 San Antonio, TX 78216</p>
        </div>
        <div className="contact-info">
          <h4>Phone Number</h4>
          <p>210-460-7556</p>
        </div>
      </div>
    </div>
  );
}
