import React, { useState } from "react";
import styles from "./styles/Editor.module.css";
import PostToggle from "./PostToggle";
import Uploader from "./Uploader";
import { useStore } from "@tanstack/react-store";
import { orbit } from "../database/Orbit";
import NovelEditor from "./RichText";
export default function EditorContainer() {
  const [value, setValue] = useState("");
  const [content, setContent] = useState("");

  let aaaa = useStore(orbit, (orbit) => orbit.state.databases);
  return (
    <div className={styles.editorSidebar}>
      <div className={styles.editor}>
        {/* <PostToggle></PostToggle> */}
        {/* <EditorContent editor={editor} /> */}
        {/* <MenuBar editor={editor} /> */}
        <div className={styles.novel}>
          <NovelEditor setContent={setContent} />
        </div>

        {/* <textarea
          className={styles.richText}
          onChange={(a) => {
            setValue(a.target.value);
          }}
        ></textarea> */}

        <Uploader></Uploader>
      </div>

      <button
        onClick={async () => {
          let a = aaaa[0].length;
          let b = await aaaa[0].all();
          let index = b.length - 1;
          await aaaa[0].put({
            _id: b.length,
            doc: {
              type: "text",
              value: content,
            },
          });
          console.log("Records:");
          console.log(b[0].value.doc.value);
        }}
        className={styles.createButton}
      >
        Share Post
      </button>
      {/* <button className={styles.shareButton}>Share</button> */}
    </div>
  );
}
