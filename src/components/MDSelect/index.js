import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom styles for MDSelect
const MDSelect = forwardRef(({ error, success, disabled, ...rest }, ref) => (
  <MDSelectRoot {...rest} ref={ref} />
));



// Typechecking props for MDSelect
MDSelect.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MDSelect;

// Styled MDSelectRoot
export const MDSelectRoot = styled(Select)(({ theme, ownerState }) => {
  const { palette, functions } = theme;

  const { grey, transparent, error: colorError, success: colorSuccess } = palette;
  const { pxToRem } = functions;

 

 

  // Apply the styles similar to Input
  return {
    border: `1px solid ${grey[200]}`,
    borderRadius: pxToRem(4),
    padding: `${pxToRem(10)} ${pxToRem(12)}`,
    transition: "border-color 0.3s ease",
    "& .MuiSelect-select": {
      padding: "10px 12px",
    },
  

    // Apply bold label on focus
    "& .MuiInputLabel-root.Mui-focused": {
      fontWeight: "bold",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: pxToRem(4),
    },
  };
});
