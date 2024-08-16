import React from 'react'
import styles from './styles/Person.module.css'
import Image from "next/image";
import logo from "../../../../public/logo.svg"
export default function Person({username}) {
    if(username.endsWith(".eth")){

    }else{
        
    }
  return (
    <div
    className={styles.person}
    >
         <img alt="Avatar" src="favicon.ico" className={styles.avatar} />
        {/* <Image
        alt="avatar"
        width={40}
        height={40}
        src={logo}
        className={styles.avatar}
        ></Image> */}
        <h1
        className={styles.username}
        >{username}</h1>
    </div>
  )
}
