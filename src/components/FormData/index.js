import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MDInput from "components/MDInput";

const FormData = () => {
  // Initial values for the form fields
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
// Validation Schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  });
  // Submit handler
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form data:", values);
    setSubmitting(false);
    resetForm(); // Reset the form after successful submission
  };

  return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <MDInput type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <MDInput type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <MDInput type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
  );
};

export default FormData;
