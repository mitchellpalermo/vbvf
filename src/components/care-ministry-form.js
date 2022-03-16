import { Formik, Field, Form, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import "../css/care-ministry-form.scss";

export default function CareMinistryForm() {
  const [showDependentFields, setShowDependentFields] = useState(false);
  const values = useFormikContext();
  useEffect(() => {
    console.log(values);
    if (values.haveReceivedPriorCounseling === "Y") {
      setShowDependentFields(true);
    }
  });
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          contactOptions: [],
          haveReceivedPriorCounseling: "N",
          counselor: "",
          contactPermission: "No",
        }}
        onSubmit={() => {
          //post to the aws function with form values
        }}
      >
        <Form className="care-ministry-form">
          <label name="fullName">Full Name</label>
          <Field className="text-field" name="fullName" />
          <label name="email">Email Address</label>
          <Field className="text-field" name="email" type="email" />
          <label name="phoneNumber">Phone Number</label>
          <Field className="text-field" name="phoneNumber" type="tel" />

          <label name="contactOptions">Preferred method of contact</label>
          <span role="group" className="checkbox-group" name="contactOptions">
            <label>
              <Field type="checkbox" name="contactOptions" value="Phone" />
              Phone
            </label>
            <label>
              <Field type="checkbox" name="contactOptions" value="Email" />
              Email
            </label>
          </span>
          <span className="previous-counseling">
            Are you currently receiving or have you previously received
            counseling from VBVF?
            <label>
              <Field
                type="checkbox"
                name="haveReceivedPriorCounseling"
                value="Y"
              />
              Yes
            </label>
            {/* the two following fields should be dynamic based on the checkbox being 'Y' */}
            {showDependentFields ? (
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
            ) : null}
          </span>
        </Form>
      </Formik>
    </div>
  );
}
