import React, { useState } from "react";
import styles from "./styles/Editor.module.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MenuBar } from "./EditorMenu";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import PostToggle from "./PostToggle";
import Uploader from "./Uploader";
import { useStore } from "@tanstack/react-store";
import { orbit } from "../database/Orbit";
export default function Editor() {
  const [value, setValue] = useState("");
  // const editor = useEditor({
  //   extensions: [
  //     StarterKit.configure(),
  //     TextAlign.configure({
  //       types: ["heading", "paragraph"],
  //     }),
  //     Highlight,
  //   ],
  //   content: "<p>Hello World! 🌎️</p>",
  //   editorProps: {
  //     attributes: {
  //       class: styles.richText,
  //     },
  //   },
  // });
  let aaaa = useStore(orbit, (orbit) => orbit.state.databases);
  return (
    <div className={styles.editorSidebar}>
      <div className={styles.editor}>
        {/* <PostToggle></PostToggle> */}
        {/* <EditorContent editor={editor} /> */}
        {/* <MenuBar editor={editor} /> */}
        <input
          className={styles.richText}
          type="text"
          onChange={(a) => {
          
            setValue(a.target.value);
          }}
          
        ></input>
        <Uploader></Uploader>
      </div>

      <button
       onClick={async () => {
        let a = aaaa[0].length;
        await aaaa[0].put({
          _id: "name",
          doc: {
            type: "text",
            value: value,
          },
        });
        await aaaa[0].put({
          _id: "name1",
          doc: {
            type: "text",
            value: value,
          },
        });
        // await aaaa[0].put("doc2", { hello: "world 2", hits: 2 });
        console.log("Records:");
    
        let b = await aaaa[0].all()
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
