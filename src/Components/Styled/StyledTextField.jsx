import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
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
        textAlign: "right"
      }
    },
    "& .MuiFormLabel-root": {
      paddingTop: "10px",
      color: theme.palette.secondary.main
    },
    "& .MuiInputBase-input": {
      padding: "24px 10px"
    }
  }
}))(TextField);

export default function CustomTextFields(props) {
  return (
    <StyledTextField id="outlined-required"
      {...props}
      variant="outlined" 
      />
  );
}

