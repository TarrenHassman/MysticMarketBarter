import React from "react";
import styles from "./styles/siderbar.module.css";
import { motion } from "framer-motion";
import { useAccount, useEnsAvatar, useEnsName } from "wagmi";
import Image from "next/image";
import groupIcon from "../../../../public/networking.png";
import homeIcon from "../../../../public/home.png";
import chatting from "../../../../public/chatting.png";
import GroupSidebar from "./GroupSidebar";
import {sidebar} from './hooks/use-sidebar'
import { useStore } from "@tanstack/react-store";

export default function Sidebar() {
  return (
    <motion.div
      className={styles.sidebar}
      whileHover={{
        height: "90vh",
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.8,
      }}
    >
      <CustomWallet></CustomWallet>
      <SidebarButtons></SidebarButtons>
    </motion.div>
  );
}

function SidebarButtons() {
  let sidebarIndex = useStore(sidebar, sidebar=>sidebar.sidebarIndex)
    // <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Chanut - Flaticon</a>
  // <a href="https://www.flaticon.com/free-icons/message" title="message icons">Message icons created by Freepik - Flaticon</a>
  // <a href="https://www.flaticon.com/free-icons/home-button" title="home button icons">Home button icons created by Freepik - Flaticon</a>
  // <a href="https://www.flaticon.com/free-icons/networking" title="networking icons">Networking icons created by Becris - Flaticon</a>
  return (
    <ul>
      <li
      onClick={()=>{
        sidebar.setState(()=>{
          return {sidebarIndex:0}
        })
        console.log(sidebar.state.sidebarIndex)
      }}
      className={sidebarIndex == 0 ? styles.selectedButton : styles.sidebarButtons}>
 
        <Image
          className={styles.sidebarIcons}
          alt="Home"
          height={40}
          width={40}
          src={homeIcon}
        ></Image>
          <h1
            className={styles.sidebarLabels}
          >Home</h1>
      
      </li>
      
      <li
      onClick={()=>{
        sidebar.setState(()=>{
          return {sidebarIndex:1}
        })
        console.log(sidebar.state.sidebarIndex)
      }}
      className={sidebarIndex == 1 ? styles.selectedButton : styles.sidebarButtons}>
        <Image
          className={styles.sidebarIcons}
          alt="Groups"
          height={40}
          width={40}
          src={groupIcon}
        ></Image>
        <h1
        className={styles.sidebarLabels}
        >Groups</h1>
      </li>
      <li
      onClick={()=>{
        sidebar.setState(()=>{
          return {sidebarIndex:2}
        })
        console.log(sidebar.state.sidebarIndex)
      }}
      className={sidebarIndex == 2 ? styles.selectedButton : styles.sidebarButtons}>
        <Image
          className={styles.sidebarIcons}
          alt="Messages"
          height={40}
          width={40}
          src={chatting}
        ></Image>
          <h1
            className={styles.sidebarLabels}
          >Messages</h1>
      </li>
    </ul>
  );
}

function CustomWallet() {
  const { address, isConnected } = useAccount();
  console.log(address);
  const { data, isError, isLoading } = useEnsName({
    address: address,
  });
  const avatar = useEnsAvatar({
    name: data,
  });
  console.log({ address });
  console.log({ avatar });
  console.log(isError);
  console.log(isLoading);
  console.log(data);
  return (
    <div>
      <div className={styles.walletButton}>
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
        <div>
          {!isConnected || address == undefined ? (
            <w3m-button></w3m-button>
          ) : (
            <w3m-account-button />
          )}
          <h1 className={styles.ensName}>{isLoading ? "Loading..." : data}</h1>
        </div>
      </div>
    </div>
  );
}
