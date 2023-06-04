import React from "react";
import { Formik, Field, Form } from "formik";

function SignUpForm() {
  return (
    <div id="SignUpForm-Organization">
      <h1>Organization Sign Up</h1>
      <Formik
        initialValues={{ orgName: "", orgEmail: "", password: "" }}
        onSubmit={(values) => console.log("Form submitted", values.orgName)}
      >
        <Form>
          <Field name="orgName" type="text" placeholder="Organization name" />
          <Field name="orgEmail" type="email" placeholder="Organization email" />
          <Field name="password" type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUpForm;
