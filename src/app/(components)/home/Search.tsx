import React from "react";
import searchIcon from "../../../../public/magnifying-glass.png"
import Image from "next/image";
import styles from "../styles/search.module.css"
import { motion } from "framer-motion";
import { useEnsName, useEnsResolver } from "wagmi";
import Person from "./Person";
export default function Search() {
  const findUser= (value)=>{
    const address= useEnsResolver({
      name:value
    })
    console.log(address)
  }

  return (
    <motion.div className={styles.search}>
     
      <input 
      onChange={(value)=>{
        findUser(value.currentTarget.value)
        console.log("iahsdk;fj")
      }}
      className={styles.searchInput}
      type="search" placeholder="Connect with Friends and Groups"></input>
            <Image
      alt="search"
      src={searchIcon}
      height={32}
      width={32}
      ></Image>
      <Person
      username={"hello"}
      ></Person>
    </motion.div>
  );
}
