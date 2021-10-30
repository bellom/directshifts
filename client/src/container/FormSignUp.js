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


const FormSignUp = ({ handleClose }) => {
  const classes = useStyles();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const callApiSignUp = () => {
    let userData = { first_name, last_name, email, password };

    fetch("http://localhost:3001/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user: userData}),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res.headers.get("Authorization"));
          localStorage.setItem("token", res.headers.get("Authorization"));
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callApiSignUp();
    handleClose();
    history.push('/home');
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
      />
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
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          style={{ backgroundColor: "#18bdb3" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Signup
        </Button>
      </div>
    </form>
  );
};

export default FormSignUp;
