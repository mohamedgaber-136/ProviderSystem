import {
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    MenuItem,
    InputLabel,
    Grid,
  } from "@mui/material";
  import MDBox from "components/MDBox";
  import MDInput from "components/MDInput";
  import MDSelect from "components/MDSelect";
  import PropTypes from "prop-types";
  import React, { useState } from "react";
  import { styled } from "@mui/material/styles";
  import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
  
  export const CheckBoxCompFlights = ({ labelData, type }) => {
    const [show, setShow] = useState(false);
    const selectData = [
      {
        label: "Type",
        values: ["Percentage", "Amount"],
      },
      {
        label: "Sector",
        values: ["Per Booking", "Per Sector"],
      },
      {
        label: "Passenger",
        values: ["Per Passenger", "Per Booking"],
      },
    ];
    const [selectedValue, setSelectedValue] = useState("");
  
    const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
      backgroundColor: theme.palette.common.white,
      padding: "0 8px",
      zIndex: 1,
    }));
  
    return (
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: show ? "space-between" : "start",
          marginBlock: "5px",
          padding: "0",
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label={labelData}
          onChange={(e) => setShow(e.target.checked)}
          sx={{
            display: 'flex', // Apply flex display
            alignItems: 'center', // Align items center
            gap: '10px', // Space between checkbox and label
          }}
        />
        {type === "input" && show ? (
          <>
            <Grid container gap={2} justifyContent="center" alignItems="center">
                <Grid item xs={3}>
                <MDInput
              fullWidth
              type="number"
              label="Mark Up"
              autoComplete="username"
            />
                </Grid>
              {selectData.map((item) => (
                <Grid item key={item.label} xs={2}>
                  <FormControl fullWidth variant="standard">
                    <StyledInputLabel>{item.label}</StyledInputLabel>
                    <MDSelect
                      value={selectedValue}
                      name="FilterType"
                      fullWidth
                      IconComponent={ArrowDropDownIcon}
                    >
                      {item.values.map((value) => (
                        <MenuItem value={value} key={value}>
                          {value}
                        </MenuItem>
                      ))}
                    </MDSelect>
                  </FormControl>
                </Grid>
              ))}
            </Grid>
          </>
        ) : null}
      </Container>
    );
  };
  
  CheckBoxCompFlights.propTypes = {
    labelData: PropTypes.string.isRequired,
    type: PropTypes.any.isRequired,
  };
  