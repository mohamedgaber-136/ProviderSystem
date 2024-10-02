import React, { useState } from "react";
import { MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import PropTypes from "prop-types";
import MDSelect from "components/MDSelect"; // Assuming this is your custom Select component
import { styled } from "@mui/material/styles";

const FilterField = ({FilterArea}) => {
  // This Data will send As Props 
// ------------------------------------------
  const [filterType, setFilterType] = useState(FilterArea.data[0]?.label);
  const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    backgroundColor: theme.palette.common.white, // White background
    padding: "0 8px", // Add padding to the label
    zIndex: 1, // Ensure the label appears above other elements
  }));
  return (
    <FormControl fullWidth>
      <StyledInputLabel>{FilterArea.inputLabel}</StyledInputLabel>
      <MDSelect
        value={filterType}
        name="FilterType"
        onChange={(e) => setFilterType(e.target.value)}
        error={false}
        success={true}
        fullWidth
      >
        {FilterArea?.data?.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.value}
          </MenuItem>
        ))}
      </MDSelect>
    </FormControl>
  );
};

FilterField.propTypes = {
  FilterArea:PropTypes.any
};

export default FilterField;
