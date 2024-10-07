import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

// Styled MDSelectRoot
const MDSelectRoot = styled(Select)(({ theme, ownerState }) => {
  const { palette, functions } = theme;
  const { grey } = palette;
  const { pxToRem } = functions;

  return {
    border: `1px solid ${grey[200]}`,
    borderRadius: pxToRem(4),
    padding: `${pxToRem(10)} ${pxToRem(12)}`,
    transition: "border-color 0.3s ease",
    "& .MuiSelect-select": {
      padding: "10px 12px",
    },
    cursor: "pointer", // Set cursor to pointer
    "&:hover": {
      cursor: "pointer", // Pointer cursor on hover
    },
    "& .MuiInputLabel-root.Mui-focused": {
      fontWeight: "bold",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: pxToRem(4),
    },
  };
});

const MDSelect = forwardRef(({ error, success, disabled, ...rest }, ref) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MDSelectRoot
      {...rest}
      ref={ref}
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      IconComponent={open ? ArrowDropUpIcon : ArrowDropDownIcon} // Toggle icon
    />
  );
});

// Typechecking props for MDSelect
MDSelect.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MDSelect;
