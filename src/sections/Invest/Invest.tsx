import React from "react";
import json2mq from "json2mq";
import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { SideDetails } from "../../common/SideDetails";
import { InvestmentMainText } from "./InvestmentMainText";
import { InvestmentMainImage } from "./InvestmentMainImage";
import { InvestmentObject } from "./InvestmentObject";
import { SelectionCriteria } from "./SelectionCriteria";
import { InvestPageArrow } from "./InvestPageArrow";

const useStyles = makeStyles((theme: any) => ({
  top: {
    backgroundColor: "#0068ea",
    paddingTop: "100px",
    height: "90vh",
  },
  topMobile: {
    backgroundColor: "#0068ea",
    paddingTop: "100px",
  },
}));
export const Invest = () => {
  const classes = useStyles();
  const matches = useMediaQuery(
    json2mq({
      minWidth: 991,
    })
  );
  return (
    <div>
      <div
        className={matches ? classes.top : classes.topMobile}
        style={{
          paddingLeft: "14px",
          paddingRight: "14px",
          // paddingBottom: "14px",
        }}
      >
        <Grid container>
          {matches ? (
            <Grid style={{ paddingBottom: "50px" }} item xs={12} sm={3}>
              <SideDetails
                firstNumber="18"
                firstLabel="investments"
                middleNumber="01 btc"
                middleLabel="bitcoin invested"
                lastNumber="1327 eth"
                lastLabel="ether invested"
              />
            </Grid>
          ) : null}
          <InvestmentMainText />
          {matches ? null : (
            <Grid item xs={12} sm={3}>
              <SideDetails
                firstNumber="18"
                firstLabel="investments"
                middleNumber="01 btc"
                middleLabel="bitcoin invested"
                lastNumber="1327 eth"
                lastLabel="ether invested"
              />
              <div style={{ textAlign: "right", paddingTop: "-10px" }}>
                <InvestmentMainImage />
              </div>
            </Grid>
          )}
        </Grid>
        {matches ? (
          <div style={{ position: "absolute", left: 57, bottom: 48 }}>
            <InvestmentMainImage />
          </div>
        ) : null}
        <Grid
          container
          style={{ position: "absolute", bottom: 96 }}
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          {matches ? <InvestPageArrow /> : null}
        </Grid>
      </div>
      <div>
      <InvestmentObject
          title={"Integrating an emergency response platform for stakeholders to access digital payments"}
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Grassroots Economics"}
          detail2={"25.11 ETH"}
          detail3={"Kenya"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            ["https://etherscan.io/tx/0xf26612f7f21d6f73a5cb0172265218ae1ede79f4765c5bd6191c530a3b353669​"]
          }
          linkToImage={"./Grassroots.png"}
          altDescription={""}
          color={"#0068ea"}
          fontColor={"#fff"}
          linkToProject={
            "https://www.unicefinnovationfund.org/broadcast/updates/grassroots-economics-integrating-emergency-response-platform-stakeholders-access​"
          }
          time={"15 Jun 2021 06:39 UTC"}
        />
        <InvestmentObject
          title={"Building a platform using blockchain and AI to increase easy, safe access to financial services"}
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Xcapit"}
          detail2={"19.73 ETH"}
          detail3={"Argentina"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            ["https://etherscan.io/tx/0x7ddab44045dfc0222e590a9b189e0d0f80ae87815604d924cb96c12024cf6423​"]
          }
          linkToImage={"./Xcapit.jpg"}
          altDescription={""}
          color={"#ffd113"}
          fontColor={"#000"}
          linkToProject={
            "https://www.unicefinnovationfund.org/broadcast/updates/xcapit-building-platform-using-blockchain-and-ai-increase-easy-safe-access​"
          }
          time={"15 Jun 2021 06:37 UTC"}
        />
        <InvestmentObject
          title={"Digital financial services for refugees and under-resourced communities​"}
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Leaf Global Fintech​"}
          detail2={"11.78 ETH"}
          detail3={"Rwanda"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            ["https://etherscan.io/tx/0xd1baa35eece343105f536eaab82f776307baebb7d3d68492dfac60f5e5ebd73b​"]
          }
          linkToImage={"./Leaf.jpeg"}
          altDescription={""}
          color={"#0068ea"}
          fontColor={"#fff"}
          linkToProject={
            "https://www.unicefinnovationfund.org/broadcast/updates/leaf-wallet-digital-financial-services-refugees-and-under-resourced-communities​"
          }
          time={"18 Jun 2021 06:30 UTC"}
        />
        <InvestmentObject
          title={"Developing a decentralized app for saving circles​"}
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"BX Smart Labs"}
          detail2={"9.17 ETH"}
          detail3={"Mexico"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            ["https://etherscan.io/tx/0x31528d277a8cd70b38ad355ad2faf8086345e75a92f3ea422d1243c9fd9f4716​"]
          }
          linkToImage={"./BXSmart.jpg"}
          altDescription={""}
          color={"#ffd113"}
          fontColor={"#000"}
          linkToProject={
            "https://www.unicefinnovationfund.org/broadcast/updates/bx-smart-labs-developing-decentralized-app-saving-circles​"
          }
          time={"15 Jun 2021 06:41 UTC"}
        />
        <InvestmentObject
          title={"Increasing access to financial instruments using blockchain and cryptocurrency​"}
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Kotani Pay"}
          detail2={"8.91 ETH"}
          detail3={"Kenya"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            ["https://etherscan.io/tx/0xf430623b2c3dd13f62496225aee7ddb882b4a4f58cc0cd47bf3e629c0134f4e9"]
          }
          linkToImage={"./KotaniPay.jpeg"}
          altDescription={""}
          color={"#0068ea"}
          fontColor={"#fff"}
          linkToProject={
            "https://www.unicefinnovationfund.org/broadcast/updates/kotani-pay-increasing-access-financial-instruments-using-blockchain-and​"
          }
          time={"15 Jun 2021 06:44 UTC"}
        />
        <InvestmentObject
          title={"Transparent, Provable, and Immutable Acknowledgements​"}
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"OS City"}
          detail2={"27.00 ETH"}
          detail3={"Mexico"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            ["https://etherscan.io/tx/0xcd30bc97e89ef48ae159880a2e541817fc79934b39a370bc7b756d6052dbc855​"]
          }
          linkToImage={"./OSCity.jpeg"}
          altDescription={""}
          color={"#ffd113"}
          fontColor={"#000"}
          linkToProject={
            "https://www.unicef.org/innovation/stories/transparent-provable-and-immutable-acknowledgements"
          }
          time={"27 May 2021 08:21 UTC"}
        />           
        <SelectionCriteria />
        <InvestmentObject
          title={"Leveraging AI to analyse sentiment analysis and response of public services "}
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"OS City + Atix Labs​"}
          detail2={"125.00 ETH"}
          detail3={"Argentina"}
          button={"COMING SOON"}
          link={"Transaction Proof"}
          linkToProof={
            ["https://etherscan.io/tx/0x881969e942992404eabfa95602f1fe197f21571933b69352bbcfcd952fefa178", "https://etherscan.io/tx/0x7149a1e1fb2223ccbf968786ebdda078eb6c32f0953cd145925acd60f44de639"]
          }
          linkToImage={"./OS-2.png"}
          altDescription={""}
          color={"#0068ea"}
          fontColor={"#fff"}
          linkToProject={
            ""
          }
          time={"12 Oct 2020 05:08 UTC"}
        />        
        <InvestmentObject
          title={"Democratising social impact financing with blockchain"}
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Atix Labs"}
          detail2={"1.00 BTC"}
          detail3={"Argentina"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            "https://btc4.trezor.io/tx/001ef6f14df3b63f872c4cbdf7d3f36a15330eb9b9db4983f6c3b6d9093a8924"
          }
          linkToImage={"./Atix.png"}
          altDescription={""}
          color={"#ffd113"}
          fontColor={"#000"}
          linkToProject={
            "https://www.unicef.org/innovation/FundGraduate/Atixlabs"
          }
          time={"08 Oct 2019 17:16 UTC"}
        />
        <InvestmentObject
          title={"Making sensitive clinical data portable, safe and private"}
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Prescrypto"}
          detail2={"49.50 ETH"}
          detail3={"Mexico"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            "https://etherscan.io/tx/0x63b15553266e673f73315b93f9914a92d8208dfe8fa1d01dc119d156dc33d622"
          }
          linkToImage={"Prescrypto.png"}
          altDescription={""}
          color={"#0068ea"}
          fontColor={"#fff"}
          linkToProject={
            "https://www.unicef.org/innovation/fundgraduate/Prescrypto"
          }
          time={"08 Oct 2019 15:54 UTC"}
        />
        <InvestmentObject
          title={
            "Using blockchain technology to inspire young people to become local changemakers"
          }
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Utopixar"}
          detail2={"49.50 ETH"}
          detail3={"Tunisia"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            "https://etherscan.io/tx/0x5735e0524e936818369f2eac2ef7c917b74f00993d187ffdb738e287032e70a0"
          }
          linkToImage={"./Utopixar.png"}
          altDescription={""}
          color={"#ffd113"}
          fontColor={"#000"}
          linkToProject={
            "https://www.unicef.org/innovation/fundgraduate/Coinsence"
          }
          time={"08 Oct 2019 15:57 UTC"}
        />
        <InvestmentObject
          title={
            "Using a low-cost Interactive Voice Response platform to send key information about COVID-19 in Cambodia"
          }
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Somleng"}
          detail2={"125.00 ETH"}
          detail3={"Cambodia"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            "https://etherscan.io/tx/0xea13d93f88bc5cc1c86b0c57e60ef0bd6a6c4446c623acc2622da7fbcbfec3e8"
          }
          linkToImage={"./Somleng.png"}
          altDescription={""}
          color={"#0068ea"}
          fontColor={"#fff"}
          linkToProject={"https://www.somleng.org"}
        />
        <InvestmentObject
          title={
            "Using machine learning to facilitate early treatment to infants with neonatal sepsis"
          }
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Avyantra"}
          detail2={"125.00 ETH"}
          detail3={"India"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            "https://etherscan.io/tx/0xe7951d7a78fa3581c48b8914c7f2c5737aeeab29989f65763c21bd1fa2134b06"
          }
          linkToImage={"./Avyantra.png"}
          altDescription={""}
          color={"#ffd113"}
          fontColor={"#000"}
          linkToProject={
            "https://www.unicef.org/innovation/stories/avyantra-using-machine-learning-facilitate-early-treatment-infants-neonatal-sepsis"
          }
        />

        <InvestmentObject
          title={
            "Improving food and vaccines distribution systems more efficiently through blockchain"
          }
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"StaTwig"}
          detail2={"125.00 ETH"}
          detail3={"India"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            "https://etherscan.io/tx/0x36a083becc6d49514c4fa8dc61ea398f01be0e681d9b79d640eccbf5bd4d80e4"
          }
          linkToImage={"./StaTwig.png"}
          altDescription={""}
          color={"#0068ea"}
          fontColor={"#fff"}
          linkToProject={"https://statwig.com"}
        />
        <InvestmentObject
          title={"Improving children's reading skills using VR technology"}
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Utopic Studio"}
          detail2={"125.00 ETH"}
          detail3={"Chile"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            "https://etherscan.io/tx/0x30e928db6a6eb5d88bbdb8c19202308047683be8dd4b4f80fbe49db6c9e56cb9"
          }
          linkToImage={"./UtopicStudio.png"}
          altDescription={""}
          color={"#ffd113"}
          fontColor={"#000"}
          linkToProject={"https://utopicstudio.com"}
        />
        <InvestmentObject
          title={
            "Utilizing VR technology to address phobias and social anxieties"
          }
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Ideasis"}
          detail2={"125.00 ETH"}
          detail3={"Turkey"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            "https://etherscan.io/tx/0x776e0b64c76f58b7521e4e6de44026cfb6f2aa7186bc127b302544faabf83c5a"
          }
          linkToImage={"./Ideasis.png"}
          altDescription={""}
          color={"#0068ea"}
          fontColor={"#fff"}
          linkToProject={"http://www.ideasis.com.tr"}
        />
        <InvestmentObject
          title={
            "Using artificial intelligence to provide access to quality early childhood education"
          }
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Afinidata"}
          detail2={"125.00 ETH"}
          detail3={"Guatemala"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            "https://etherscan.io/tx/0x5a20f875d51ec96726ae484e9083cb3a93b0d2ced74692f473f8822b8722f20e"
          }
          linkToImage={"./Afinidata.png"}
          altDescription={""}
          color={"#ffd113"}
          fontColor={"#000"}
          linkToProject={"https://afinidata.com/en/home/"}
        />
        <InvestmentObject
          title={
            "Aiding communication for children and adults with speech and language impairments"
          }
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"Cireha"}
          detail2={"125.00 ETH"}
          detail3={"Argentina"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            "https://etherscan.io/tx/0x5f7fa39683f421dc98b0981feef0573bd805293d38dfdbaa7bcab4438175c3bd"
          }
          linkToImage={"./Cireha.png"}
          altDescription={""}
          color={"#0068ea"}
          fontColor={"#fff"}
          linkToProject={"http://cireha.com.ar"}
        />
        <InvestmentObject
          title={
            "Creating data-driven, verified cities through blockchain and AI"
          }
          label1={"Startup"}
          label2={"Funding Amount"}
          label3={"Country"}
          detail1={"OS City"}
          detail2={"125.00 ETH"}
          detail3={"Mexico"}
          button={"View Project"}
          link={"Transaction Proof"}
          linkToProof={
            "https://etherscan.io/tx/0x7df0ef84451e66e26046bb896c9ea7d4ab589b97c3fa80c080d18d0b3e22be1b"
          }
          linkToImage={"./OS.png"}
          altDescription={""}
          color={"#ffd113"}
          fontColor={"#000"}
          linkToProject={
            "https://www.unicef.org/innovation/stories/one-smart-creating-data-driven-verified-cities-through-blockchain-and-ai"
          }
        />
      </div>
    </div>
  );
};
