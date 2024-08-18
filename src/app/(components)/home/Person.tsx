import React from "react";
import styles from "./styles/Person.module.css";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import { useSendTransaction, useAccount, useWriteContract, useConnect } from "wagmi";
import {injected} from 'wagmi/connectors'
import { parseEther } from "viem";




export default function Person({ username, buttonType }) {
  if (username.endsWith(".eth")) {
  } else {
  }
  const { sendTransaction, isPending, status, sendTransactionAsync } = useSendTransaction()
  const {address} = useAccount();
  const {writeContractAsync} = useWriteContract();
  const connectUsers = ()=>{
    console.log("Connnect Users")
  }
  const sendAppreciation = async ()=>{
    await sendTransactionAsync({
      to: '0x729A36e98445cd8C657bBB0f7F19Ef624864a0E3',
      value: parseEther('0.01'),
    })
    console.log(status)
  }

  return (
    <div 
    onClick={buttonType == "connect" ? connectUsers : sendTransaction}
    className={styles.person}>
      <img alt="Avatar" src="favicon.ico" className={styles.avatar} />
      {/* <Image
        alt="avatar"
        width={40}
        height={40}
        src={logo}
        className={styles.avatar}
        ></Image> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent:'center',
          justifyItems:"center",
          alignContent:'center',
          alignItems:'center'
        }}
      >
        {" "}
        <h1 className={styles.username}>{username}</h1>
        <button
        className={styles.donation}
        onClick={buttonType == "connect" ? connectUsers : sendTransaction}
        > {buttonType == "connect" ? "Connect" : "Send your Appreciation!"}</button>
      </div>
    </div>
  );
}
