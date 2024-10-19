import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Flights } from "layouts/ViewBookings/components/Flights";
import { Hotels } from "layouts/ViewBookings/components/Hotels";
import { Cars } from "layouts/ViewBookings/components/Car";
import { Insurance } from "layouts/ViewBookings/components/Insurance";
import { Transfer } from "layouts/ViewBookings/components/Transfer";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsComp() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTab-root": {
              backgroundColor: "transparent", // Default background for inactive tabs
              color: "text.primary", // Default text color
              transition: "background-color 0.3s ease", // Smooth transition for background color
            },
            "& .Mui-selected": {
              backgroundColor: "#1c3c5a", // Background color for the active tab
              color: "white !important", // Optional: Change text color for active tab
            },
          }}
        >
          <Tab label="Flights" {...a11yProps(0)} />
          <Tab label="Hotels" {...a11yProps(1)} />
          <Tab label="Car" {...a11yProps(2)} />
          <Tab label="Insurance" {...a11yProps(3)} />
          <Tab label="Transfer" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Flights />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Hotels />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Cars />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Insurance />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Transfer />
      </CustomTabPanel>
    </Box>
  );
}
