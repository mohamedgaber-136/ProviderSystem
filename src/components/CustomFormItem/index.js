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
import { PropTypes } from "prop-types";

const CustomFormItem = ({
  fieldsList,
  values,
  setFieldValue,
  buttonLabel,
  isSubmitting,
}) => {
  return (
    <Form>
      <Paper sx={{ padding: "25px", marginBlock: "50px" }}>
        <Grid container gap={2}>
          {fieldsList.map((fieldItem) => {
            switch (fieldItem.type) {
              case "dropdown":
                return (
                  <>
                    <FormControl fullWidth>
                      <InputLabel id="credit-limit-label-2">
                        {fieldItem.label}
                      </InputLabel>

                      <MDSelect
                        label={fieldItem.label}
                        value={values[fieldItem.name] ?? ""}
                        onChange={(event) => {
                          setFieldValue(fieldItem.name, event.target.value);
                        }} // Update the value on change
                      >
                        {fieldItem.options.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </MDSelect>
                    </FormControl>

                    <Grid
                      key={fieldItem.name}
                      item
                      xs={fieldItem.xs ?? 12}
                      md={fieldItem.md ?? 3}
                    ></Grid>
                  </>
                );

              default:
                return (
                  <Grid item xs={12} key={fieldItem.name}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      id={fieldItem.name}
                      label={fieldItem.label}
                      name={fieldItem.name}
                      type={fieldItem.type}
                      defaultValue={values[fieldItem.name] ?? ""}
                      fullWidth
                      InputProps={{
                        readOnly: fieldItem.disabled,
                      }}
                    />
                    <ErrorMessage
                      name={fieldItem.name}
                      component={({ children }) => (
                        <MDTypography
                          variant="body2"
                          color="error"
                          sx={{ fontSize: "0.875rem" }}
                        >
                          {children}
                        </MDTypography>
                      )}
                    />
                  </Grid>
                );
            }
          })}

          {/* Update Button */}
          <Grid item xs={12} display={"flex"} justifyContent={"center"}>
            <MDButton color="primary" type="submit" disabled={isSubmitting}>
              {buttonLabel}
            </MDButton>
          </Grid>
        </Grid>
      </Paper>
    </Form>
  );
};

CustomFormItem.propTypes = {
  fieldsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};
export default CustomFormItem;
