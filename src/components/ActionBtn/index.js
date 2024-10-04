import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

// Define the ActionButton component
const ActionButton = ({ label, onClick, variant = "contained",  icon: Icon }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      startIcon={Icon ? <Icon /> : null}
    >
      {label}
    </Button>
  );
};

// Define PropTypes for the ActionButton
ActionButton.propTypes = {
  label: PropTypes.string.isRequired, // Button label
  onClick: PropTypes.func.isRequired, // Function to handle click
  variant: PropTypes.oneOf(["text", "outlined", "contained"]), // Button variant
  icon: PropTypes.elementType, // Optional icon component
};

export default ActionButton;
