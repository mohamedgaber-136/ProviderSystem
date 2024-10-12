// Material Dashboard 2 React example components
import FormData from "components/FormData";
import {
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Grid,
  Divider,
  Paper,
  Container,
  Alert,
  FormGroup,
} from "@mui/material";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDSelect from "components/MDSelect";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import { CheckBoxComp } from "components/CheckBoxComp";
function PaymentOption() {
  const checkBoxes = [
    {
      type: null,
      content: "Cash",
    },
    {
      type: null,
      content: "Bank Transfer",
    },
    {
      type: null,
      content: "Payment Link",
    },
    {
      type: null,
      content: "GooglePay",
    },
    {
      type: null,
      content: "SamsungPay",
    },
    {
      type: null,
      content: "Tabby",
    },
    {
      type: null,
      content: "Deposit",
    },
    {
      type: null,
      content: "PayBy",
    },
    {
      type: null,
      content: "Hold Booking",
    },
    {
      type: null,
      content: "Credit/Debit Card",
    },
  ];
  const Inputs = [
    {
      type: "text",
      label: "Card Service Charge (%)",
    },
    {
      type: "text",
      label: "Void Charge Per Ticket (AED)",
    },
  ];
  const PaymentOptions = (
    <Container>
      <Paper sx={{ padding: "25px", marginBlock: "50px" }}>
        <Grid container gap={2}>
          <MDTypography
            variant="h5"
            fontWeight="bold"
            color="dark"
            textAlign="start"
          >
            Advanced Credit Options
          </MDTypography>
          <Divider />
          {Inputs.map((input) => (
            <Grid item xs={12} key={input}>
              <MDBox mb={2}>
                <MDInput
                  fullWidth
                  type={input.type}
                  label={input.label}
                  autoComplete="username"
                />
              </MDBox>
            </Grid>
          ))}
          {/* Payment Options Checkboxes */}
          <Grid item xs={12}>
            <MDBox mb={2}>
              <FormControl component="fieldset">
                <MDTypography
                  variant="h6"
                  fontWeight="bold"
                  color="dark"
                  textAlign="start"
                >
                  Payment Options
                </MDTypography>
                <Divider />
                <FormGroup>
                  {checkBoxes.map((item) => (
                    <CheckBoxComp
                      labelData={item.content}
                      key={item}
                      type={item.type}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </MDBox>
          </Grid>
        </Grid>

        {/* Buttons */}
        <MDBox sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <MDButton color="dark">Go Back</MDButton>
          <MDButton color="primary">Update</MDButton>
        </MDBox>
      </Paper>
    </Container>
  );
  const DepoistPatment = (
    <Container>
      {/* Second Paper */}
      <Paper sx={{ padding: "25px" }}>
        <Grid container gap={2}>
          <MDTypography
            variant="h5"
            fontWeight="bold"
            color="dark"
            textAlign="start"
          >
            Deposit Payment Type
          </MDTypography>
          <Divider />

          {/* Select field for Advance Credit Limit */}
          <Grid item xs={12}>
            <MDBox mb={2}>
              <Alert severity="info">
                {" "}
                <b>Note:</b> If you select Per API Accounting then if the API
                (Airline) has deposit then your booking will be confirmed.
              </Alert>
              <Divider />
              <FormControl fullWidth>
                <InputLabel id="credit-limit-label-2">
                  Deposit Accounting Type
                </InputLabel>

                <MDSelect
                  labelId="credit-limit-label-2"
                  label="Deposit Accounting Type"
                >
                  <MenuItem value={"Single Balance"}>Single Balance</MenuItem>
                  <MenuItem value={"Per Api Balance"}>Per Api Balance</MenuItem>
                </MDSelect>
              </FormControl>
            </MDBox>
            <Divider />
          </Grid>
        </Grid>

        {/* Buttons */}
        <MDBox sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <MDButton color="dark">Go Back</MDButton>
          <MDButton color="primary">Update</MDButton>
        </MDBox>
      </Paper>
    </Container>
  );
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <FormData FormInfo={PaymentOptions} />
      <FormData FormInfo={DepoistPatment} />
    </DashboardLayout>
  );
}
export default PaymentOption;
