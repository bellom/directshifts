import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

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
  const [correctData, setCorrectData] = useState("");

  let history = useHistory();

  const callApiSignIn = () => {
    let userData = { email, password };

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
          setCorrectData(true);
          history.push('/home');
          return res.json();
        } else {
          setCorrectData(false);
          return res.text().then((text) => Promise.reject(text));
        }
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callApiSignIn();
  };

  return (
    <div>
      {correctData === false && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            Invalid Email or Password! — Try login again!
          </Alert>
        </Stack>
      )}
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
    </div>
  );
};

export default FormSignIn;
