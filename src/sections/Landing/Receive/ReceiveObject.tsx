import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },

  text: {
    fontFamily: "IBM Plex Sans",
    fontSize: "16px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.44",
    letterSpacing: "normal",
    color: "#fff",
  },
  title: {
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    fontSize: "14px",
    fontWeight: "normal",
  },
  numberOfDonors: {
    color: "#fff",
  },
  amountOfBitcoin: {
    color: "#ffd113",
  },
  amountOfEther: {
    color: "#13e7ff",
  },
});

export const ReceiveObject = () => {
  const classes = useStyles();
  const [title] = useState("Received");
  const [numberOfDonors] = useState(2);
  const [amountOfBitcoin] = useState(1);
  const [amountOfEther] = useState(2267);
  return (
    <div className={classes.text}>
      <span className={classes.title}>{title}</span>
      <div className={classes.numberOfDonors}>{numberOfDonors} donors</div>
      <div className={classes.amountOfBitcoin}> {amountOfEther} ether</div>
      <div className={classes.amountOfEther}> {amountOfBitcoin} bitcoin</div>
    </div>
  );
};
