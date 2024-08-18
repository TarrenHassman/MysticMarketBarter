import React from "react";
import styles from "./styles/Person.module.css";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import {
  useSendTransaction,
  useAccount,
  useWriteContract,
  useConnect,
  useEnsName,
  useEnsAvatar,
} from "wagmi";
import { injected } from "wagmi/connectors";
import { parseEther } from "viem";

export default function Person({ username, buttonType }) {
  const { sendTransaction, isPending, status, sendTransactionAsync } =
    useSendTransaction();

  const { address, isConnected } = useAccount();
  // console.log(address);
  const { data, isError, isLoading } = useEnsName({
    address: address,
  });
  const avatar = useEnsAvatar({
    name: data,
  });
  const connectUsers = () => {
    console.log("Connnect Users");
  };
  const sendAppreciation = async () => {
    console.log(data)
    if (username == "matoaka.eth") {
      await sendTransactionAsync({
        to: "0x729A36e98445cd8C657bBB0f7F19Ef624864a0E3",
        value: parseEther("0.01"),
      });
    } else {
      await sendTransactionAsync({
        to: address,
        value: parseEther("0.01"),
      });
    }

    console.log(status);
  };

  return (
    <div
      onClick={buttonType == "connect" ? connectUsers : sendAppreciation}
      className={styles.person}
    >
      <div>
    {avatar.isLoading || avatar.data == undefined ? (
      <img alt="Avatar" src="favicon.ico" className={styles.avatar} />
    ) : (
      <Image
        height={70}
        width={70}
        alt="Avatar"
        src={avatar.data}
        className={styles.avatar}
      />
    )}
  </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
   
        { username == "matoaka.eth" ?
          <h1 className={styles.ensName}>matoaka.eth</h1>:
          <h1 className={styles.ensName}>{isLoading ? "Loading..." : data}</h1>
        }

        {
          data == undefined && address !=undefined ? address.substring(0,17)+"..." : ""
        }

        {isError}
        
        <button
          className={styles.donation}
          onClick={buttonType == "connect" ? connectUsers : sendAppreciation}
        >
   
          {buttonType == "connect" ? "Connect" : "Send your Appreciation!"}
        </button>
      </div>
    </div>
  );
}


// <div>
// <div className={styles.walletButton}>
  
//   <div>
//     {!isConnected || address == undefined ? (
//       <w3m-button></w3m-button>
//     ) : (
//       <w3m-account-button />
//     )}
//     <h1 className={styles.ensName}>{isLoading ? "Loading..." : data}</h1>
//   </div>
// </div>
// </div>