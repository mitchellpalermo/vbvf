import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import "../css/care-ministry-form.scss";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Button from "./button";

export default function CareMinistryForm({ closeFunc }) {
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
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  return (
    <div>
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
            fullName: "",
            phoneNumber: "",
            email: "",
            contactOptions: [],
            haveReceivedPriorCounseling: false,
            counselor: "",
            contactPermission: "No",
          }}
          validationSchema={Yup.object({
            fullName: Yup.string()
              .max(20, "Must be 20 characters or less.")
              .required("Name Required"),
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
            contactOptions: Yup.array().min(
              1,
              "Please Select a Contact Preference"
            ),
          })}
          onSubmit={(values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "care-ministry-contact", ...values }),
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
        >
          {({ values }) => (
            <Form className="care-ministry-form" method="POST">
              <Field
                type="hidden"
                name="form-name"
                value="care-ministry-contact"
              />

              <h2>Contact Care Ministries</h2>

              <label name="fullName">Full Name</label>
              <Field className="text-field" name="fullName" autoFocus />
              <ErrorMessage
                component="div"
                className="contact-error-message"
                name="fullName"
              />
              <label name="email">Email Address</label>
              <Field className="text-field" name="email" type="email" />
              <ErrorMessage
                component="div"
                className="contact-error-message"
                name="email"
              />
              <label name="phoneNumber">Phone Number</label>
              <Field className="text-field" name="phoneNumber" type="tel" />
              <ErrorMessage
                component="div"
                className="contact-error-message"
                name="phoneNumber"
              />
              <label name="contactOptions">Preferred method of contact</label>
              <span
                role="group"
                className="checkbox-group"
                name="contactOptions"
              >
                <label>
                  <Field type="checkbox" name="contactOptions" value="Phone" />
                  Phone
                </label>
                <label>
                  <Field type="checkbox" name="contactOptions" value="Email" />
                  Email
                </label>
              </span>
              <ErrorMessage
                component="div"
                className="contact-error-message"
                name="contactOptions"
              />
              <span className="previous-counseling">
                Are you currently receiving or have you previously received
                counseling from VBVF?
                <label>
                  <Field type="checkbox" name="haveReceivedPriorCounseling" />
                  Yes
                </label>
                {/* the two following fields should be dynamic based on the checkbox being 'Y' */}
                {values.haveReceivedPriorCounseling && (
                  <>
                    <label>
                      If yes, with whom?
                      <Field
                        className="text-field"
                        name="counselor"
                        placeholder="Enter their name"
                      />
                    </label>
                    <label>
                      May we have your permission to contact that person?
                      <span role="group" className="checkbox-group">
                        <label>
                          <Field
                            type="checkbox"
                            name="contactPermission"
                            value="Yes"
                          />
                          Yes
                        </label>
                        <label>
                          <Field
                            type="checkbox"
                            name="contactPermission"
                            value="No"
                          />
                          No
                        </label>
                      </span>
                    </label>
                  </>
                )}
              </span>

              <Button
                size="medium"
                type="submit"
                title="Submit"
                color="green"
              />
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
