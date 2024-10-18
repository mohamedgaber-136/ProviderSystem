import { Box, TextField, Popover } from "@mui/material";
import PropTypes, { object } from "prop-types";
import { DateRange } from "react-date-range";
import { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { enUS } from "date-fns/locale"; // Import the default locale
import Slider from "@mui/material/Slider";
import MDButton from "components/MDButton";

export default function RangeFilter({
  FilterArea,
  filterState,
  setFilterState,
}) {
  const isDateFilter = FilterArea.type === "date_range";
  const isNumericFilter = FilterArea.type === "num_range";
  const [anchorEl, setAnchorEl] = useState(null);
  const [rangeDate, setRangeDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [rangeNumber, setRangeNumber] = useState([
    {
      min: 0,
      max: 0,
    },
  ]);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const openPopup = Boolean(anchorEl);

  // Handle date range change
  const handleSelectDate = (ranges) => {
    setRangeDate([ranges.selection]);
    // Update filter state with the selected date range
    setFilterState({
      ...filterState,
      [FilterArea.id]: {
        type: "date",
        startDate: ranges.selection.startDate.toLocaleDateString(),
        endDate: ranges.selection.endDate.toLocaleDateString(),
      },
    });
  };

  // Handle number range change
  const handleSelectNumber = (event, newValue) => {
    const result = {
      min: 0,
      max: 0,
    };

    if (newValue[0] > newValue[1]) {
      result.min = newValue[1];
      result.max = newValue[0];
    } else {
      result.min = newValue[0];
      result.max = newValue[1];
    }

    setRangeNumber({
      min: object.min,
      max: object.max,
    });
    // Update filter state with the selected date range
    setFilterState({
      ...filterState,
      [FilterArea.id]: {
        type: "number",
        min: object.min,
        max: object.max,
      },
    });
  };

  return (
    <>
      {isDateFilter && (
        <>
          <TextField
            label={FilterArea.inputLabel}
            onClick={handleClick}
            value={`${rangeDate[0].startDate.toLocaleDateString()} - ${rangeDate[0].endDate.toLocaleDateString()}`}
            fullWidth
          />
          <Popover
            open={openPopup}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box>
              <DateRange
                onChange={handleSelectDate}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                ranges={rangeDate}
                locale={enUS} // Set locale to the default `enUS`
              />
            </Box>
            <MDButton color="dark" onClick={handleClose}>
              Close
            </MDButton>
          </Popover>
        </>
        // <DateRangePicker
        //   ranges={[
        //     {
        //       startDate: filterState[filterKey]?.startDate || new Date(),
        //       endDate: filterState[filterKey]?.endDate || new Date(),
        //       key: "selection",
        //     },
        //   ]}
        //   onChange={handleDateChange}
        // />
      )}

      {isNumericFilter && (
        <>
          <TextField
            label={FilterArea.inputLabel}
            onClick={handleClick}
            value={`${rangeNumber.min} - ${rangeNumber.max}`}
            fullWidth
            readOnly // Make it read-only since the user selects via slider
          />
          <Popover
            open={openPopup}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{ padding: 2, width: 300 }}>
              <Slider
                value={Object.values(rangeNumber)}
                onChange={handleSelectNumber}
                min={0} // Adjust min and max based on your data
                max={100} // Adjust max based on your data
              />
            </Box>
          </Popover>
          {/* <TextField
            label={FilterArea.inputLabel}
            onClick={handleClick}
            value={`${rangeNumber.min} - ${rangeNumber.max}`}
            fullWidth
          />
          <Popover
            open={openPopup}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={0}
              onChange={handleSelectNumber}
              valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
            />
        
          </Popover> */}
        </>
      )}

      {/* {isNumericFilter && ( */}

      {/* )} */}
      {/* {isNumericFilter && (
        <div>
          <TextField
            label="Min"
            name="minValue"
            type="number"
            value={filterState[filterKey]?.minValue || ""}
            onChange={handleNumericChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Max"
            name="maxValue"
            type="number"
            value={filterState[filterKey]?.maxValue || ""}
            onChange={handleNumericChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </div>
      )} */}
      {/* <TextField
        label={FilterArea}
        onClick={handleClickDate}
        value={`${range[0].startDate.toLocaleDateString()} - ${range[0].endDate.toLocaleDateString()}`}
        fullWidth
      /> */}
      {/* <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box>
          <DateRange
            onChange={handleSelect}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            locale={enUS} // Set locale to the default `enUS`
          />
        </Box>
      </Popover> */}
    </>
  );
}

RangeFilter.propTypes = {
  FilterArea: PropTypes.object.isRequired,
  filterState: PropTypes.object.isRequired,
  setFilterState: PropTypes.func.isRequired,
};
