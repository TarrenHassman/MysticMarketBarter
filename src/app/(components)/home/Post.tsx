import React, { useEffect, useState } from "react";
import styles from "./styles/Post.module.css";
import Person from "./Person";
import Image from "next/image";
import image from "../../../../public/example/applebaklava.jpg";
import { orbit } from "../database/Orbit";
import { useStore } from "@tanstack/react-store";
import { useAccount, useEnsName } from "wagmi";

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
    console.log( b[0].value.doc.value)
   setPost( b[0].value.doc.value)
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
  console.log(db.length != 0 ? db[0].all() : "nothing here");
  return (
    <div className={styles.post}>
      <button
        className={styles.refresh}
        onClick={async () => {
         fetchPost()
        }}
      >
        Refresh! Works for the first post :{")"}
      </button>
      {db.length != 0 ? db[0].length != 0 ? post : "" : ""}
      <div>
        <Image alt="Image" height={200} width={400} src={image}></Image>
      </div>
      <div className={styles.person}>
        <Person username={address ?? "aj;lskdf"} buttonType={""}></Person>
      </div>
    </div>
  );
}
