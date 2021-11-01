import React, { useState, useEffect } from "react";
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


const FormReferral = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [user_id, setUserId] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/current_user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(res => res.json())
      .then((json) => setUserId(json.id))
      .catch((err) => console.error(err));
  });

  const callApiReferral = () => {
    let userData = { email, user_id };

    fetch("http://localhost:3001/referral", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user: userData}),
    })
      .then((res) => {
        if (res.ok) {
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
    callApiReferral();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Referral user by email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <Button variant="contained">
          Cancel
        </Button>
        <Button
          style={{ backgroundColor: "#3f51b5" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Referral 
        </Button>
      </div>
    </form>
  );
};

export default FormReferral;
