"use client";

import { useAccount } from "wagmi";
import { createHelia, libp2pDefaults } from "helia";
import { gossipsub } from "@chainsafe/libp2p-gossipsub";
import { createOrbitDB } from "@orbitdb/core";
import { useState, useEffect } from "react";
import Sidebar from "./(components)/sidebars/Sidebar";
import Search from "./(components)/home/Search";
import GroupSidebar from "./(components)/sidebars/GroupSidebar";
import HomeSidebar from "./(components)/sidebars/HomeSidebar";
import MessageSidebar from "./(components)/sidebars/MessageSidebar";
import { motion } from "framer-motion";
import styles from "./(components)/styles/Page.module.css";
import Post from "./(components)/home/Post";
import Editor from "./(components)/home/Editor";
import { useStore } from "@tanstack/react-store";
import { sidebar } from "./(components)/sidebars/hooks/use-sidebar";
export default function Home() {
  const [address, setAddress] = useState("");
  let loading = false;

  useEffect(() => {
    async function loadDB() {
      const libp2pOptions = libp2pDefaults();
      libp2pOptions.services.pubsub = gossipsub();
      const ipfs = await createHelia({ libp2p: libp2pOptions });
      const orbitdb = await createOrbitDB({ ipfs });
      const db = await orbitdb.open("test");
      setAddress(db.address);
      await db.close();
      await ipfs.stop();
    }

    if (!loading) {
      loading = true;
      loadDB();
    }
  }, []);
  let sidebarIndex = useStore(sidebar, (sidebar) => sidebar.sidebarIndex);
  return (
    <main
     className={styles.main}>
      <div
      className={styles.backgroundGrid}
      ></div>
      <div
        style={{
          position: "fixed",
          height: "100vh",
        }}
      >
        {/* Navigation side bar */}
        <Sidebar></Sidebar>
        {/* Page specific Sidebar */}
        <div>
          <div
            style={{
              zIndex:-1,
              opacity: sidebarIndex == 1 ? 1 : 0,
              top: "120px",
              position: "absolute",
            }}
          >
            <GroupSidebar></GroupSidebar>
          </div>
          <div
            style={{
              zIndex:-1,
              opacity: sidebarIndex == 0 ? 1 : 0,
              top: "120px",
              position: "absolute",
            }}
          >
            <Editor></Editor>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 12,
          marginLeft: 362,
        }}
      >
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </main>
  );
}
