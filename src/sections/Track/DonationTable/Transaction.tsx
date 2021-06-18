import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TransactionDetails } from "./TransactionDetails";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f3f3f3",
  },
}));

export const Transaction = () => {
  const classes = useStyles();

  const TXTableRows1 = [
    TXDetailRowCreate(
      "Ethereum Foundation",
      "UNICEF France",
      "100 ETH",
      "07 Oct 2019 13:56 UTC",
      "https://etherscan.io/tx/0x659566ad82bf3fb89c54b3ce25583df0138605272381aaf7ff3883b2d9e651e0"
    ),
    TXDetailRowCreate(
      "UNICEF France",
      "UNICEF HQ",
      "100 ETH",
      "07 Oct 2019 15:08 UTC",
      "https://etherscan.io/tx/0xec285bbbe747076618ebcaf13f44553cbef068ee330c73a83cce8c356ef259e6"
    ),
  ];
  const TXTableRows2 = [
    TXDetailRowCreate(
      "Ethereum Foundation",
      "UNICEF France",
      "1 BTC",
      "07 Oct 2019 14:02 UTC",
      "https://btc4.trezor.io/tx/8bab8a3286e7a1b2b93ed86588a98876e8de510c5e8ad3922abb2351b49b43f7"
    ),
    TXDetailRowCreate(
      "UNICEF France",
      "UNICEF HQ",
      "1 BTC",
      "07 Oct 2019 15:57 UTC",
      "https://btc4.trezor.io/tx/396e16f8ec98dacfc56ee0b0c00aedc1a94af203050b428ae7eb08d17019846b"
    ),
  ];
  const TXTableRows3 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Atix Labs",
      "1 BTC",
      "08 Oct 2019 17:16 UTC",
      "https://btc4.trezor.io/tx/8bab8a3286e7a1b2b93ed86588a98876e8de510c5e8ad3922abb2351b49b43f7"
    ),
  ];
  const TXTableRows4 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Prescrypto",
      "49.5 ETH",
      "08 Oct 2019 15:54 UTC",
      "https://etherscan.io/tx/0x63b15553266e673f73315b93f9914a92d8208dfe8fa1d01dc119d156dc33d622"
    ),
  ];
  const TXTableRows5 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Utopixar",
      "49.5 ETH",
      "08 Oct 2019 15:57 UTC",
      "https://etherscan.io/tx/0x5735e0524e936818369f2eac2ef7c917b74f00993d187ffdb738e287032e70a0"
    ),
  ];

  const TXTableRows6 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Afinidata",
      "125 ETH",
      "18 Jun 2020 08:06 UTC",
      "https://etherscan.io/tx/0x5a20f875d51ec96726ae484e9083cb3a93b0d2ced74692f473f8822b8722f20e"
    ),
  ];
  const TXTableRows7 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Somleng",
      "125 ETH",
      "18 Jun 2020 08:06 UTC",
      "https://etherscan.io/tx/0xea13d93f88bc5cc1c86b0c57e60ef0bd6a6c4446c623acc2622da7fbcbfec3e8"
    ),
  ];
  const TXTableRows8 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Ideasis",
      "125 ETH",
      "18 Jun 2020 07:57 UTC",
      "https://etherscan.io/tx/0x776e0b64c76f58b7521e4e6de44026cfb6f2aa7186bc127b302544faabf83c5a"
    ),
  ];
  const TXTableRows9 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "StaTwig",
      "125 ETH",
      "18 Jun 2020 07:52 UTC",
      "https://etherscan.io/tx/0x36a083becc6d49514c4fa8dc61ea398f01be0e681d9b79d640eccbf5bd4d80e4"
    ),
  ];
  const TXTableRows10 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Avyantra",
      "125 ETH",
      "18 Jun 2020 07:52 UTC",
      "https://etherscan.io/tx/0x36a083becc6d49514c4fa8dc61ea398f01be0e681d9b79d640eccbf5bd4d80e4"
    ),
  ];
  const TXTableRows11 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Cireha",
      "125 ETH",
      "18 Jun 2020 07:50 UTC",
      "https://etherscan.io/tx/0xe7951d7a78fa3581c48b8914c7f2c5737aeeab29989f65763c21bd1fa2134b06"
    ),
  ];
  const TXTableRows12 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "OS City",
      "125 ETH",
      "18 Jun 2020 07:44 UTC",
      "https://etherscan.io/tx/0x7df0ef84451e66e26046bb896c9ea7d4ab589b97c3fa80c080d18d0b3e22be1b"
    ),
  ];
  const TXTableRows13 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Utopic Studio",
      "125 ETH",
      "18 Jun 2020 07:41 UTC",
      "https://etherscan.io/tx/0x30e928db6a6eb5d88bbdb8c19202308047683be8dd4b4f80fbe49db6c9e56cb9"
    ),
  ];
  const TXTableRows14 = [
    TXDetailRowCreate(
      "Ethereum Foundation",
      "UNICEF France",
      "1200 ETH",
      "15 Jun 2020 05:03 UTC",
      "https://etherscan.io/tx/0x7034df9c87f950902d0f3a2f431aebea854c0d2e2fa6dca8ab127362711bbd11"
    ),
    TXDetailRowCreate(
      "UNICEF France",
      "UNICEF HQ",
      "1200 ETH",
      "15 Jun 2020 05:47 UTC",
      "https://etherscan.io/tx/0xc402f498a730b99d0105cfa3b49c483bd6f143a8c0ab082d0e2b63e8de3fd854"
    ),
  ];
  const TXTableRows15 = [
    TXDetailRowCreate(
      "Ethereum Foundation",
      "UNICEF France",
      "800 ETH",
      "12 Oct 2020 15:28 UTC",
      "https://etherscan.io/tx/0xc56c7adae5afc4d36b1ed827fb3acc40745134e607846fcee9df5a5172eef822"
    ),
    TXDetailRowCreate(
      "UNICEF France",
      "UNICEF HQ",
      "800 ETH",
      "12 Oct 2020 16:04 UTC",
      "https://etherscan.io/tx/0x2d3fd9ea17362aa787f978b8be889e8799a2ba80c2006bdd74995b404c31fb02"
    ),
  ];
  const TXTableRows16 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "OS City",
      "62.5 ETH",
      "01 Oct 2020 17:08 UTC",
      "https://etherscan.io/tx/0x881969e942992404eabfa95602f1fe197f21571933b69352bbcfcd952fefa178"
    ),
  ];
  const TXTableRows17 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Atix Labs",
      "62.5 ETH",
      "01 Oct 2020 17:08 UTC",
      "https://etherscan.io/tx/0x7149a1e1fb2223ccbf968786ebdda078eb6c32f0953cd145925acd60f44de639"
    ),
  ];
  const TXTableRows18 = [
    TXDetailRowCreate(
      "Animoca Brands",
      "UNICEF France",
      "167 ETH",
      "23 Dec 2020 11:36 UTC",
      "https://etherscan.io/tx/0x27a4301ee1bd0006d1df69f1513f75b7b7df341d7083892f53b15912c0c3e55d"
    ),
    TXDetailRowCreate(
      "UNICEF France",
      "UNICEF HQ",
      "167 ETH",
      "05 Jan 2021 13:53 UTC",
      "https://etherscan.io/tx/0x6d0217aa8ce7b49f00c53112b69cc504b3c68c42e72e06d7fe10585b3b7da78d"
    ),
  ];
  const TXTableRows19 = [
    TXDetailRowCreate(
      "Huobi",
      "UNICEF HQ",
      "0.01 BTC",
      "12 Feb 2021 21:53 UTC",
      "https://www.blockchain.com/btc/tx/b318d9a16c35630cf944a374c0432e800a7981708b0f5784c29f54a5a7ecc011"
    )
  ];
  const TXTableRows20 = [
    TXDetailRowCreate(
      "Huobi",
      "UNICEF HQ",
      "6.99 BTC",
      "17 Feb 2021 07:14 UTC",
      "https://www.blockchain.com/btc/tx/b515442b69fbaf99e85233671aedc9382f045a8cfa92062ca4a741faa3b1fddf"
    )
  ];
  const TXTableRows21 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "OS City",
      "27.00 ETH",
      "27 May 2021 08:21 UTC",
      "https://etherscan.io/tx/0xcd30bc97e89ef48ae159880a2e541817fc79934b39a370bc7b756d6052dbc855"
    ),
  ];

  const TXTableRows22 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Kotani Pay",
      "8.91 ETH",
      "15 June 2021 06:44 UTC",
      "https://etherscan.io/tx/0xf430623b2c3dd13f62496225aee7ddb882b4a4f58cc0cd47bf3e629c0134f4e9"
    ),
  ];
  const TXTableRows23 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "BX Smart Labs",
      "9.17 ETH",
      "15 June 2021 06:41 UTC",
      "https://etherscan.io/tx/0x31528d277a8cd70b38ad355ad2faf8086345e75a92f3ea422d1243c9fd9f4716"
    ),
  ];
  const TXTableRows24 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Leaf Global Fintech",
      "11.78 ETH",
      "18 June 2021 06:30 UTC",
      "https://etherscan.io/tx/0xd1baa35eece343105f536eaab82f776307baebb7d3d68492dfac60f5e5ebd73b"
    ),
  ];
  const TXTableRows25 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Xcapit",
      "19.73 ETH",
      "15 June 2021 06:37 UTC",
      "https://etherscan.io/tx/0x7ddab44045dfc0222e590a9b189e0d0f80ae87815604d924cb96c12024cf6423"
    ),
  ];
  const TXTableRows26 = [
    TXDetailRowCreate(
      "UNICEF HQ",
      "Grassroots Economics",
      "25.11 ETH",
      "15 June 2021 06:39 UTC",
      "https://etherscan.io/tx/0xf26612f7f21d6f73a5cb0172265218ae1ede79f4765c5bd6191c530a3b353669"
    ),
  ];
  return (
    <div className={classes.root}>
      {/** NEW */}
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Grassroots Economics"
        partyType3="Recipient"
        valueMoving="25.11 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows26}
        field1={"UNICEF HQ"} // from
        field2={"Grassroots Economics"} // reciepient
        field3={"25.11 ETH"} // amount
        field4={"15 June 2021 06:39 UTC"} // time
        field5={
          "https://etherscan.io/tx/0xf26612f7f21d6f73a5cb0172265218ae1ede79f4765c5bd6191c530a3b353669"
        } // tx link
      />            
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Xcapit"
        partyType3="Recipient"
        valueMoving="19.73 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows25}
        field1={"UNICEF HQ"} // from
        field2={"Xcapit"} // reciepient
        field3={"19.73 ETH"} // amount
        field4={"15 June 2021 06:37 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x7ddab44045dfc0222e590a9b189e0d0f80ae87815604d924cb96c12024cf6423"
        } // tx link
      />            
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Leaf Global Fintech"
        partyType3="Recipient"
        valueMoving="11.78 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows24}
        field1={"UNICEF HQ"} // from
        field2={"Leaf Global Fintech"} // reciepient
        field3={"11.78 ETH"} // amount
        field4={"18 June 2021 06:30 UTC"} // time
        field5={
          "https://etherscan.io/tx/0xd1baa35eece343105f536eaab82f776307baebb7d3d68492dfac60f5e5ebd73b"
        } // tx link
      />            

      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="BX Smart Labs"
        partyType3="Recipient"
        valueMoving="9.17 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows23}
        field1={"UNICEF HQ"} // from
        field2={"BX Smart Labs"} // reciepient
        field3={"9.17 ETH"} // amount
        field4={"15 June 2021 06:41 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x31528d277a8cd70b38ad355ad2faf8086345e75a92f3ea422d1243c9fd9f4716"
        } // tx link
      />            

      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Kotani Pay"
        partyType3="Recipient"
        valueMoving="8.91 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows22}
        field1={"UNICEF HQ"} // from
        field2={"Kotani Pay"} // reciepient
        field3={"8.91 ETH"} // amount
        field4={"15 June 2021 06:44 UTC"} // time
        field5={
          "https://etherscan.io/tx/0xf430623b2c3dd13f62496225aee7ddb882b4a4f58cc0cd47bf3e629c0134f4e9"
        } // tx link
      />      

      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="OS City"
        partyType3="Recipient"
        valueMoving="27.00 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows21}
        field1={"UNICEF HQ"} // from
        field2={"OS City"} // reciepient
        field3={"27.00 ETH"} // amount
        field4={"27 May 2021 08:21 UTC"} // time
        field5={
          "https://etherscan.io/tx/0xcd30bc97e89ef48ae159880a2e541817fc79934b39a370bc7b756d6052dbc855​"
        } // tx link
      />
      <TransactionDetails
        transactionType="Directly Received"
        startingParty="Huobi"
        partyType1="Donor"
        endParty="UNICEF HQ"
        partyType3="Recipient"
        valueMoving="6.99 BTC"
        valueType="Crypto Received"
        TXTableRows={TXTableRows20}
        field1={"Huobi"} // from
        field2={"UNICEF HQ"} // reciepient
        field3={"6.99 BTC"} // amount
        field4={"17 Feb 2021 07:14 UTC"} // time
        field5={
          "https://www.blockchain.com/btc/tx/b515442b69fbaf99e85233671aedc9382f045a8cfa92062ca4a741faa3b1fddf"
        } // tx link
      />
      <TransactionDetails
        transactionType="Directly Received"
        startingParty="Huobi"
        partyType1="Donor"
        endParty="UNICEF HQ"
        partyType3="Recipient"
        valueMoving="0.01 BTC"
        valueType="Crypto Received"
        TXTableRows={TXTableRows19}
        field1={"Huobi"} // from
        field2={"UNICEF HQ"} // reciepient
        field3={"0.01 BTC"} // amount
        field4={"12 Feb 2021 21:53 UTC"} // time
        field5={
          "https://www.blockchain.com/btc/tx/b318d9a16c35630cf944a374c0432e800a7981708b0f5784c29f54a5a7ecc011"
        } // tx link
      />      
      <TransactionDetails
        transactionType="Received"
        startingParty="Animoca Brands"
        partyType1="Donor"
        middleParty="UNICEF France"
        partyType2="National Committee"
        endParty="UNICEF HQ"
        partyType3="Recipient"
        valueMoving="167 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows18}
        field1={"Animoca Brands"} // from
        field2={"UNICEF France"} // reciepient
        field3={"167 ETH"} // amount
        field4={"23 Dec 2020 11:36 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x27a4301ee1bd0006d1df69f1513f75b7b7df341d7083892f53b15912c0c3e55d"
        } // tx link
        yes={true}
        field6={"UNICEF France"} // from
        field7={"UNICEF HQ"} // reciepient
        field8={"167 ETH"} // amount
        field9={"05 Jan 2021 13:53 UTC"} // time
        field10={
          "https://etherscan.io/tx/0x6d0217aa8ce7b49f00c53112b69cc504b3c68c42e72e06d7fe10585b3b7da78d"
        } // tx link
      />
      <TransactionDetails
        transactionType="Received"
        startingParty="Ethereum Foundation"
        partyType1="Donor"
        middleParty="UNICEF France"
        partyType2="National Committee"
        endParty="UNICEF HQ"
        partyType3="Recipient"
        valueMoving="800 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows15}
        field1={"Ethereum Foundation"} // from
        field2={"UNICEF France"} // reciepient
        field3={"800 ETH"} // amount
        field4={"12 Oct 2020 15:28 UTC"} // time
        field5={
          "https://etherscan.io/tx/0xc56c7adae5afc4d36b1ed827fb3acc40745134e607846fcee9df5a5172eef822"
        } // tx link
        yes={true}
        field6={"UNICEF France"} // from
        field7={"UNICEF HQ"} // reciepient
        field8={"800 ETH"} // amount
        field9={"12 Oct 2020 16:04 UTC"} // time
        field10={
          "https://etherscan.io/tx/0x2d3fd9ea17362aa787f978b8be889e8799a2ba80c2006bdd74995b404c31fb02"
        } // tx link
      />
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="OS City"
        partyType3="Recipient"
        valueMoving="62.5 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows16}
        field1={"UNICEF HQ"} // from
        field2={"OS City"} // reciepient
        field3={"62.5 ETH"} // amount
        field4={"01 Oct 2020 17:08 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x881969e942992404eabfa95602f1fe197f21571933b69352bbcfcd952fefa178"
        } // tx link
      />
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Atix Labs"
        partyType3="Recipient"
        valueMoving="62.5 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows17}
        field1="UNICEF HQ"
        field2="Atix Labs"
        field3="62.5 ETH"
        field4={"01 Oct 2020 17:08 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x7149a1e1fb2223ccbf968786ebdda078eb6c32f0953cd145925acd60f44de639"
        } // tx link
      />
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Afinidata"
        partyType3="Recipient"
        valueMoving="125 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows6}
        field1={"UNICEF HQ"} // from
        field2={"Afinidata"} // reciepient
        field3={"125 ETH"} // amount
        field4={"18 Jun 2020 08:06 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x5a20f875d51ec96726ae484e9083cb3a93b0d2ced74692f473f8822b8722f20e"
        } // tx link
      />
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Somleng"
        partyType3="Recipient"
        valueMoving="125 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows7}
        field1="UNICEF HQ"
        field2="Somleng"
        field3="125 ETH"
        field4={"18 Jun 2020 08:06 UTC"} // time
        field5={
          "https://etherscan.io/tx/0xea13d93f88bc5cc1c86b0c57e60ef0bd6a6c4446c623acc2622da7fbcbfec3e8"
        } // tx link
      />
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Ideasis"
        partyType3="Recipient"
        valueMoving="125 ETH"
        valueType="Crypto Received"
        field1="UNICEF HQ"
        field2="Ideasis"
        field3="125 ETH"
        TXTableRows={TXTableRows8}
        field4={"18 Jun 2020 07:57 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x776e0b64c76f58b7521e4e6de44026cfb6f2aa7186bc127b302544faabf83c5a"
        } // tx link
      />
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="StaTwig"
        partyType3="Recipient"
        valueMoving="125 ETH"
        valueType="Crypto Received"
        field1="UNICEF HQ"
        field2="StaTwig"
        field3="125 ETH"
        TXTableRows={TXTableRows9}
        field4={"18 Jun 2020 07:52 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x36a083becc6d49514c4fa8dc61ea398f01be0e681d9b79d640eccbf5bd4d80e4"
        } // tx link
      />

      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Avyantra"
        partyType3="Recipient"
        valueMoving="125 ETH"
        valueType="Crypto Received"
        field1="UNICEF HQ"
        TXTableRows={TXTableRows10}
        field2="Avyantra"
        field3="125 ETH"
        field4={"18 Jun 2020 07:52 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x36a083becc6d49514c4fa8dc61ea398f01be0e681d9b79d640eccbf5bd4d80e4"
        } // tx link
      />
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Cireha"
        partyType3="Recipient"
        valueMoving="125 ETH"
        TXTableRows={TXTableRows11}
        valueType="Crypto Received"
        field1="UNICEF HQ"
        field2="Cireha"
        field3="125 ETH"
        field4={"18 Jun 2020 07:50 UTC"} // time
        field5={
          "https://etherscan.io/tx/0xe7951d7a78fa3581c48b8914c7f2c5737aeeab29989f65763c21bd1fa2134b06"
        } // tx link
      />
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="OS City"
        partyType3="Recipient"
        TXTableRows={TXTableRows12}
        valueMoving="125 ETH"
        valueType="Crypto Received"
        field1="UNICEF HQ"
        field2="OS City"
        field3="125 ETH"
        field4={"18 Jun 2020 07:44 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x7df0ef84451e66e26046bb896c9ea7d4ab589b97c3fa80c080d18d0b3e22be1b"
        } // tx link
      />
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Utopic Studio"
        partyType3="Recipient"
        valueMoving="125 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows13}
        field1="UNICEF HQ"
        field2="Utopic Studio"
        field3="125 ETH"
        field4={"18 Jun 2020 07:41 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x30e928db6a6eb5d88bbdb8c19202308047683be8dd4b4f80fbe49db6c9e56cb9"
        } // tx link
      />
      <TransactionDetails
        transactionType="Received"
        startingParty="Ethereum Foundation"
        partyType1="Donor"
        middleParty="UNICEF France"
        partyType2="National Committee"
        endParty="UNICEF HQ"
        partyType3="Recipient"
        valueMoving="1200 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows14}
        field1={"Ethereum Foundation"} // from
        field2={"UNICEF France"} // reciepient
        field3={"1200 ETH"} // amount
        field4={"15 Jun 2020 17:03 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x7034df9c87f950902d0f3a2f431aebea854c0d2e2fa6dca8ab127362711bbd11"
        } // tx link
        yes={true}
        field6={"UNICEF France"} // from
        field7={"UNICEF HQ"} // reciepient
        field8={"1200 ETH"} // amount
        field9={"15 Jun 2020 17:47 UTC"} // time
        field10={
          "https://etherscan.io/tx/0xc402f498a730b99d0105cfa3b49c483bd6f143a8c0ab082d0e2b63e8de3fd854"
        } // tx link
      />
      {/** OLD */}

      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Atix Labs"
        partyType3="Recipient"
        valueMoving="1 BTC"
        valueType="Crypto Received"
        TXTableRows={TXTableRows3}
        field1={"UNICEF HQ"} // from
        field2={"Atix Labs"} // reciepient
        field3={"1 BTC"} // amount
        field4={"08 Oct 2019 17:16 UTC"} // time
        field5={
          "https://btc1.trezor.io/tx/001ef6f14df3b63f872c4cbdf7d3f36a15330eb9b9db4983f6c3b6d9093a8924"
        } // tx link
      />
      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Prescrypto"
        partyType3="Recipient"
        valueMoving="49.5 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows4}
        field1={"UNICEF HQ"} // from
        field2={"Prescrypto"} // reciepient
        field3={"49.5 ETH"} // amount
        field4={"08 Oct 2019 15:54 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x63b15553266e673f73315b93f9914a92d8208dfe8fa1d01dc119d156dc33d622"
        } // tx link
      />

      <TransactionDetails
        transactionType="Invested"
        startingParty="UNICEF HQ"
        partyType1="HQ"
        endParty="Utopixar"
        partyType3="Recipient"
        valueMoving="49.5 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows5}
        field1={"UNICEF HQ"} // from
        field2={"Utopixar"} // reciepient
        field3={"49.5 ETH"} // amount
        field4={"08 Oct 2019 17:57 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x5735e0524e936818369f2eac2ef7c917b74f00993d187ffdb738e287032e70a0"
        } // tx link
      />
      <TransactionDetails
        transactionType="Received"
        startingParty="Ethereum Foundation"
        partyType1="Donor"
        middleParty="UNICEF France"
        partyType2="National Committee"
        endParty="UNICEF HQ"
        partyType3="Recipient"
        valueMoving="100 ETH"
        valueType="Crypto Received"
        TXTableRows={TXTableRows1}
        field1={"Ethereum Foundation"} // from
        field2={"UNICEF France"} // reciepient
        field3={"100 ETH"} // amount
        field4={"07 Oct 2019 13:56 UTC"} // time
        field5={
          "https://etherscan.io/tx/0x659566ad82bf3fb89c54b3ce25583df0138605272381aaf7ff3883b2d9e651e0"
        } // tx link
        yes={true}
        field6={"UNICEF France"} // from
        field7={"UNICEF HQ"} // reciepient
        field8={"100 ETH"} // amount
        field9={"07 Oct 2019 15:08 UTC"} // time
        field10={
          "https://etherscan.io/tx/0xec285bbbe747076618ebcaf13f44553cbef068ee330c73a83cce8c356ef259e6"
        } // tx link
      />
      <TransactionDetails
        transactionType="Received"
        startingParty="Ethereum Foundation"
        partyType1="Donor"
        middleParty="UNICEF France"
        partyType2="National Committee"
        endParty="UNICEF HQ"
        partyType3="Recipient"
        valueMoving="1 BTC"
        valueType="Crypto Received"
        TXTableRows={TXTableRows2}
        field1={"Ethereum Foundation"} // from
        field2={"UNICEF France"} // reciepient
        field3={"1 BTC"} // amount
        field4={"07 Oct 2019 14:02 UTC"} // time
        field5={
          "https://btc1.trezor.io/tx/8bab8a3286e7a1b2b93ed86588a98876e8de510c5e8ad3922abb2351b49b43f7"
        } // tx link
        yes={true}
        field6={"UNICEF France"} // from
        field7={"UNICEF HQ"} // reciepient
        field8={"1 BTC"} // amount
        field9={"07 Oct 2019 15:57 UTC"} // time
        field10={
          "https://btc1.trezor.io/tx/396e16f8ec98dacfc56ee0b0c00aedc1a94af203050b428ae7eb08d17019846b"
        } // tx link
      />
    </div>
  );
};

function TXDetailRowCreate(
  from: string,
  recipient: string,
  amount: string,
  time: string,
  txhash: string
) {
  return { from, recipient, amount, time, txhash };
}
