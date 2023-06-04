import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const SignUpForm = () => {
  // State variable for success message
  const [success, setSuccess] = useState("");

  // Function to handle form submission
  const handleSubmit = async (values : any) => {
    // Clear any previous success message
    setSuccess("");

    try {
      // Send a POST request to the API with the values
      const response = await axios.post("http://localhost:3001/organization/sign-up", values);

      // If successful, get the token from the response data
      const token = response.data.token;

      // Store the token in a cookie or local storage
      // You can use a library like js-cookie or next-cookie for this
      // For example: Cookies.set("token", token);

      // Set the success message
      setSuccess("You have signed up successfully!");
    } catch (error) {
      // If there is an error, Formik will handle it automatically
      // You can access the error message in the <ErrorMessage> component
    }
  };

  return (
    <div className="sign-up-form">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{ email: "", name: "", password: "" }}
        onSubmit={handleSubmit}
        validate={(values) => {
          // You can write your own validation logic here
          // For example, you can use a library like yup for this
          // For simplicity, I will just check if the fields are empty
          const errors : any = {};
          if (!values.email) {
            errors.email = "Email is required";
          }
          if (!values.name) {
            errors.name = "Organization Name is required";
          }
          if (!values.password) {
            errors.password = "Password is required";
          }
          return errors;
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Organization Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="p" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="p" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="p" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default SignUpForm;


