import React, { useState, useEffect, useMemo } from "react";
import { MenuItem, FormControl, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import MDSelect from "components/MDSelect";
import { styled } from "@mui/material/styles";

const FilterField = ({ FilterArea, setData, initialData }) => {
  const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    padding: "0 8px",
    zIndex: 1,
  }));

  // Set the default selected value to the first item or "All" if the list is empty
  const [selectedValue, setSelectedValue] = useState( "All"  );

  // Memoize initialData to prevent unnecessary re-renders
  const memoizedInitialData = useMemo(() => initialData, [initialData]);

  useEffect(() => {
    let filteredData = memoizedInitialData;

    // Apply filtering only if a value is selected and inputLabel exists in initialData objects
    if (memoizedInitialData.length > 0) {
      if (selectedValue.toLowerCase() === "all") {
        // If "All" is selected, show all data
        filteredData = memoizedInitialData;
      } else {
        filteredData = memoizedInitialData.filter((item) => {
          const key = FilterArea.inputLabel.trim(); // Remove any spaces around the inputLabel
          return item[key]?.toString().toLowerCase() === selectedValue.toLowerCase();
        });
      }
    }

    // Set filtered data
    setData(filteredData);
  }, [selectedValue, memoizedInitialData, setData, FilterArea.inputLabel]);

  return (
    <FormControl fullWidth>
      <StyledInputLabel>{FilterArea.inputLabel}</StyledInputLabel>
      <MDSelect
        value={selectedValue}
        name="FilterType"
        onChange={(e) => setSelectedValue(e.target.value)}
        fullWidth
      >
        {/* Include an "All" option in the dropdown */}
        <MenuItem value="All">All</MenuItem>
        {FilterArea?.data?.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.value}
          </MenuItem>
        ))}
      </MDSelect>
    </FormControl>
  );
};

// Define PropTypes for the FilterField
FilterField.propTypes = {
  FilterArea: PropTypes.shape({
    inputLabel: PropTypes.string.isRequired, // The key to filter by
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired, // The value to filter on
      })
    ).isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired, // The function to update filtered data
  initialData: PropTypes.arrayOf(PropTypes.object).isRequired, // Initial data to filter
};

export default FilterField;
