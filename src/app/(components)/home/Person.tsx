import React from "react";
import styles from "./styles/Person.module.css";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import { useSendTransaction, useAccount, useWriteContract, useConnect } from "wagmi";
import {injected} from 'wagmi/connectors'
import { parseEther } from "viem";
export default function Person({ username }) {
  if (username.endsWith(".eth")) {
  } else {
  }
  const { sendTransaction, isPending, status, sendTransactionAsync } = useSendTransaction()
  const {address} = useAccount();
  const {writeContractAsync} = useWriteContract();
  return (
    <div 
    onClick={async ()=>{
      console.log("hello")
           await sendTransactionAsync({
              to: '0x729A36e98445cd8C657bBB0f7F19Ef624864a0E3',
              value: parseEther('0.01'),
            })
            
            console.log(status)
    }}
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
        onClick={
          ()=>{
            console.log("hello")
            sendTransaction({
              to: '0x729A36e98445cd8C657bBB0f7F19Ef624864a0E3',
              value: parseEther('0.01'),
            })
          }
        }
        >Send your Appreciation!</button>
      </div>
    </div>
  );
}
