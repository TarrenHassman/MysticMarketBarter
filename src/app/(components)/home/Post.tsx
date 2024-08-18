import React, { useEffect, useState } from "react";
import styles from "./styles/Post.module.css";
import Person from "./Person";
import Image from "next/image";
import image from "../../../../public/example/applebaklava.jpg";
import { orbit } from "../database/Orbit";
import { useStore } from "@tanstack/react-store";
import { useAccount, useEnsName } from "wagmi";
import parse from "html-react-parser";
export default function Post() {
  let db = useStore(orbit, (orbit) => orbit.state.databases);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [post, setPost] = useState("")
  const { address, isConnected } = useAccount();
  const { data, isError, isLoading } = useEnsName({
    address: address,
  });
  const fetchPost = async () => {
    let b = await db[0].all()
    let index = b.length -1
    console.log(index)
    console.log( b[index].value.doc.value)
   setPost( b[index].value.doc.value)
    // const filereader = new FileReader();
    // filereader.onload = () => {};
    // for await (const record of db[0].iterator()) {
    //   console.log(record.value.file);
    //   filereader.readAsDataURL(record.value.file);
    // }
  };
  useEffect(() => {
    console.log(db.length);
   
    if (db[0]) {
      fetchPost();
    } else {
      console.log(db[0]);
    }
  }, []);
  
  return (
    <div className={styles.post}>
      <button
        className={styles.refresh}
        onClick={async () => {
         fetchPost()
        }}
      >
        Refresh! Loads only most recent...
      </button>
      {/* Simple Text Post integration */}
      <div
      className={styles.text}
      >
        
        {db.length != 0 ? db[0].length != 0 ? <div className={styles.parsedhtml}>{parse(`${post}`)}</div> : "" : ""}
      </div>
      {/* Support HTML */}
        {
          post != "" ? db.length != 0 ? db[0].length != 0 ? "" : "" : "" : <div>
          <Image alt="Image" height={200} width={400} src={image}></Image>
        </div>
        }
      
      <div className={styles.person}>
        <Person username={address ?? post == "" ? "matoaka.eth" : "Login"} buttonType={""}></Person>
      </div>
    </div>
  );
}
