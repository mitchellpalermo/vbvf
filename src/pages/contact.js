import React, { useState } from "react";
import "../css/contact.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  // encodes the form output as something netlify can understand
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <div className="contact">
      <h3>Have a question? Need Prayer?</h3>
      <h1>Contact Us</h1>
      {/* renders confirmation component when form is submitted */}
      {isFormSubmitted ? (
        <div className="contact-submitted">
          <div className="contact-submitted-check-container">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="contact-submitted-check-container-item"
            >
              <motion.path
                d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 1, ease: [1, 0, 0.8, 1] },
                }}
              />
            </motion.svg>
          </div>
          <p>Thanks for reaching out! We'll be in touch shortly.</p>
        </div>
      ) : (
        <Formik
          initialValues={{
            "bot-field": "",
            "form-name": "contact",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            contactOptions: [],
            localToSa: "",
          }}
          onSubmit={(values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", ...values }),
            })
              .then(() => {
                setIsFormSubmitted(true);
                actions.resetForm();
              })
              .catch(() => {
                console.error();
              })
              .finally(() => actions.setSubmitting(false));
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less.")
              .required("First Name Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less.")
              .required("Last Name Required"),
            //only required when contact options preference contains phone
            phoneNumber: Yup.string().when("contactOptions", {
              is: (val) => val.includes("Phone") === true,
              then: Yup.string()
                .required("Phone Number Required")
                .matches(phoneRegExp, "Please enter a valid phone number"),
              otherwise: Yup.string().matches(
                phoneRegExp,
                "Please enter a valid phone number"
              ),
            }),
            //only required when contact options preference contains email
            email: Yup.string().when("contactOptions", {
              is: (val) => val.includes("Email") === true,
              then: Yup.string()
                .email("Invalid email address")
                .required("Email Address Required"),
              otherwise: Yup.string().email("Invalid email address"),
            }),
            localToSa: Yup.string().required(
              "Please let us know if you're located in San Antonio."
            ),
            contactOptions: Yup.array().min(
              1,
              "Please Select a Contact Preference"
            ),
            message: Yup.string()
              .min(5, "Please write a little more.")
              .required("Please type your question here."),
          })}
        >
          {(formik) => (
            <Form className="contact" method="POST">
              <Field type="hidden" name="bot-field" />
              <Field type="hidden" name="form-name" />
              <Field
                className="contact-text-field"
                name="firstName"
                {...formik.getFieldProps("firstName")}
                placeholder="First Name"
              />
              <ErrorMessage
                component="div"
                className="contact-error-message"
                name="firstName"
              />
              <Field
                className="contact-text-field"
                name="lastName"
                {...formik.getFieldProps("lastName")}
                placeholder="Last Name"
              />
              <ErrorMessage
                component="div"
                className="contact-error-message"
                name="lastName"
              />
              <Field
                className="contact-text-field"
                name="phoneNumber"
                {...formik.getFieldProps("phoneNumber")}
                placeholder="000-000-0000"
              />
              <ErrorMessage
                component="div"
                name="phoneNumber"
                className="contact-error-message"
              ></ErrorMessage>
              <Field
                className="contact-text-field"
                name="email"
                {...formik.getFieldProps("email")}
                placeholder="Email"
              />
              <ErrorMessage
                component="div"
                className="contact-error-message"
                name="email"
              />
              <h4>Are you located in the San Antonio area?</h4>
              <div role="group" className="contact-checkbox-group">
                <label>
                  <Field type="radio" name="localToSa" value="Yes" />
                  Yes
                </label>
                <label>
                  <Field type="radio" name="localToSa" value="No" />
                  No
                </label>
              </div>
              <ErrorMessage
                name="localToSa"
                component="div"
                className="contact-error-message"
              />
              <h4>How should we contact you?</h4>
              <div role="group" className="contact-checkbox-group">
                <label>
                  <Field type="checkbox" name="contactOptions" value="Phone" />
                  Phone
                </label>
                <label>
                  <Field type="checkbox" name="contactOptions" value="Email" />
                  Email
                </label>
              </div>
              <ErrorMessage
                component="div"
                className="contact-error-message"
                name="contactOptions"
              />
              <Field
                className="contact-text-area"
                component="textarea"
                rows="10"
                cols="50"
                name="message"
                {...formik.getFieldProps("message")}
                placeholder="What can we help you with?"
              />
              <ErrorMessage
                component="div"
                className="contact-error-message"
                name="message"
              />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      )}

      <div className="contact-info">
        <h2>
          <span className="highlight">Verse by Verse Fellowship</span> Contact
          Info
        </h2>
        <div className="contact-info-block-group">
          <div className="contact-info-block">
            <h4>Email</h4>
            <p>
              <a href="mailto:info@vbvf.org">info@vbvf.org</a>
            </p>
          </div>
          <div className="contact-info-block">
            <h4>Mailing Address</h4>
            <p>814 Arion Parkway, #410 San Antonio, TX 78216</p>
          </div>
          <div className="contact-info-block">
            <h4>Phone Number</h4>
            <p>210-460-7556</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
