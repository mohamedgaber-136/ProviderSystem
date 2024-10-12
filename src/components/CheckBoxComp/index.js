import { Checkbox, Container, FormControlLabel } from "@mui/material";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import PropTypes from "prop-types";
import React, { useState } from "react";

export const CheckBoxComp = ({ labelData, type }) => {
  const [show, setShow] = useState(false);
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
      />
      {type === "input" && show ? (
        <MDBox>
          <MDInput
            fullWidth
            type="number"
            label="Mark Up"
            autoComplete="username"
          />
        </MDBox>
      ) : null}
    </Container>
  );
};

CheckBoxComp.propTypes = {
  labelData: PropTypes.string.isRequired,
  type: PropTypes.any.isRequired,
};
