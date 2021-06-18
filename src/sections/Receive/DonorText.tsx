import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    paddingTop: "100px",
    maxWidth: "100%",
    padding: "14px",
    width: "80%",
  },
  backgroundTitle: {
    fontFamily: "Cabin",
    fontSize: "28px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.64",
    letterSpacing: "normal",
    color: "#000",
    paddingBottom: "30px",
  },
  backgroundText: {
    fontFamily: "IBM Plex Sans",
    fontSize: "18px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.55",
    letterSpacing: "normal",
    color: "#000",
    paddingBottom: "30px",
  },
  donationQueryButton: {
    marginTop: "25px",
    width: "195px",
    height: "50px",
    borderRadius: "5px",
    backgroundColor: "#0068ea",
  },
  donationQueryButtonText: {
    fontFamily: "Cabin",
    fontSize: "14px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "1.17px",
    textAlign: "center",
    color: "#ffffff",
  },
});
export const DonorText = () => {
  const classes = useStyles();
  const [backgroundTitle] = useState("Our donors");
  const [donorText1] = useState(
    "Investing in open source technology to benefit children around the world wouldn’t be possible without our generous donors."
  );
  const [donorText2] = useState(
    "We would like to thank our donors, the Ethereum Foundation, Animoca Brands and Huobi Charity for making a donation to the CryptoFund, and to Chainlink for their technical support. If you are interested in donating in either bitcoin or ether, please contact us."
  );

  return (
    <div className={classes.root}>
      <div className={classes.backgroundTitle}>{backgroundTitle}</div>
      <div className={classes.backgroundText}>{donorText1}</div>
      <div className={classes.backgroundText}>
        {donorText2}
      </div>

      <Button
        href="mailto:blockchain@unicef.org"
        className={classes.donationQueryButton}
      >
        <span className={classes.donationQueryButtonText}>Donation Query</span>
      </Button>
    </div>
  );
};
