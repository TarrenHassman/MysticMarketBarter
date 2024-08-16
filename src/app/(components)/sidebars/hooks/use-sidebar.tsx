import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";

// You can use @tanstack/store outside of React components too!
export const sidebar = new Store({
  sidebarIndex: 0,
});


const updateState = (index) => {
  sidebar.setState((state) => {
    return {
      ...state,
      ["sidebarIndex"]: index,
    };
  });
};