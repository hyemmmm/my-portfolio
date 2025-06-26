import { create } from "zustand";

type StoreState = {
  treeData: TreeCheckNode[];
  setTreeData: (treeData: TreeCheckNode[]) => void;
  treeAllChecked: TreeCheckedState;
  setTreeAllChecked: (treeAllChecked: TreeCheckedState) => void;
  resetTreeviewStore: () => void;
};

const useTreeViewStore = create<StoreState>((set) => ({
  treeData: [],
  setTreeData: (treeData) => set({ treeData }),
  treeAllChecked: "unchecked",
  setTreeAllChecked: (treeAllChecked) => set({ treeAllChecked }),
  resetTreeviewStore: () =>
    set({
      treeData: [],
      treeAllChecked: "unchecked",
    }),
}));

export default useTreeViewStore;
