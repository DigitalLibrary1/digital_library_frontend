import React, { useState } from "react";
import {Formik, Field, Form} from 'formik';

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="SignInForm-Organization">
      <h1>Organization Sign In</h1>
      <Formik
        initialValues={{orgEmail: "", password: ""}}
        onSubmit={() => console.log("Organization Sign In")}
      >
        <Form>
          <Field name="orgEmail" type="email" placeholder="Organization Email"/>
          <Field name="password" type="password" placeholder="Password"/>
          <button type="submit">Sign In</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignIn;
