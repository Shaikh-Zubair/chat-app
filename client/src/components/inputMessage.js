import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  divClass: {
    justifyContent: "center",
    alignItems: "center"
  },
  root: {
    position: "fixed",
    bottom: 0,
    margin: 10,
    width: "80%",
    flexDirection: "row"
  },
  textField: {
    marginRight: 5
  },
  title: {
    flexGrow: 1
  }
}));

const InputMessage = ({ onChange, placeholder, value, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.divClass}>
      <AppBar
        edge="start"
        color="transparent"
        position="static"
        className={classes.root}
      >
        <TextField
          onChange={onChange}
          className={classes.textField}
          value={value}
          id="standard-name"
          fullWidth
          variant="outlined"
          placeholder={placeholder}
        />
        <Fab color="default" aria-label="arrow" onClick={onClick}>
          <AddIcon />
        </Fab>
      </AppBar>
    </div>
  );
};

export default InputMessage;
