import {
  childrenMap,
  rootNodes,
} from "../components/treeview/mockTreeData_orgchart";

export const getTreeNodes = async (id?: string) => {
  const data = id ? childrenMap[id] ?? [] : rootNodes;
  return Promise.resolve({ data: { data } });
};
