import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HomePage = () => {
  const [redirectTo, setRedirectTo] = useState("");

  let history = useHistory();

  const callApiLogout = () => {
    fetch("http://localhost:3001/logout", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((json) => Promise.reject(json));
        }
      })
      .then((json) => {
        console.dir(json);
      })
      .catch((err) => console.error(err));
    history.push("/");
  };

  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:3001/current_user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        setRedirectTo(true);
      }
    })
    .then((json) => console.dir(json))
    .catch((err) => console.error(err));
  });
  
  if(redirectTo){
    return <Redirect to="/" />
  }
  
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          DirectShifts
        </Typography>
        <Button color="inherit" onClick={callApiLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default HomePage;
