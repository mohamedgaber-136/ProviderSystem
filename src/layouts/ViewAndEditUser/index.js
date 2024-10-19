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
import MDTypography from "components/MDTypography";
import CustomFormItem from "components/CustomFormItem";
import { useNavigate, useParams } from "react-router-dom";
import { data as B2BUsersData } from "data/B2B_Users";
import { AsfarInitialData } from "data/Asfar_Users";
import { B2CUsersInitialData } from "data/B2C_Users";
import { IndividualInitialData } from "data/Individual_Data";

const ViewAndEditUser = () => {
  const { Id, route } = useParams();
  console.log(route, "routerouteroute");
  const navigate = useNavigate();
  // const [userFormData, setUserFormData] = useState({});
  const initialValues = {
    id: 2654,
    user_name: "Mohamed Gaber",
    branch_name: "Makka",
    company_name: "company",
    region: "Makka",
    country: "United States",
    currency: "EGP",
    contact_number: "a",
    email: "demo@gmail.com",
    balance: "AED 0",
    number_of_bookings: 20,
    monthly_sales: 355,
    total_sales: 593,
    position: "Admin",
    status: "active",

    // id: "",
    // created_at: "",
    // region: "",
    // company_name: "",
    // country: "",
    // email: "",
    // contact_number: "",
    // balance: "",
    // currency: "",
    // number_of_bookings: "",
    // monthly_sales: "",
    // total_sales: "",
    // status: true,
  };

  const fieldsList = [
    {
      label: "Region",
      name: "region",
    },
    {
      label: "Country",
      name: "country",
    },
    {
      label: "Company Name",
      name: "company_name",
    },
    {
      label: "Email",
      name: "email",
    },
    {
      label: "Contact Number",
      name: "contact_number",
    },
    {
      label: "Balance",
      name: "balance",
    },
    {
      label: "Currency",
      name: "currency",
      type: "dropdown",
      options: [
        "EGP",
        "SAR",
        "AED",
        "CHY",
        "EGP",
        "RUS",
        "AED",
        "INR",
        "EGP",
        "INR",
        "AED",
        "GBP",
        "SAR",
        "PZN",
      ],
    },
    {
      label: "No. of Bookings",
      name: "number_of_bookings",
    },
    {
      label: "Monthly Sales",
      name: "monthly_sales",
    },
    {
      label: "Total Sales",
      name: "total_sales",
    },
    // status: true,
  ];

  const getDataList = () => {
    switch (route) {
      case "asfar-users":
        return AsfarInitialData;
      case "b2b-users":
        return B2BUsersData;
      case "b2c-users":
        return B2CUsersInitialData;
      case "individual-users":
        return IndividualInitialData;
    }
  };

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <Formik
          // initialValues={initialValues}
          initialValues={{}}
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
            useEffect(() => {
              const resultData = getDataList();
              const userData = resultData.find(
                ({ id }) => Number(id) === Number(Id)
              );
              setValues(userData ?? {});
              // setUserFormData(userData);

              console.log(userData, "userData");
            }, [Id]);
            return (
              <Container>
                <MDTypography
                  variant="h5"
                  fontWeight="bold"
                  color="dark"
                  textAlign="start"
                >
                  {`#${Id}`}
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
};

export default ViewAndEditUser;
