import FormData from "components/FormData";

import React, { useEffect, useState } from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDSelect from "components/MDSelect";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "data/B2B_Users";
import CustomFormItem from "components/CustomFormItem";

function AddNewUser() {
  const navigate = useNavigate();
  // const [userFormData, setUserFormData] = useState({});
  const initialValues = {
    id: "",
    branch_name: "",
    domain: "",
    user_name: "",
    position: "",
    currency: "",
    contact_number: "",
    email: "",
    title: "",
    password: "",
  };

  const fieldsList = [
    {
      label: "Branch Name",
      name: "branch_name",
      type: "dropDown",
      options: [
        "UAE",
        " Uzbekistan",
        " China",
        " Brazil",
        " Oman",
        " Egypt",
        " KSA",
        " Netherlands",
        " Malaysia",
        " Indonesia & Philippines",
      ],
    },
    {
      label: "Domain",
      name: "domain",
      type: "dropdown",
      options: [".com", ".net", ".cc", ".ch", ".me", ".eu"],
    },
    {
      label: "User Name",
      name: "user_name",
    },
    {
      label: "Position",
      name: "position",
      type: "dropdown",
      options: [
        "Admin",
        "Developer",
        "Marketing Team",
        "Ticketing staff",
        "Sales Manager",
        "Sub Admin",
        "Reservation Stuff",
        "Agent Manager",
      ],
    },
    {
      label: "Currency",
      name: "currency",
      type: "dropdown",
      options: [
        "AED",
        "USD",
        "SAR",
        "GBP",
        "EUR",
        "QAR",
        "BHD",
        "OMR",
        "KWD",
        "EGP",
        "INR",
        "PKR",
        "IDR",
        "MYR",
        "PHP",
        "CNY",
        "BRL",
      ],
    },
    {
      label: "Contact Number",
      name: "contact_number",
    },
    {
      label: "Email",
      name: "email",
    },
    {
      label: "Title",
      name: "title",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ];

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values, "Submitted values");
            // show snackbar
            // update data in database
            navigate(-1);
            // saveDataToDatabase(values);
            setSubmitting(false); // To indicate form submission is done
          }}
        >
          {({ isSubmitting, values, setValues, setFieldValue }) => {
            return (
              <Container>
                <MDTypography
                  variant="h5"
                  fontWeight="bold"
                  color="dark"
                  textAlign="start"
                >
                  {`#ID`}
                </MDTypography>
                <Divider />
                <CustomFormItem
                  fieldsList={fieldsList}
                  values={values}
                  setFieldValue={setFieldValue}
                  isSubmitting={isSubmitting}
                  buttonLabel={"Add User"}
                />
              </Container>
            );
          }}
        </Formik>
      </DashboardLayout>
    </>
  );
}
export default AddNewUser;
