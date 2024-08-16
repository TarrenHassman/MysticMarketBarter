import React from "react";
import styles from "./styles/GroupSidebar.module.css";
import Search from "../home/Search";
import GroupTile from "../group/GroupTile";
export default function GroupSidebar() {
  return (
    <div className={styles.groupSidebar}>
      <div className={styles.groups}>
        <div style={{ display: "flex", flexDirection: "row", gap:'12px' }}>
          <GroupTile></GroupTile>
          <GroupTile></GroupTile>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap:'12px' }}>
          <GroupTile></GroupTile>
          <GroupTile></GroupTile>
        </div>
      </div>
      <Search></Search>
    </div>
  );
}
