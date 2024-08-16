import React from "react";
import styles from "./GroupTile.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";

const tiles = [
  {
    avatar: "",
    name: "",
  },
  {
    avatar: "",
    name: "",
  },
  {
    avatar: "",
    name: "",
  },
  {
    avatar: "",
    name: "",
  },
  {
    avatar: "",
    name: "",
  },
  {
    avatar: "",
    name: "",
  },
];

const fetchPosts = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return tiles.slice((page - 1) * 2, page * 2);
};

export default function GroupTile() {
  // const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
  //   ["query"],
  //   async ({ pageParam = 1 }) => {
  //     const response = await fetchPosts(pageParam);
  //     return response;
  //   },
    
    
  //     getNextPageParam: (_, pages) => {},
    
  // );
  return (
    <div className={styles.groupTile}>
      <div></div>
      <div></div>
    </div>
  );
}
