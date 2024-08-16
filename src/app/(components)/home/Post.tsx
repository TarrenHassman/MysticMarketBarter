import React from "react";
import styles from "./styles/Post.module.css";
import Person from "./Person";
import Image from "next/image"
import image from "../../../../public/example/applebaklava.jpg"
export default function Post() {
  return (
    <div className={styles.post}>
        <div>
            <Image
            alt="Image"
            height={200}
            width={400}
            src={image}
            ></Image>
        </div>
       <div
       className={styles.person}
       >
       <Person 
        username={"matoaka.eth"}></Person>
       </div>
    </div>
  );
}
