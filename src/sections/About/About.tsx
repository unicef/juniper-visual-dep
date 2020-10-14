import React from "react";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/styles";
import { AboutMainText } from "./AboutMainText";
import { ApplicationImg, ApplicationMiddleImg } from "./AboutImgs";

const useStyles = makeStyles((theme: any) => ({
  top: {
    backgroundColor: "#ffd113",
    padding: "100px 0px",
    height: "90vh",
  },

  lcolumn: {
    padding: "100px 65px 100px 130px",
    fontFamily: "Cabin",
    fontSize: "77px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.04",
    letterSpacing: "normal",
    color: "#0068ea",
  },

  lcolumnmobile: {
    padding: "100px 30px 0px 60px",
    fontSize: "47px",
    fontFamily: "Cabin",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.04",
    letterSpacing: "normal",
    color: "#0068ea",
  },

  rcolumn: {
    padding: "50px 130px 100px 65px",
  },

  rcolumnmobile: {
    padding: "100px 30px 100px 30px",
  },
  header: {
    fontFamily: "Cabin",
    fontSize: "28px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.32",
    letterSpacing: "normal",
    color: "#000000",
    paddingBottom: "10px",
  },

  headermobile: {
    fontFamily: "Cabin",
    fontSize: "22px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.32",
    letterSpacing: "normal",
    color: "#000000",
    paddingBottom: "10px",
  },

  blurb: {
    fontFamily: "IBM Plex Sans",
    fontSize: "22px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.55",
    letterSpacing: "normal",
    paddingBottom: "60px",
  },

  blurbmobile: {
    width: "311px",
    fontFamily: "IBM Plex Sans",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.79",
    letterSpacing: "normal",
    paddingBottom: "60px",
  },

  underline: {
    textDecoration: "underline",
    fontWeight: "bold",
  },
}));

export const About = () => {
  const classes = useStyles();
  const mobiledevice = useMediaQuery("(max-width: 991px)");

  return (
    <div>
      <div className={classes.top}>
        <AboutMainText />
      </div>

      <div>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            className={mobiledevice ? classes.lcolumnmobile : classes.lcolumn}
          >
            Selection criteria &amp; funding
          </Grid>

          <Grid item xs={12} sm={6} className={classes.rcolumn}>
            <AboutBlurb1 />
            <ApplicationImg />
            <AboutBlurb2 />
            <AboutBlurb3 />
          </Grid>
        </Grid>
        <ApplicationMiddleImg />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            className={mobiledevice ? classes.lcolumnmobile : classes.lcolumn}
          >
            Why blockchain?
          </Grid>

          <Grid item sm={6} className={classes.rcolumn}>
            <AboutBlurb5 />
            <AboutBlurb6 />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export const AboutBlurb1 = () => {
  const classes = useStyles();
  const mobiledevice = useMediaQuery("(max-width: 991px)");

  return (
    <div>
      <div className={mobiledevice ? classes.blurbmobile : classes.blurb}>

        <p>
        UNICEF’s Innovation Fund invests in early stage, open-source, emerging technology digital public goods with the potential to impact children on a global scale. It also provides product and technology assistance, support with business growth, access to a network of experts and partners to allow for scale and growth. Our ambition is to build successful digital solutions into <a href='www.digitalpublicgoods.net'><b>Global Digital Public Goods</b></a> , to ensure fair, equitable, and open access to these unique and new tools for human development on a global scale.  
        </p>
        <p>
        The UNICEF Innovation Fund is the first financial vehicle of its kind in the United Nations and enables UNICEF to learn from and to shape markets of emerging technology that exist at the intersection of $100 billion business markets and 1 billion persons’ needs. The CryptoFund is part of the UNICEF Innovation Fund. To learn more about the Innovation Fund, click <a href='https://www.unicefinnovationfund.org/about'><b>here</b></a>.
        </p>
      </div>
    </div>
  );
};

export const AboutBlurb2 = () => {
  const classes = useStyles();
  const mobiledevice = useMediaQuery("(max-width: 991px)");

  return (
    <div>
      {/* <div className={mobiledevice ? classes.headermobile : classes.header}>
        Who are we looking for
      </div> */}
      <div className={mobiledevice ? classes.blurbmobile : classes.blurb}>
        <p>
        The Innovation Fund invests exclusively in open source technology solutions. The investments can go either to UNICEF Country Offices or to private sector companies in UNICEF programme countries.   ​
        </p>
        <p>
        By investing in multiple concurrent teams working on similar problems and technology stacks the Fund can accelerate both the development of products, as well as the building, iteration, and exit of the teams around the technologies. The Fund also invests in early-stage "knowledge products" - operations research that is published in the public domain and supports investment strategies and decisions.  
        </p>
        <p>
        Through its investments, the Innovation Fund is generating value by strengthening communities of problem solvers, increasing the pool of global digital public goods, and growing solutions that bring results for children and the world. To learn more about our investment principles, click <a href='https://www.unicefinnovationfund.org/about'><b>here</b></a>. 
        </p>
      </div>
    </div>
  );
};

export const AboutBlurb3 = () => {
  const classes = useStyles();
  const mobiledevice = useMediaQuery("(max-width: 991px)");

  return (
    <div>
      <div className={mobiledevice ? classes.headermobile : classes.header}>
        Funding in bitcoin or ether
      </div>
      <div className={mobiledevice ? classes.blurbmobile : classes.blurb}>
        <p>
          The CryptoFund provides investments in bitcoin or ether to support the
          acceleration of your company’s work.
        </p>
      </div>
    </div>
  );
};

export const AboutBlurb5 = () => {
  const classes = useStyles();
  const mobiledevice = useMediaQuery("(max-width: 991px)");

  return (
    <div>
      <div className={mobiledevice ? classes.headermobile : classes.header}>
        Enabling a digitally financed future
      </div>
      <div className={mobiledevice ? classes.blurbmobile : classes.blurb}>
        <p>
          By distributing funding in cryptocurrency, UNICEF, donors, recipients,
          and the public can track where the money is going and how it is being
          spent, providing an unprecedented level of transparency in the funding
          and NGO space. This is due to blockchain technology, the tool powering
          cryptocurrency.
        </p>
      </div>
    </div>
  );
};

export const AboutBlurb6 = () => {
  const classes = useStyles();
  const mobiledevice = useMediaQuery("(max-width: 991px)");

  return (
    <div>
      <div className={mobiledevice ? classes.headermobile : classes.header}>
        A permanent, transparent record of a financial transaction
      </div>
      <div className={mobiledevice ? classes.blurbmobile : classes.blurb}>
        <p>
          Blockchain technology operates as a digital ledger, recording each
          transaction, which takes place on the network. With public
          cryptocurrencies such as bitcoin and ether, anyone is able to see
          where and when the assets are moving, revolutionising the way giving
          today works.
        </p>
      </div>
    </div>
  );
};
