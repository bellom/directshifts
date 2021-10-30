import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const FormSignIn = ({ handleCloseIn }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const callApiSignIn = () => {
    let userData = { email, password }

    fetch("http://localhost:3001/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userData }),
    })
      .then((res) => {
        if (res.ok) {
          localStorage.setItem("token", res.headers.get("Authorization"));
          return res.json();
        } else {
          return res.text().then((text) => Promise.reject(text));
        }
      })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callApiSignIn();
    handleCloseIn();
    history.push('/home');
    // With wrong password, I need to stop user from redirecting
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleCloseIn}>
          Cancel
        </Button>
        <Button
          style={{ backgroundColor: "#1c8ee1" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default FormSignIn;
