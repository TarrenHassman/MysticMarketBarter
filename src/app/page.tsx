"use client";
import { useState, useEffect } from "react";
import Sidebar from "./(components)/sidebars/Sidebar";
import GroupSidebar from "./(components)/sidebars/GroupSidebar";
import styles from "./(components)/styles/Page.module.css";
import Post from "./(components)/home/Post";
import Editor from "./(components)/home/Editor";
import { useStore } from "@tanstack/react-store";
import { sidebar } from "./(components)/sidebars/hooks/use-sidebar";
import Orbit, { orbit } from "./(components)/database/Orbit";

export default function Home() {
  let sidebarIndex = useStore(sidebar, (sidebar) => sidebar.sidebarIndex);
  let aaaa = useStore(orbit, orbit=>orbit.state.databases)
  let isLoaded = useStore(orbit, orbit=>orbit.state.isLoaded)
  return (
    <main className={styles.main}>
      <Orbit></Orbit>
      <div className={styles.backgroundGrid}></div>
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
              zIndex: sidebarIndex == 1 ? -1 : -2,
              opacity: sidebarIndex == 1 ? 1 : 0,
              top: "120px",
              position: "absolute",
            }}
          >
            <GroupSidebar></GroupSidebar>
          </div>
          <div
            style={{
              zIndex: sidebarIndex == 0 ? -1 : -2,
              opacity: sidebarIndex == 0 ? 1 : 0,
              top: "120px",
              position: "absolute",
            }}
          >
            <h1>
          {isLoaded ? aaaa[0].address : "loading" }
        </h1>
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
      </div>
    </main>
  );
}
