import React, { useState, useEffect, useCallback, memo } from "react";
import { MenuItem, FormControl, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from "@mui/material/styles";
import MDSelect from "components/MDSelect";

const FilterField = ({ FilterArea, setData, data }) => { // Keep 'data' prop as the initial data for filtering
  const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    padding: "0 8px",
    zIndex: 1,
  }));

  const [selectedValue, setSelectedValue] = useState("All");

  const updateData = useCallback(
    (filteredData) => {
      setData(filteredData); // Update the parent state with filtered data
    },
    [setData]
  );

  useEffect(() => {
    let currentData = data; // Start filtering from the data prop

    // Log current data for debugging
    console.log("Filtering data based on:", selectedValue);

    if (selectedValue !== "All") {
      currentData = data.filter((item) => {
        const key = FilterArea.inputLabel.trim();

        if (key === "status") {
          // Convert selectedValue to a boolean if it's for "status"
          const booleanValue = selectedValue === "true";
          return item[key] === booleanValue; // Filter by boolean status
        }

        // For other fields, perform a string comparison
        return item[key]?.toString().toLowerCase() === selectedValue.toString().toLowerCase();
      });
    }

    updateData(currentData); // Update the filtered data
  }, [selectedValue, data, FilterArea.inputLabel, updateData]); // Include 'data' in the dependency array

  return (
    <FormControl fullWidth variant="standard">
      <StyledInputLabel>{FilterArea.inputLabel}</StyledInputLabel>
      <MDSelect
        value={selectedValue}
        name="FilterType"
        onChange={(e) => setSelectedValue(e.target.value)} // Set selected value
        fullWidth
        IconComponent={ArrowDropDownIcon}
      >
        <MenuItem value="All">All</MenuItem>
        {FilterArea?.data?.map((item) => (
          <MenuItem key={item.value.toString()} value={item.value.toString()}>
            {typeof item.value === "boolean" 
              ? item.value ? "active" : "de-active" 
              : item.value}
          </MenuItem>
        ))}
      </MDSelect>
    </FormControl>
  );
};

FilterField.propTypes = {
  FilterArea: PropTypes.shape({
    inputLabel: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
      })
    ).isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired, // Updated to reflect 'data' as initial data
};

export default memo(FilterField);
