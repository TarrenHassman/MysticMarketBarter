import React from "react";
import styles from "./styles/Editor.module.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MenuBar } from "./EditorMenu";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import PostToggle from "./PostToggle";
import Uploader from "./Uploader";
export default function Editor() {
  // const editor = useEditor({
  //   extensions: [
  //     StarterKit.configure(),
  //     TextAlign.configure({
  //       types: ["heading", "paragraph"],
  //     }),http://localhost:8080/
  //     Highlight,
  //   ],
  //   content: "<p>Hello World! 🌎️</p>",
  //   editorProps: {
  //     attributes: {
  //       class: styles.richText,
  //     },
  //   },
  // });

  return (
    <div className={styles.editorSidebar}>
    

      <div
      className={styles.editor}
      >
        {/* <PostToggle></PostToggle>
      <EditorContent editor={editor} />
      <MenuBar editor={editor} /> */}
      <Uploader></Uploader>
      </div>
      
      <button className={styles.createButton}>Share Post</button>
      {/* <button className={styles.shareButton}>Share</button> */}
    </div>
  );
}
