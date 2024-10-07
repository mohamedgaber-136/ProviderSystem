import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
import { MenuItem, FormControl, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from "@mui/material/styles";
import MDSelect from "components/MDSelect";

const FilterField = ({ FilterArea, setData, initialData ,data}) => {
  const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    padding: "0 8px",
    zIndex: 1,
  }));
  const [selectedValue, setSelectedValue] = useState("All");

  const memoizedInitialData = useMemo(() => initialData, [initialData]);

  const updateData = useCallback(
    (data) => setData(data),
    [setData]
  );

  useEffect(() => {
    let currentData = memoizedInitialData;

    if (selectedValue.toLowerCase() !== "all") {
      currentData = currentData.filter((item) => {
        const key = FilterArea.inputLabel.trim();
        return item[key]?.toString().toLowerCase() === selectedValue.toLowerCase();
      });
    }
    updateData(currentData);

  }, [selectedValue, memoizedInitialData, updateData, FilterArea.inputLabel]);

  return (
    <FormControl fullWidth  variant="standard">
      <StyledInputLabel>{FilterArea.inputLabel}</StyledInputLabel>
      <MDSelect
        value={selectedValue}
        name="FilterType"
        onChange={(e) => setSelectedValue(e.target.value)}
        fullWidth
        IconComponent={ArrowDropDownIcon}
      >
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

FilterField.propTypes = {
  FilterArea: PropTypes.shape({
    inputLabel: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
  initialData: PropTypes.arrayOf(PropTypes.object).isRequired,
  data:PropTypes.any,
};

export default memo(FilterField);
