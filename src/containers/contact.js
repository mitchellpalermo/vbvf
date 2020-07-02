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
          contactByPhone: Yup.bool().oneOf([true]),
          contactByEmail: Yup.bool().oneOf([true]),
          message: Yup.string()
            .min(5, "Please write a little more.")
            .required("Required"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <Form className="contact" onSubmit={formik.handleSubmit}>
            <Field
              name="firstName"
              {...formik.getFieldProps("firstName")}
              placeholder="First Name"
            />
            <ErrorMessage name="firstName" />
            <Field
              name="lastName"
              {...formik.getFieldProps("lastName")}
              placeholder="Last Name"
            />
            <ErrorMessage name="lastName" />
            <Field
              name="phoneNumber"
              {...formik.getFieldProps("phoneNumber")}
              placeholder="000-000-0000"
            />
            <ErrorMessage name="phoneNumber" />
            <Field
              name="email"
              {...formik.getFieldProps("email")}
              placeholder="Email"
            />
            <ErrorMessage name="email" />
            <h3>How should we contact you?</h3>
            <div className="checkbox-group">
              <div className="checkbox">
                <Field type="checkbox" name="contactByPhone" />
                <label htmlFor="contactByEmail">Phone</label>
              </div>
              <div className="checkbox">
                <Field type="checkbox" name="contactByEmail" />
                <label htmlFor="contactByEmail">Email</label>
              </div>
            </div>
            <Field
              component="textarea"
              rows="10"
              cols="50"
              name="message"
              {...formik.getFieldProps("message")}
              placeholder="What can we help you with?"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
