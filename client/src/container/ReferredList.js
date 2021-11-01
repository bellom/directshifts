import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

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

const ReferredList = () => {
  const classes = useStyles();
  const [currentUserId, setCurrentUserId] = useState("");
  const [referredList, setReferredList] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/referrals", { method: "get" })
      .then((res) => res.json())
      .then((json) => setReferredList(json))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/current_user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((json) => setCurrentUserId(json.id))
      .catch((err) => console.error(err));
  });

  return (
    <div className={classes.root}>
      List of referred users
      <ul>
        {Object.values(referredList)
          .filter((e) => e.user_id === currentUserId)
          .map((i) => (
            <li key={i.id}>{i.email}</li>
          ))}
      </ul>
    </div>
  );
};

export default ReferredList;
