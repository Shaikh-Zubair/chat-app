import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormGroup, FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export const Login = () => {
  const classes = useStyles();
  return (
    <div className="justify-content-center align-items-center container">
      <form className={[classes.root, "row"]} noValidate autoComplete="off">
        <FormGroup>
          <FormControlLabel
            control={<TextField id="standard-basic" label="User Name" />}
            label="Enter Your Name"
          />
          <FormControlLabel
            control={<TextField id="standard-basic" label="Password" />}
            label="Enter Your Password"
          />
        </FormGroup>
      </form>
    </div>
  );
};

export default Login;
