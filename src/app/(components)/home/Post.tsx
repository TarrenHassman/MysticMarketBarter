import React, { useEffect, useState } from "react";
import styles from "./styles/Post.module.css";
import Person from "./Person";
import Image from "next/image";
import image from "../../../../public/example/applebaklava.jpg";
import { orbit } from "../database/Orbit";
import { useStore } from "@tanstack/react-store";

export default function Post() {
  let db = useStore(orbit, (orbit) => orbit.state.databases);
  const [file, setFile] = useState<File | undefined>(undefined);
  useEffect(() => {
    console.log(db.length)
    const fetchPost = async () => {
      const filereader = new FileReader();
      filereader.onload = () => {};
      for await (const record of db[0].iterator()) {
        console.log(record.value.file);
        filereader.readAsDataURL(record.value.file);
      }
    };
    if(db[0]){
      fetchPost();
    }else {console.log(db[0])}
  }, []);
  console.log(db.length != 0 ? db[0].all() : "nothing here")
  return (
    <div className={styles.post}>
      <button
      className={styles.refresh}
      onClick={async ()=>{
        const filereader = new FileReader();
      filereader.onload = () => {};
      for await (const record of db[0].iterator()) {
        console.log(record.value.file.typeof);
        console.log(record.value.file.file);
        let r = record.value.file.file as Blob
        filereader.readAsDataURL(r);
      }
      }}
      >
Refresh! Good for First Image!
      </button>

      {db.length}
      {db.length != 0 ? "" : ""}
      <div>
        <Image alt="Image" height={200} width={400} src={image}></Image>
      </div>
      <div className={styles.person}>
        <Person username={"matoaka.eth"} buttonType={""}></Person>
      </div>
    </div>
  );
}
