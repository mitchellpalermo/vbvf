import React from "react";
import "../css/contact.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <div className="contact">
      <h3>Have a question? Need Prayer?</h3>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          contactOptions: [],
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less.")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less.")
            .required("Required"),
          phoneNumber: Yup.string()
            .matches(phoneRegExp, "Please enter a valid phone number")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          contactOptions: Yup.array().min(
            1,
            "Please Select a Contact Preference"
          ),
          message: Yup.string().min(5, "Please write a little more."),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <Form className="contact" onSubmit={formik.handleSubmit}>
            <Field
              className="contact-text-field"
              name="firstName"
              {...formik.getFieldProps("firstName")}
              placeholder="First Name"
            />
            <ErrorMessage className="contact-error-message" name="firstName" />
            <Field
              className="contact-text-field"
              name="lastName"
              {...formik.getFieldProps("lastName")}
              placeholder="Last Name"
            />
            <ErrorMessage className="contact-error-message" name="lastName" />
            <Field
              className="contact-text-field"
              name="phoneNumber"
              {...formik.getFieldProps("phoneNumber")}
              placeholder="000-000-0000"
            />
            <ErrorMessage
              className="contact-error-message"
              name="phoneNumber"
            />
            <Field
              className="contact-text-field"
              name="email"
              {...formik.getFieldProps("email")}
              placeholder="Email"
            />
            <ErrorMessage className="contact-error-message" name="email" />
            <h3>How should we contact you?</h3>
            <div role="group" className="contact-checkbox-group">
              <label>
                <Field type="checkbox" name="contactOptions" value="Phone" />
                Phone
              </label>
              <label>
                <Field type="checkbox" name="contactOptions" value="Email" />
                Email
              </label>
              <ErrorMessage
                className="contact-error-message"
                name="contactOptions"
              />
            </div>
            <Field
              component="textarea"
              rows="10"
              cols="50"
              name="message"
              {...formik.getFieldProps("message")}
              placeholder="What can we help you with?"
            />
            <ErrorMessage className="contact-error-message" name="message" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <div className="contact-info">
        <h2>Verse by Verse Fellowship Contact Info</h2>
        <div className="contact-info-group">
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
    </div>
  );
};

export default Contact;
