// Material Dashboard 2 React example components
import FormData from "components/FormData";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid,
  Divider,
  Paper,
  Container,
  FormGroup,
} from "@mui/material";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useState } from "react";
import { CheckBoxComp } from "components/CheckBoxComp";
function UpdatePrivileges() {
  const [flighApi, setFlighApi] = useState(true);
  const UpdatePrivilegeBoxes = [
    {
      type: "input",
      content: "Visa",
    },
    {
      type: "input",
      content: "Yachts",
    },
    {
      type: "input",
      content: "Transfer",
    },
    {
      type: "input",
      content: "SubUser",
    },
    {
      type: "input",
      content: "Travel Insurance",
    },
    {
      type: "input",
      content: "Car",
    },
  ];
  const LCCBoxes = [
    {
      type: "input",
      content: "Pegasus",
    },
    {
      type: "input",
      content: "AirArabia",
    },
    {
      type: "input",
      content: "FlyDubai",
    },
    {
      type: "input",
      content: "AlJazeera",
    },
    {
      type: "input",
      content: "Goair",
    },
    {
      type: "input",
      content: "AirIndiaExpress ",
    },
    {
      type: "input",
      content: "SalamAir",
    },
    {
      type: "input",
      content: "AirArabia_Maroc",
    },
    {
      type: "input",
      content: "AirArabia_Egypt",
    },
    {
      type: "input",
      content: "AirArabia_Jordan",
    },
    {
      type: "input",
      content: "AirArabia_AbuDhabi",
    },
    {
      type: "input",
      content: "SpiceJet",
    },
    {
      type: "input",
      content: "Flynas",
    },
  ];
  const NDCBoxes = [
    {
      type: "input",
      content: "American Airlines",
    },
    {
      type: "input",
      content: "British Airways ",
    },
    {
      type: "input",
      content: "Qatar Airways ",
    },
    {
      type: "input",
      content: "Emirates Airline",
    },
  ];
  const GDSBoxes = [
    {
      type: "input",
      content: "Galileo",
    },
    {
      type: "input",
      content: "GalileoCache ",
    },
    {
      type: "input",
      content: "Saber ",
    },
    {
      type: "input",
      content: "Amadeus",
    },
    {
      type: "input",
      content: "Asfar Inventory",
    },
    {
      type: "input",
      content: "Sirena",
    },
  ];
  const UpdatePrivilege = (
    <Container>
      <Paper sx={{ padding: "25px", marginBlock: "50px" }}>
        <Grid container gap={2}>
          <MDTypography
            variant="h5"
            fontWeight="bold"
            color="dark"
            textAlign="start"
          >
            UpdatePrivileges{" "}
          </MDTypography>
          <Divider />

          <Grid item xs={12}>
            <MDBox mb={2}>
              <FormControl component="fieldset">
                <FormGroup>
                <CheckBoxComp
                      labelData={'Flights'}
                      type={null}
                    />
                    <CheckBoxComp
                      labelData={'Hotels'}
                      type={null}
                    />
                  {UpdatePrivilegeBoxes.map((item) => (
                    <CheckBoxComp
                      labelData={item.content}
                      key={item.content}
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
  const FlightApi = (
    <Container>
      <Paper sx={{ padding: "25px", marginBlock: "50px" }}>
        <Grid container gap={2}>
          <MDTypography
            variant="h5"
            fontWeight="bold"
            color="dark"
            textAlign="start"
          >
            Flight APIs{" "}
          </MDTypography>
          <Divider />

          <Grid item xs={12}>
            <MDBox mb={2}>
              <MDTypography
                variant="h6"
                fontWeight="bold"
                color="dark"
                textAlign="center"
              >
                LCC APIs{" "}
              </MDTypography>
              <Divider />
              <FormControl component="fieldset">
                <FormGroup>
                  <Grid container justifyContent={"center"}>
                    {LCCBoxes.map((item, index) => (
                      <Grid
                        item
                        xs={12}
                        md={index === LCCBoxes.length - 1 ? 10 : 5}
                        key={item.content}
                      >
                        <CheckBoxComp
                          labelData={item.content}
                          type={item.type}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </FormGroup>
              </FormControl>
            </MDBox>
          </Grid>
          <Grid item xs={12}>
            <MDBox mb={2}>
              <MDTypography
                variant="h6"
                fontWeight="bold"
                color="dark"
                textAlign="center"
              >
                NDC APIs{" "}
              </MDTypography>
              <Divider />
              <FormControl component="fieldset" sx={{ width: "100%" }}>
                <FormGroup>
                  <Grid container justifyContent={"center"}>
                    {NDCBoxes.map((item, index) => (
                      <Grid item xs={12} md={5} key={item.content}>
                        <CheckBoxComp
                          labelData={item.content}
                          type={item.type}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </FormGroup>
              </FormControl>
            </MDBox>
          </Grid>
          <Grid item xs={12}>
            <MDBox mb={2}>
              <MDTypography
                variant="h6"
                fontWeight="bold"
                color="dark"
                textAlign="center"
              >
                GDS APIs{" "}
              </MDTypography>
              <Divider />
              <FormControl component="fieldset" sx={{ width: "100%" }}>
                <FormGroup>
                  <Grid container justifyContent={"center"}>
                    {GDSBoxes.map((item, index) => (
                      <Grid item xs={12} md={5} key={item.content}>
                        <CheckBoxComp
                          labelData={item.content}
                          type={item.type}
                        />
                      </Grid>
                    ))}
                  </Grid>
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
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <FormData FormInfo={UpdatePrivilege} />
      {flighApi ? <FormData FormInfo={FlightApi} /> : null}
    </DashboardLayout>
  );
}
export default UpdatePrivileges;
