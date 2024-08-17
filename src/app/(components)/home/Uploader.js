import React, { useState } from "react";
import styles from "./styles/Uploader.module.css";
import { MdCloudUpload } from "react-icons/md";
export default function Uploader() {
  //convert to store
  //show in adjacent screen
  const [image, setFile] = useState(null);
  const [fileName, setFileName] = useState("No File Selected");
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
          onAbort={()=>{
            console.log("abort")
          }}
          onChange={({ target: { files } }) => {
            if(files.item(0).type.endsWith('text/html')){
              console.log('cooking with gas')
            }
            console.log(files)
          }}
          hidden
        />
        {image ? (
          <img src={image} />
        ) : (
          <MdCloudUpload color="black" size={60}></MdCloudUpload>
        )}
      </form>
    </main>
  );
}
