import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const StyledTextField = withStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    padding: '15px 15px 15px 0px',
    width: "100%",
    "& .MuiFormControl-root": {
      color: theme.palette.primary.main,
      height: 60,
      "& input": {
        textAlign: "right",
        color: "#fff"
      }
    },
    "& .MuiFormLabel-root": {
      paddingTop: "10px",
      color: theme.palette.primary.main
    },
    "& .MuiInputBase-input": {
      padding: "24px 10px",
      color: '#fff',
      fontFamily: 'Orbitron'
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #b50e3b"
    },
  }
}))(TextField);

export default function CustomTextFields(props) {
  return (
    <StyledTextField id="outlined-required"
      {...props}
    />
  );
}

