import React from "react";
import PropTypes from "prop-types"; // Add this import
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MDInput from "components/MDInput";
import { Button, Paper } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const FormData = ({ FormInfo }) => {
  // Initial values for the form fields
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
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
          <Form >
            {FormInfo}     
          </Form>
        )}
      </Formik>
  );
};

// Correcting propTypes definition
FormData.propTypes = {
  FormInfo: PropTypes.any.isRequired,
};

export default FormData;
