import React, { useState } from "react";
import styles from "./styles/Uploader.module.css";
import { MdCloudUpload } from "react-icons/md";
import { useStore } from "@tanstack/react-store";
import { orbit } from "../database/Orbit";
export default function Uploader() {
  //convert to store
  //show in adjacent screen
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [fileName, setFileName] = useState("No File Selected");
  let db = useStore(orbit, (orbit) => orbit.state.databases);
  return (
    <main className={styles.main}>
      <form
        className={styles.uploader}
        action=""
        onClick={() => document.getElementById("file").click()}
      >
        <input
          className={styles.fileInput}
          id="file"
          type="file"
          accept="video/*,image/*,.html"
          onAbort={() => {
            console.log("abort");
          }}
          onChange={async ({ target: { files } }) => {
            if (files.item(0).type.endsWith("text/html")) {
              console.log("cooking with gas");
            }
            if (files.item(0).type.endsWith("solidity")) {
              console.log("UNICODE_FIRE_EMOJI_CODE UNICODE_FIRE_EMOJI_CODE UNICODE_FIRE_EMOJI_CODE UNICODE_FIRE_EMOJI_CODE UNICODE_FIRE_EMOJI_CODE UNICODE_FIRE_EMOJI_CODE UNICODE_FIRE_EMOJI_CODE");
            }
            console.log(files.item(0).arrayBuffer)
            await db[0].put({
              _id: "fileName",
              file: files[0] as File,
            });
            const filereader = new FileReader();
            filereader.onload = () => {
              setImage(filereader.result)
            };
           
              filereader.readAsDataURL(files[0]);
            
            setFileName("test")
            let a = await db[0].all()
            console.log(a[0].value);
            let f: File = a[0].value.file
            console.log(f);
          }}
          hidden
        />
        {/* Src warning can be ignored */}
        {image != null ? (
          <img src={image} />
        ) : (
          <MdCloudUpload color="black" size={60}></MdCloudUpload>
        )}
      </form>
    </main>
  );
}
